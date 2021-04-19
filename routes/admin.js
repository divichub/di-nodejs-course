const path = require("path");
const express = require("express");

const root = require("../util/rootDir");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Admin Panel</h1>");
});

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(root, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
