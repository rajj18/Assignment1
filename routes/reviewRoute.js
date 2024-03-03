const express = require("express");
const {
  createReviewController,
  updateReviewController,
  getReviewController,
  deleteReviewController,
} = require("../controller/review");
const authMiddleware = require("../middlewares/authmid");

const router = express.Router();

//routes
// GET USER || GET
router.post("/createReview", authMiddleware, createReviewController);

// UPDATE PROFILE
router.put("/updateReview", authMiddleware, updateReviewController);

// RESET PASSWORD
router.get("/getReview", authMiddleware, getReviewController);

// delete USER
router.delete("/deleteReview/:id", authMiddleware, deleteReviewController);

module.exports = router;