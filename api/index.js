import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! Now you can use the express");
});
app.listen(3000, () => {
  console.log(`Running on port : 3000`);
});
