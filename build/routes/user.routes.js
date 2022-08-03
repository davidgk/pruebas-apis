"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = exports["default"] = void 0;

var _express = require("express");

var userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
userRouter.get('/', function (req, res) {
  return res.json('getUsers');
});
var _default = userRouter;
exports["default"] = _default;