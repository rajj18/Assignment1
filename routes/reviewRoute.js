const express = require("express");
const {
  createReviewController,
  updateReviewController,
  getReviewController,
  deleteReviewController,
} = require("../controller/review");
const {adminCheck, businessOwnerCheck, userCheck} = require('../middlewares/authmid')

const router = express.Router();

//routes
// GET USER || GET
router.post("/createReview", createReviewController);

// UPDATE PROFILE
router.put("/updateReview", updateReviewController);

// RESET PASSWORD
router.get("/getReview", getReviewController);

// delete USER
router.delete("/deleteReview/:id", deleteReviewController);

module.exports = router;