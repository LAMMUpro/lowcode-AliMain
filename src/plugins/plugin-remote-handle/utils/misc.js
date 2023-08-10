"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.generateClassName = generateClassName;
exports.mergeTwoObjectListByKey = mergeTwoObjectListByKey;
exports.safeParse = safeParse;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _findIndex2 = _interopRequireDefault(require("lodash/findIndex"));
var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));
/**
 * 合并两个对象数组，如果指定了 KEY，当存在 KEY 值相同的情况，将第一个对象数组里的对象替换
 * @param list1 待合并的第一个对象数组
 * @param list2 待合并的第二个对象数组
 * @param key 判断是否覆盖的对象 KEY
 * @param returns 合并后的对象数组
 */
function mergeTwoObjectListByKey(list1, list2, key) {
  if (!(0, _isArray2["default"])(list1) && !(0, _isArray2["default"])(list2)) {
    return [];
  }
  if (!(0, _isArray2["default"])(list1)) {
    return [].concat(list2);
  }
  if (!(0, _isArray2["default"])(list2)) {
    return [].concat(list1);
  }
  return list2.reduce(function (acc, cur) {
    if (!(0, _isPlainObject2["default"])(cur)) return acc;
    var indexToReplace = (0, _findIndex2["default"])(acc, function (item) {
      return item[key] === cur[key];
    });
    if (indexToReplace !== -1) {
      acc[indexToReplace] = (0, _extends2["default"])({}, cur);
      return acc;
    }
    return acc.concat([cur]);
  }, list1);
}
function generateClassName(name) {
  return "lowcode-plugin-datasource-pane-" + name;
}
function safeParse(input, fallbackValue) {
  try {
    return JSON.parse(input);
  } catch (err) {
    if (!(0, _isUndefined2["default"])(fallbackValue)) {
      return fallbackValue;
    }
    return input;
  }
}