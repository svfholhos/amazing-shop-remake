const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  newProduct,
  updateProduct
} = require("../controllers/products");
const { productIdValidation } = require("../middleware/products");
const { validatePathParams } = require("../middleware/lib");

router.get("/products", getAllProducts);

router.get(
  "/products/:id",
  validatePathParams(productIdValidation),
  getProductById
);

router.post("/products", newProduct);

router.put("/products/:id", updateProduct);

module.exports = router;
