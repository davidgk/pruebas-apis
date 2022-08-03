"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var productRoutes = (0, _express.Router)();
productRoutes.get('/', _products.getProducts);
productRoutes.get('/:productId', _products.getProductById);
productRoutes.put('/:productId', _products.updateProducts);
productRoutes["delete"]('/:productId', _products.deleteProducts);
productRoutes.post('/', _products.createProduct);
var _default = productRoutes;
exports["default"] = _default;