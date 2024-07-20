import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
mongoose
  .connect(process.env.CONNECTION_URl)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));
const app = express();

app.listen(3000, (req, res) => {
  console.log("app works!!");
});
