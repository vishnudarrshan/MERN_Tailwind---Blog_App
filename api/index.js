import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";

dotenv.config();
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));
const app = express();

app.listen(3000, () => {
  console.log("app works!!");
});

app.use("/api/user", userRoutes);
