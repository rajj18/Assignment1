const express = require("express");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controller/restaurant");
const {authenticateToken, adminCheck, businessOwnerCheck, userCheck} = require('../middlewares/authmid')

const router = express.Router();

//routes
// CRAETE RESTURANT || POST
router.post("/create", createResturantController);

// GET ALL RESTURANTS || GET
router.get("/getAll", getAllResturantController);

// GET RESTURANT BY ID || GET
router.get("/get/:id", getResturantByIdController);

// DELETE RESTURANT || DELETE
router.delete("/delete/:id", deleteResturantController);


module.exports = router;