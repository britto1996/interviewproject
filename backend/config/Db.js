const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDb Connected");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectDB;
