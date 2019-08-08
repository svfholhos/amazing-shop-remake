const categories = require("../categories.json");
const products = require("../products.json");

function Category(id, name, children) {
  this.id = id;
  this.name = name;
  this.children = children;
}

const getAllCategories = (req, res) => {
  res.status(200).json(categories);
};

const getCategoryById = (req, res) => {
  const id = req.params.id;
  if (typeof categories.data[id - 1] !== "undefined") {
    return res.status(200).json(categories.data[id - 1]);
  } else {
    return res.status(200).json(categories.error);
  }
};

const getProductsByCategoryId = (req, res) => {
  const id = req.params.id;
  return res
    .status(200)
    .json(
      products.data.filter(product => product.categoryId.includes(Number(id)))
    );
};

module.exports = {
  Category,
  getAllCategories,
  getCategoryById,
  getProductsByCategoryId
};
