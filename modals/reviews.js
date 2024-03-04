const mongoose = require('mongoose');

// Define the review schema
const reviewSchema = new mongoose.Schema({
  restaurantTitle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resturant',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},
    { timestamps: true }
);

// export
module.exports = mongoose.model('Review', reviewSchema);