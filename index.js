const express = require("express");
const mongoose = require("mongoose");
// const multer = require("multer");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const app = express();
// middleware
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("uploads")); //image upload
app.use(cookieParser());
app.use(cors());
// database connection is here
mongoose
  .connect(`${process.env.MONGO_URI}`, {
    dbName: "talentRecruiterDBByAlphaInfinity",
  })
  .then(() => console.log("connection success"))
  .catch((err) => console.log("error", err));

app.get("/", (req, res) => {
  res.json({ success: "server is running" });
});


app.listen(4000, () => {
  console.log("app is listening on port 4000");
});
