"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = exports["default"] = void 0;

var _express = require("express");

var _products = _interopRequireDefault(require("./products.routes"));

var _user = require("../controllers/user.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = (0, _express.Router)();
exports.userRouter = userRouter;

_products["default"].get('/:userId', _user.getUserById);

_products["default"].post('/', _user.createUser);

var _default = userRouter;
exports["default"] = _default;