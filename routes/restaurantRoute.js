const express = require("express");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  updateRestaurantController,
  deleteResturantController,
} = require("../controller/restaurant");
const {authenticateToken, adminCheck, businessOwnerCheck, userCheck} = require('../middlewares/authmid')

const router = express.Router();

//routes
// CRRATE RESTAURANT || POST
router.post("/create", createResturantController);

// GET ALL RESTAURANTS || GET
router.get("/getAll", getAllResturantController);

// GET RESTAURANT BY ID || GET
router.get("/get/:id", getResturantByIdController);

// Update RESTAURANT 
router.put("/updateRestaurant", updateRestaurantController)

// DELETE RESTAURANT || DELETE
router.delete("/delete/:id", deleteResturantController);


module.exports = router;