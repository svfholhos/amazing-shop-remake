const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../controllers/products");
const { productIdValidation } = require("../middleware/products");
const { validatePathParams } = require("../middleware/lib");

router.get("/products", getAllProducts);

router.get(
  "/products/:id",
  validatePathParams(productIdValidation),
  getProductById
);

/*
router.get("/products/?category=:categoryId", (req, res) => {
  const query = req.query;
  const categoryId = req.params.categoryId;
  console.log(categoryId, query);
  return res.status(200).json(products.data);
});
*/

module.exports = router;
