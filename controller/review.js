const reviewModel = require('../modals/reviews')
// Create Review Controller
const createReviewController = async (req, res) => {
    try {
      const {
        restaurantId,
        userId,
        rating,
        comment,
      } = req.body;
  
      // Validation
      if (!restaurantId || !userId || !rating || !comment) {
        return res.status(500).send({
          success: false,
          message: "Please provide restaurantId, userId, rating, and comment",
        });
      }
  
      const newReview = new reviewModel({
        restaurantId,
        userId,
        rating,
        comment,
      });
  
      await newReview.save();
  
      res.status(201).send({
        success: true,
        message: "New Review created successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Create Review API",
        error: error.message,
      });
    }
  };
  
  // Read Review Controller
  const getReviewController = async (req, res) => {
    try {
      const reviews = await reviewModel.find();
      res.status(200).send({
        success: true,
        message: "Reviews retrieved successfully",
        data: reviews,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Get Reviews API",
        error: error.message,
      });
    }
  };
  
  // Update Review Controller
  const updateReviewController = async (req, res) => {
    try {
      const { id } = req.params;
      const { rating, comment } = req.body;
  
      const review = await reviewModel.findByIdAndUpdate(id, { rating, comment }, { new: true });
  
      if (!review) {
        return res.status(404).send({
          success: false,
          message: "Review not found",
        });
      }
  
      res.status(200).send({
        success: true,
        message: "Review updated successfully",
        data: review,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Update Review API",
        error: error.message,
      });
    }
  };
  
  // Delete Review Controller
  const deleteReviewController = async (req, res) => {
    try {
      const { id } = req.params;
  
      const review = await reviewModel.findByIdAndDelete(id);
  
      if (!review) {
        return res.status(404).send({
          success: false,
          message: "Review not found",
        });
      }
  
      res.status(200).send({
        success: true,
        message: "Review deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Delete Review API",
        error: error.message,
      });
    }
  };

  module.exports = {
    createReviewController,
    getReviewController,
    updateReviewController,
    deleteReviewController,
  };
  