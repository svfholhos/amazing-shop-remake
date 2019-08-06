const express = require("express");
const bodyParser = require("body-parser");
const categoriesRouter = require("./routes/categories");
const productsRouter = require("./routes/products");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", categoriesRouter);
app.use("/api", productsRouter);
module.exports = app;
