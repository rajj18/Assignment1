const mongoose = require("mongoose");
//function mmongodb dfatabase connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected To MongoDB ${mongoose.connection.host} `);
  } catch (error) {
    console.log("DB Error", error);
  }
};
module.exports = connectDb;