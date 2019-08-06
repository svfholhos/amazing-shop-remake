const http = require("http");
const fs = require("fs");
const categories = "./categories.json";
const products = "./products.json";
const regexProducts = /(\/)(products)(\/).*([0-9A-Za-z\-]+)/;
const regexCategories = /(\/)(categories).*(\/)([0-9A-Za-z\-]+)/;

http
  .createServer((req, res) => {
    res.setHeader("Acces-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-type": "application/json" });

    //routing urls
    let url = req.url;
    if (url === "/categories") {
      readJSON(categories, (err, data) => {
        res.end(data);
      }); // helper function
    } else if (url === "/products") {
      readJSON(products, (err, data) => res.end(data));
      // check for category id
    } else if (url.match(regexCategories)) {
      let id = url.match(regexCategories).slice(-1);
      readJSON(categories, (err, data) => {
        let category = JSON.parse(data)[id - 1];
        if (typeof category === "undefined") {
          res.end("Category not found!");
        } else {
          res.end(JSON.stringify(category));
        }
      });
      // check for product id
    } else if (url.match(regexProducts)) {
      let id = url.match(regexProducts).slice(-1);
      readJSON(products, (err, data) => {
        let product = JSON.parse(data)[id - 1];
        if (typeof product === "undefined") {
          res.end("Product not found!");
        } else {
          res.end(JSON.stringify(product));
        }
      });
    }
  })
  .listen(5000, () => console.log("server started at port 5000"));

// read from json file
const readJSON = (jsonFile, callback) => {
  fs.readFile(jsonFile, "utf8", (err, data) => {
    if (err) callback(err);
    callback(null, data);
  });
};
