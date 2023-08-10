"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.filterXDisplay = void 0;
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var FILTER_KEY = 'x-display';
var FILTER_VALUE = ['hidden', 'none'];
var shouldDeleteKey = function shouldDeleteKey(targetObject) {
  Object.keys(targetObject).forEach(function (key) {
    if (FILTER_VALUE.includes(targetObject[key][FILTER_KEY])) {
      delete targetObject[key];
    }
  });
};
var filterXDisplay = function filterXDisplay(formSchema) {
  if (!(0, _isPlainObject2["default"])(formSchema)) return;
  if ((0, _get2["default"])(formSchema, 'properties')) {
    shouldDeleteKey(formSchema.properties);
  }
  if ((0, _get2["default"])(formSchema, 'properties.options.properties')) {
    shouldDeleteKey(formSchema.properties.options.properties);
  }
};
exports.filterXDisplay = filterXDisplay;