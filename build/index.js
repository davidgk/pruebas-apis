"use strict";

var _app = require("./app");

require("./database");

_app.app.listen(3000);

console.log('Server running on port', 3000);