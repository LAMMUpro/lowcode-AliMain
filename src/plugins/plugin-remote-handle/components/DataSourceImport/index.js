"use strict";

exports.__esModule = true;
var _DataSourceImport = require("./DataSourceImport");
Object.keys(_DataSourceImport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DataSourceImport[key]) return;
  exports[key] = _DataSourceImport[key];
});