const products = require("../products.json");

const getAllProducts = (req, res) => {
  res.status(200).json(products.data);
};

const getProductById = (req, res) => {
  const id = req.params.id;
  if (typeof products.data[id - 1] !== "undefined") {
    return res.status(200).json(products.data[id - 1]);
  } else {
    return res.status(200).json(products.error);
  }
};

module.exports = { getAllProducts, getProductById };
