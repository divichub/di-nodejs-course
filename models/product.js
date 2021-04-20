const fs = require("fs");
const path = require("path");

const rootDir = require("../util/rootDir");

const filePath = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(filePath, (err, content) => {
    if (!err) {
      callback(JSON.parse(content));
    } else {
      callback([]);
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) =>
        console.log(err)
      );
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
