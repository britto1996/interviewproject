const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/Db");
const userRoute = require("./routes/UserRoute");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());

app.use(cors());

app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
