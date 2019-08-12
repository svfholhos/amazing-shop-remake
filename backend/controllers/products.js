const products = require("../products.json");
const fs = require("fs");
const path = require("path");

const getAllProducts = (req, res) => {
  res.status(200).json(products.data);
};

const getProductById = (req, res) => {
  const id = req.params.id;
  if (typeof products.data[id - 1] !== "undefined") {
    return res.status(200).json(products.data[id - 1]);
  } else {
    return res.status(404).json(products.error);
  }
};

// POST
const newProduct = async (req, res) => {
  const id = products.data[products.data.length - 1].id + 1;
  let product = { id: id, ...req.body };
  const newData = [...products.data];
  // console.log("old", newData);
  newData.push(product);
  // console.log("new", newData);
  const newProductsFile = {
    data: newData,
    error: "Error! Product not found..."
  };

  const filePath = path.resolve(__dirname, "../products.json");

  if (typeof product === "undefined") {
    return res.status(400).json("Error! Empty post...");
  } else {
    fs.writeFile(filePath, JSON.stringify(newProductsFile, null, 2), err => {
      if (err) {
        throw err;
      } else {
        console.log("Products file was modified!");
        res.status(200).json("Added a new product...");
      }
    });
  }
};

// PUT
const updateProduct = async (req, res) => {
  const id = req.params.id;
  let product = { id: id, ...req.body };
  const newData = [product, ...products.data];

  const newProductsFile = {
    data: newData,
    error: "Error! Product not found..."
  };

  const filePath = path.resolve(__dirname, "../products.json");

  if (typeof product === "undefined") {
    return res.status(400).json("Error! Empty post...");
  } else {
    // fs.writeFile(filePath, JSON.stringify(newProductsFile, null, 2), err => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("Products file was modified!");
    //     res.status(200).json("Added a new product...");
    //   }
    // });
    res.status(200).json(product);
  }
};

module.exports = { getAllProducts, getProductById, newProduct, updateProduct };
