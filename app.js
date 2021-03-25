const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>Users page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Home page</h1>");
});

app.listen(9000);
