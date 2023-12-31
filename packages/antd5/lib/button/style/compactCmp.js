"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ = require(".");
var _compactItem = require("../../style/compact-item");
var _compactItemVertical = require("../../style/compact-item-vertical");
var _internal = require("../../theme/internal");
var _cssinjs = require("@ant-design/cssinjs");
const genButtonCompactStyle = token => {
  const {
    componentCls,
    calc
  } = token;
  return {
    [componentCls]: {
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: calc(token.lineWidth).mul(-1).equal(),
            insetInlineStart: calc(token.lineWidth).mul(-1).equal(),
            display: 'inline-block',
            width: token.lineWidth,
            height: `calc(100% + ${(0, _cssinjs.unit)(token.lineWidth)} * 2)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      '&-compact-vertical-item': {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: 'relative',
            '&:before': {
              position: 'absolute',
              top: calc(token.lineWidth).mul(-1).equal(),
              insetInlineStart: calc(token.lineWidth).mul(-1).equal(),
              display: 'inline-block',
              width: `calc(100% + ${(0, _cssinjs.unit)(token.lineWidth)} * 2)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
// ============================== Export ==============================
var _default = exports.default = (0, _internal.genSubStyleComponent)(['Button', 'compact'], token => {
  const buttonToken = (0, _.prepareToken)(token);
  return [
  // Space Compact
  (0, _compactItem.genCompactItemStyle)(buttonToken), (0, _compactItemVertical.genCompactItemVerticalStyle)(buttonToken), genButtonCompactStyle(buttonToken)];
}, _.prepareComponentToken);