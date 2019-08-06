const express = require("express");
const router = express.Router();
const categories = require("../categories.json");
const products = require("../products.json");

router.get("/categories", (req, res) => {
  res.status(200).json(categories);
});

router.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (typeof categories.data[id - 1] !== "undefined") {
    return res.status(200).json(categories.data[id - 1]);
  } else {
    return res.status(200).json(categories.error);
  }
});

router.get("/categories/:id/products", (req, res) => {
  const id = req.params.id;

  return res
    .status(200)
    .json(
      products.data.filter(product => product.categoryId.includes(Number(id)))
    );
});

module.exports = router;
