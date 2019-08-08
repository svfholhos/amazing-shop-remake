const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const categoriesRouter = require("./routes/categories");
const productsRouter = require("./routes/products");
//const errorHandler = require("./middleware/errorHandler");

const app = express();

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  }
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", categoriesRouter);
app.use("/api", productsRouter);

module.exports = app;
