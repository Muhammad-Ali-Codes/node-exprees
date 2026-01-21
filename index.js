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
