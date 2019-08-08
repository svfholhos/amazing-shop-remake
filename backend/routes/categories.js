const express = require("express");
const router = express.Router();
const categories = require("../categories.json");

const {
  Category,
  getAllCategories,
  getCategoryById,
  getProductsByCategoryId
} = require("../controllers/categories");

router.get("/categories", getAllCategories);

router.get("/categories/:id", getCategoryById);

router.get("/categories/:id/products", getProductsByCategoryId);

// POSTS
router.post("/categories/post", (req, res) => {
  const id = categories.data[categories.data.length - 1].id + 1;
  const name = req.body.name;
  const children = req.body.children;
  const newCategory = new Category(id, name, children);
  res.send({ newCategory }).json();
});

module.exports = router;
