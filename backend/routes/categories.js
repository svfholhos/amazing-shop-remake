const express = require("express");
const router = express.Router();
const categories = require("../categories.json");

const {
  getAllCategories,
  getCategoryById,
  getProductsByCategoryId
} = require("../controllers/categories");

router.get("/categories", getAllCategories);

router.get("/categories/:id", getCategoryById);

router.get("/categories/:id/products", getProductsByCategoryId);

module.exports = router;
