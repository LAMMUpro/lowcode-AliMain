"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cssinjs = require("@ant-design/cssinjs");
const genRadiusStyle = token => {
  const {
    componentCls,
    tableRadius
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [componentCls]: {
        // https://github.com/ant-design/ant-design/issues/39115#issuecomment-1362314574
        [`${componentCls}-title, ${componentCls}-header`]: {
          borderRadius: `${(0, _cssinjs.unit)(tableRadius)} ${(0, _cssinjs.unit)(tableRadius)} 0 0`
        },
        [`${componentCls}-title + ${componentCls}-container`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
          // https://github.com/ant-design/ant-design/issues/41975
          [`${componentCls}-header, table`]: {
            borderRadius: 0
          },
          'table > thead > tr:first-child': {
            'th:first-child, th:last-child, td:first-child, td:last-child': {
              borderRadius: 0
            }
          }
        },
        '&-container': {
          borderStartStartRadius: tableRadius,
          borderStartEndRadius: tableRadius,
          'table > thead > tr:first-child': {
            '> *:first-child': {
              borderStartStartRadius: tableRadius
            },
            '> *:last-child': {
              borderStartEndRadius: tableRadius
            }
          }
        },
        '&-footer': {
          borderRadius: `0 0 ${(0, _cssinjs.unit)(tableRadius)} ${(0, _cssinjs.unit)(tableRadius)}`
        }
      }
    }
  };
};
var _default = exports.default = genRadiusStyle;