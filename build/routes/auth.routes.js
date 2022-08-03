"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controller");

var authRouter = (0, _express.Router)();
authRouter.post('/signin', _auth.signin);
authRouter.post('/signoff', _auth.signoff);
authRouter.post('/signup', _auth.signup);
var _default = authRouter;
exports["default"] = _default;