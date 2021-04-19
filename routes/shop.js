const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  const products = adminData.products;
  res.render("shop", { pageTitle: "Add product", path: "/", prods: products });
});

module.exports = router;
