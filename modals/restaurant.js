const mongoose = require("mongoose");

//schema
const resturantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, " Restaurant title is required"],
    },
    imageUrl: {
      type: String,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    address: { 
        type: String 
    },
  },
  { timestamps: true }
);

//export
module.exports = mongoose.model("Resturant", resturantSchema);