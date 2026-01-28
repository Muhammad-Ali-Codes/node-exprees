import mongoose from "mongoose";
import express from "express";
import coursemodel from "./models/coursemodel.js"; // ES Module style

const app = express();
app.use(express.json()); // optional, for POST requests

app.get("/courses", async (req, res) => {
  try {
    const result = await coursemodel.find({});
    res.status(200).send({
      isSuccessful: true,
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      isSuccessful: false,
      message: error.message,
      data: error,
    });
  }
});

app.post("/courses", (req, res) => {
  try {
     const body = req.body
     const obj = {
      name
     }

  } catch (error) {
       res.status(500).send({
      isSuccessful: false,
      message: error.message,
      data: error,
    });
  }
});

const port = 3000;

mongoose
  .connect(
    "mongodb+srv://muhabbatali:myworldisstart%24%24%24@cluster0.fepov5t.mongodb.net/test?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("MongoDB connect ho gaya");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB error:", error.message);
  });
