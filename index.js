const express = require('express')
const dotenv = require("dotenv");
const connectDb = require('./config/db');
const app = express();
const router = express.Router()
const customRoute = require('./routes/routes')

dotenv.config()
connectDb()
app.use(express.json());

app.use(router)
router.use('/api', customRoute)
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