"use strict";

exports.__esModule = true;
var _fetch = require("./fetch");
Object.keys(_fetch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fetch[key]) return;
  exports[key] = _fetch[key];
});
var _mtop = require("./mtop");
Object.keys(_mtop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mtop[key]) return;
  exports[key] = _mtop[key];
});
var _jsonp = require("./jsonp");
Object.keys(_jsonp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jsonp[key]) return;
  exports[key] = _jsonp[key];
});