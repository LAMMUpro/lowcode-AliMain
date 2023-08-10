"use strict";

exports.__esModule = true;
var _DataSourceOperations = require("./DataSourceOperations");
Object.keys(_DataSourceOperations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DataSourceOperations[key]) return;
  exports[key] = _DataSourceOperations[key];
});