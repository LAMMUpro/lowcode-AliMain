"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRafDebounce;
var _react = _interopRequireDefault(require("react"));
var _raf = _interopRequireDefault(require("rc-util/lib/raf"));
var _rcUtil = require("rc-util");
/**
 * Callback will only execute last one for each raf
 */
function useRafDebounce(callback) {
  const executeRef = _react.default.useRef(false);
  const rafRef = _react.default.useRef();
  const wrapperCallback = (0, _rcUtil.useEvent)(callback);
  return () => {
    if (executeRef.current) {
      return;
    }
    executeRef.current = true;
    wrapperCallback();
    rafRef.current = (0, _raf.default)(() => {
      executeRef.current = false;
    });
  };
}