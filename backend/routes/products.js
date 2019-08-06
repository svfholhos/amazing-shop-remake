const express = require("express");
const router = express.Router();
const products = require("../products.json");

router.get("/products", (req, res) => {
  res.status(200).json(products);
});

router.get("/products/:id", (req, res) => {
  const id = req.params.id;
  if (typeof products.data[id - 1] !== "undefined") {
    return res.status(200).json(products.data[id - 1]);
  } else {
    return res.status(200).json(products.error);
  }
});

router.get("/products/?category=:categoryId", (req, res) => {
  const query = req.query;
  const categoryId = req.params.categoryId;
  console.log(categoryId, query);

  return res.status(200).json(products.data);
});

module.exports = router;
