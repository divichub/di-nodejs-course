const express = require("express");

const router = express.Router();

const products = [];

router.get("/", (req, res) => {
  res.send("<h1>Admin Panel</h1>");
});

router.get("/add-product", (req, res) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
