require("dotenv").config();
require("express-async-errors");
const express = require("express"); // ดึง Library Express มาใช้งาน
const app = express(); //เรียกใช้งาน
const cors = require("cors"); //กำหนด http ที่เข้ามา
const corsOptions = require("./src/config/corsOption");
const mongoose = require("mongoose");
const connectDB = require("./src/config/dbConn");

connectDB();

app.use(express.json());
app.use(cors());

// Mogoose setup //
const port = process.env.PORT || 5001;

mongoose.connection.once("opne", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`server is runing with port ${port}`));
});

mongoose.connection.on('error', (err) => {
    console.log(err);
})