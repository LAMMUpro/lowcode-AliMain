"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DesignTokenContext", {
  enumerable: true,
  get: function () {
    return _context.DesignTokenContext;
  }
});
Object.defineProperty(exports, "PresetColors", {
  enumerable: true,
  get: function () {
    return _interface.PresetColors;
  }
});
Object.defineProperty(exports, "calc", {
  enumerable: true,
  get: function () {
    return _calc.default;
  }
});
Object.defineProperty(exports, "defaultConfig", {
  enumerable: true,
  get: function () {
    return _context.defaultConfig;
  }
});
Object.defineProperty(exports, "genComponentStyleHook", {
  enumerable: true,
  get: function () {
    return _genComponentStyleHook.default;
  }
});
Object.defineProperty(exports, "genPresetColor", {
  enumerable: true,
  get: function () {
    return _genPresetColor.default;
  }
});
Object.defineProperty(exports, "genStyleHooks", {
  enumerable: true,
  get: function () {
    return _genComponentStyleHook.genStyleHooks;
  }
});
Object.defineProperty(exports, "genSubStyleComponent", {
  enumerable: true,
  get: function () {
    return _genComponentStyleHook.genSubStyleComponent;
  }
});
Object.defineProperty(exports, "mergeToken", {
  enumerable: true,
  get: function () {
    return _statistic.merge;
  }
});
Object.defineProperty(exports, "statisticToken", {
  enumerable: true,
  get: function () {
    return _statistic.default;
  }
});
Object.defineProperty(exports, "useResetIconStyle", {
  enumerable: true,
  get: function () {
    return _useResetIconStyle.default;
  }
});
Object.defineProperty(exports, "useStyleRegister", {
  enumerable: true,
  get: function () {
    return _cssinjs.useStyleRegister;
  }
});
Object.defineProperty(exports, "useToken", {
  enumerable: true,
  get: function () {
    return _useToken.default;
  }
});
var _cssinjs = require("@ant-design/cssinjs");
var _interface = require("./interface");
var _useToken = _interopRequireDefault(require("./useToken"));
var _genComponentStyleHook = _interopRequireWildcard(require("./util/genComponentStyleHook"));
var _genPresetColor = _interopRequireDefault(require("./util/genPresetColor"));
var _statistic = _interopRequireWildcard(require("./util/statistic"));
var _useResetIconStyle = _interopRequireDefault(require("./util/useResetIconStyle"));
var _calc = _interopRequireDefault(require("./util/calc"));
var _context = require("./context");