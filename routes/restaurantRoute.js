const express = require("express");

const authMiddleware = require("../middlewares/authmid");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controller/restaurant");

const router = express.Router();

//routes
// CRAETE RESTURANT || POST
router.post("/create", authMiddleware, createResturantController);

// GET ALL RESTURANTS || GET
router.get("/getAll", getAllResturantController);

// GET RESTURANT BY ID || GET
router.get("/get/:id", getResturantByIdController);

// DELETE RESTURANT || DELETE
router.delete("/delete/:id", authMiddleware, deleteResturantController);

module.exports = router;