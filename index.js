const express = require('express')
const dotenv = require("dotenv");
const connectDb = require('./config/db');
const app = express();

dotenv.config()
connectDb()
app.use(express.json());

app.get("/", (req, res) => {
    return res
      .status(200)
      .send("Welcome to Restaurant listing API BASE PROJECT");
  });
  
  //PORT
  const PORT = process.env.PORT || 5000;
  
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
  });