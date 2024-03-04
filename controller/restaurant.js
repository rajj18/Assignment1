const resturantModel = require("../modals/restaurant");
const userModel = require('../modals/userModal')

// CREATE RESTURANT
const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      isOpen,
      rating,
      address,
    } = req.body;
    // validation

    if (!title || !address) {
      return res.status(500).send({
        success: false,
        message: "please provide title and address",
      });
    }


    // Admin and Busniess Owner can create the restaurant with details
    const user = await userModel.findById(req.user.id);
    console.log(user)
    console.log(user.usertype)

    if(user.usertype === 'admin' || user.usertype === 'businessOwner'){
    const newResturant = await resturantModel.create({
        title,
        imageUrl,
        isOpen,
        rating,
        address,
    });
   
    await newResturant.save();

    res.status(201).send({
      success: true,
      message: "New Resturant Created successfully",
    });
    }else{
      return res.status(401).send({
      success: false,
      message: "Un-Authorized Access",
    });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

// GET ALL restaurant

// User, Admin, Business Owner all can get the restaurants with details
const getAllResturantController = async (req, res) => {
  try {
    const resturants = await resturantModel.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Availible",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: resturants.length,
      message: "Restaruants retrieved successfully",
      resturants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

// get restaurant by id
// All can  get the restaurant with specific id
const getResturantByIdController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Resturnat ID",
      });
    }
    //find resturant
    const resturant = await resturantModel.findById(resturantId);
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "no restaurant found",
      });
    }
    res.status(200).send({
      success: true,
      resturant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};


// UPDATE RESTURANT

const updateRestaurantController = async (req, res) => {
  try {
    // find user
    const restaurant = await resturantModel.findById({ _id: req.body.id });
    //validation
    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "restaurant not found",
      });
    }
    
    const user = await userModel.findById(req.user.id);
    console.log(user)
    console.log(user.usertype)

    // Admin and Busniess Owner can create the restaurant with details

      if(user.usertype === 'admin' || user.usertype === 'businessOwner'){
      const { title, imageUrl, isOpen, rating, address } = req.body;
      if (title) restaurant.title = title;
      if (imageUrl) restaurant.imageUrl = imageUrl;
      if (isOpen) restaurant.isOpen = isOpen;
      if (rating) restaurant.rating = rating;
      if (address) restaurant.address = address;
      //save user
      await restaurant.save();
      res.status(200).send({
        success: true,
        message: "Restaurant Updated SUccessfully",
      });
    } else{
      return res.status(401).send({
        success: false,
        message: "Un-Authorized Access",
      });
    }
  } catch (error) {
    console.log(erorr);
    res.status(500).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};


//DELETE RESTAURANT

// only Admin can delete the restaurant profile
const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Found OR Provide Resturant ID",
      });
    }
    const user = await userModel.findById(req.user.id);
    console.log(user)
    console.log(user.usertype)

    if(user.usertype === 'admin'){
    await resturantModel.findByIdAndDelete(resturantId);
    res.status(200).send({
      success: true,
      message: "Resturant Deleted Successfully",
    });
  } else{
    return res.status(401).send({
      success: false,
      message: "Un-Authorized Access",
    });
  }
}catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in delete resturant api",
      error,
    });
  }
};

module.exports = {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  updateRestaurantController,
  deleteResturantController,
};