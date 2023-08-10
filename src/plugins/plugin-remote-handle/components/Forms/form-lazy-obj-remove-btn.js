"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.RemoveBtn = RemoveBtn;
var _button = _interopRequireDefault(require("@alifd/next/lib/button"));
var _icon = _interopRequireDefault(require("@alifd/next/lib/icon"));
var _react = _interopRequireDefault(require("react"));
function RemoveBtn(props) {
  var onClick = props.onClick,
    propertyKey = props.propertyKey;
  var handleClick = function handleClick() {
    onClick === null || onClick === void 0 ? void 0 : onClick(propertyKey);
  };
  return /*#__PURE__*/_react["default"].createElement(_button["default"], {
    style: {
      color: 'grey'
    },
    text: true,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "delete-filling"
  }));
}

// TODO
RemoveBtn.isFieldComponent = true;