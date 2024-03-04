const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = require("../controller/user");
const {adminCheck, businessOwnerCheck, userCheck} = require('../middlewares/authmid')

const router = express.Router();

//routes
// GET USER || GET
router.get("/getUser", getUserController);

// UPDATE PROFILE
router.put("/updateUser", updateUserController);

//password update
router.post("/updatePassword", updatePasswordController);

// RESET PASSWORD
router.post("/resetPassword", resetPasswordController);

// delete USER
router.delete("/deleteUser/:id", deleteProfileController);

module.exports = router;