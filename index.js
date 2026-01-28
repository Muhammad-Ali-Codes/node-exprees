<<<<<<< HEAD
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
=======
// const express = require('express');
// const server = express();
// const port = 3000;

// // General Middleware 1 (har request pe chalega)
// server.use((req, res, next) => {
//   console.log("Middleware 1:", req.method);
//   next();
// });

// // General Middleware 2 (har request pe chalega)
// server.use((req, res, next) => {
//   console.log("Middleware 2:", req.path);
//   next();
// });

// // Middleware specific for '/' route
// server.use('/', (req, res, next) => {
//   console.log("Middleware for / route");
//   next(); // aage route handler ko allow karna
// });

// // Middleware specific for '/about' route
// server.use('/about', (req, res, next) => {
//   console.log("Middleware for /about route");
//   next(); // aage route handler ko allow karna
// });

// // Route handlers
// server.get('/', (req, res) => {
//   res.send("Hello from /");
// });

// server.get('/about', (req, res) => {
//   res.send("Hello from /about");
// });

// // Catch-all 3rd middleware (final response for unmatched routes)
// server.use((req, res) => {
//   res.send("3rd response is end here");
// });

// server.listen(port, () => {
//   console.log("http://localhost:3000");
// });

const server = require("express");
const app = server();
const port = 3000;

app.use((req, res, next) => {
  console.log("1: miiddleware" + req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("2: miiddleware" + req.url, req.method);
  next();
});

app.use("/contact-us", (req, res) => {
  console.log("contact us " + req.url, req.method);
  res.send(`
    
      <form action="contact-us" method="post">

    <input type="text"  placeholder="name">
    <input type="text" placeholder="email">
    <input type="submit" value="Submit">
      </form>
    `);
});

app.post('/contact-us', (req, res) => {
  console.log("POST request received");
  res.send("Form submitted successfully!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get("/", (req, res) => {});
>>>>>>> 768e48f283f122cfec604ff016070fb46a20db8e
