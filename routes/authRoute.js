const express = require("express");
const {
  registerController,
  loginController,
} = require("../controller/auth");


const router = express.Router();

// router.get('/check', (req,res)=>{
//     res.status(200).send('hello world')
// })
//routes
//REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

module.exports = router;