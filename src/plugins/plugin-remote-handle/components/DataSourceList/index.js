"use strict";

exports.__esModule = true;
var _DataSourceList = require("./DataSourceList");
Object.keys(_DataSourceList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DataSourceList[key]) return;
  exports[key] = _DataSourceList[key];
});