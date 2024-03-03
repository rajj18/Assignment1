const userModel = require("../modals/userModal");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// REGISTER
const registerController = async (req, res) => {
    try {
      const { userName, email, password, phone, address } = req.body;
      // Detail validation
      if (!userName || !email || !password || !address || !phone) {
        return res.status(400).json({
          success: false,
          message: "Please provide all fields.",
        });
      }
      // Check if user exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Email already registered. Please login.",
        });
      }
      // Hashing password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // Create new user
      const user = await userModel.create({
        userName,
        email,
        password: hashedPassword,
        address,
        phone,
      });
      res.status(201).json({
        success: true,
        message: "Successfully registered.",
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while registering the user.",
      });
    }
  };
  

// LOGIN
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation for login
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Email OR Password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    //check user password for authentication
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    // token
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Login API",
      error,
    });
  }
};

module.exports = { registerController, loginController };