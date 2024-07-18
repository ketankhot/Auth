import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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

app.get("/", (req, res) => {
  res.send("Hello World! Now you can use the express");
});
app.listen(3000, () => {
  console.log(`Running on port : 3000`);
});
