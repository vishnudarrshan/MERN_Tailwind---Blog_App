import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("app works!!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Sever Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
