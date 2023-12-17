const express  =require("express");
const category = require("./category");
const product  = require("./product");

const route = express.Router();

route.use("/product",product);
route.use("/category",category);

module.exports = route;
