import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/user.routes.js";
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

app.use("/api/data", route);
app.listen(3000, () => {
  console.log(`Running on port : 3000`);
});
