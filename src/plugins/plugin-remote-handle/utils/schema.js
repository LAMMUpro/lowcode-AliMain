"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DATASOURCE_HANDLER_NAME_LIST = void 0;
exports.correctSchema = correctSchema;
exports.isSchemaValid = isSchemaValid;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _lowcodeTypes = require("@alilc/lowcode-types");
var DATASOURCE_HANDLER_NAME_LIST = ['dataHandler', 'errorHandler', 'willFetch', 'shouldFetch'];

/**
 * 协议是否合法
 * @param schema 协议
 */
exports.DATASOURCE_HANDLER_NAME_LIST = DATASOURCE_HANDLER_NAME_LIST;
function isSchemaValid(schema) {
  if (!(0, _isPlainObject2["default"])(schema)) return false;
  if (schema.list && !(0, _isArray2["default"])(schema.list)) return false;
  if ((0, _isArray2["default"])(schema === null || schema === void 0 ? void 0 : schema.list)) {
    return schema.list.every(function (dataSource) {
      return DATASOURCE_HANDLER_NAME_LIST.every(function (dataSourceHandlerName) {
        if ((0, _lowcodeTypes.isJSFunction)(dataSource === null || dataSource === void 0 ? void 0 : dataSource[dataSourceHandlerName])) {
          return true;
        }
        if (!(dataSourceHandlerName in dataSource)) {
          return true;
        }
        return false;
      });
    });
  }
  return true;
}

/**
 * 纠正协议
 * @param schema 原协议
 * @param schema 纠正后的协议
 */
function correctSchema(schema) {
  if (!(0, _isPlainObject2["default"])(schema)) return {
    list: []
  };
  var res = (0, _extends2["default"])({}, schema);
  if ((0, _isArray2["default"])(res === null || res === void 0 ? void 0 : res.list)) {
    res.list = res.list.map(function (dataSource) {
      var nextDataSource = (0, _extends2["default"])({}, dataSource);
      DATASOURCE_HANDLER_NAME_LIST.forEach(function (dataSourceHandlerName) {
        if ((0, _lowcodeTypes.isJSFunction)(nextDataSource === null || nextDataSource === void 0 ? void 0 : nextDataSource[dataSourceHandlerName]) && dataSourceHandlerName in nextDataSource) {
          delete nextDataSource[dataSourceHandlerName];
        }
      });
      return nextDataSource;
    });
  } else {
    res.list = [];
  }
  return res;
}