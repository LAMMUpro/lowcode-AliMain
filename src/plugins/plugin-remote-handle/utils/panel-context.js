"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DataSourcePaneContext = void 0;
var _react = _interopRequireDefault(require("react"));
var _stateMachine = require("./stateMachine");
/**
 * 面板上下文
 */

var DataSourcePaneContext = /*#__PURE__*/_react["default"].createContext({
  stateService: (0, _stateMachine.createStateService)(),
  dataSourceTypes: []
});
exports.DataSourcePaneContext = DataSourcePaneContext;