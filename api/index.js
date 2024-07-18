import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.route.js";
dotenv.config();

// Connecting to the Mongoose
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to the Mongoose DB");
  })
  .catch((error) => {
    console.log("Error connecting to the Mongoose DB", error);
  });

const app = express();

app.use(express.json());
app.use("/api/data", userRoute);
app.use("/api/auth", authRoute);

// adding the MiddleWare and function to handle error
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => {
  console.log(`Running on port : 3000`);
});
