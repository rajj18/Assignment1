const mongoose = require("mongoose");
//schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "user name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "phone number is require"],
    },
    // usertype: {
    //   type: String,
    //   required: [true, "user type is required"],
    //   //default: "user",
    //   enum: ["user", "admin", "businessOwner"],
    // },
    // profile: {
    //   type: String,
    //   default:
    //     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    // },
  },
  { timestamps: true }
);

//export
module.exports = mongoose.model("User", userSchema);