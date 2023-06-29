const express = require('express');
const appRoute = express.Router();
const apiCall = require('../Controller/apiController');
const categoryController = require('../Controller/categoryController');
const { filter } = require('../Controller/filterController');
const getProductDetails = require("../Controller/productDetailsByProductId")

appRoute.get("/", apiCall);
appRoute.get("/api/category/:cname", categoryController);
appRoute.get("/api/category", categoryController);
appRoute.get("/api/product-details/:product_id", getProductDetails);
appRoute.post("/api/filter", filter);


module.exports = appRoute