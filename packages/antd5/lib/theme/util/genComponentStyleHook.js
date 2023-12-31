"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genComponentStyleHook;
exports.genSubStyleComponent = exports.genStyleHooks = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cssinjs = require("@ant-design/cssinjs");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcUtil = require("rc-util");
var _context = require("../../config-provider/context");
var _style = require("../../style");
var _useToken = _interopRequireWildcard(require("../useToken"));
var _calc = _interopRequireDefault(require("./calc"));
var _maxmin = _interopRequireDefault(require("./maxmin"));
var _statistic = _interopRequireWildcard(require("./statistic"));
var _useResetIconStyle = _interopRequireDefault(require("./useResetIconStyle"));
const getDefaultComponentToken = (component, token, getDefaultToken) => {
  var _a;
  if (typeof getDefaultToken === 'function') {
    return getDefaultToken((0, _statistic.merge)(token, (_a = token[component]) !== null && _a !== void 0 ? _a : {}));
  }
  return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
};
const getComponentToken = (component, token, defaultToken, options) => {
  const customToken = Object.assign({}, token[component]);
  if (options === null || options === void 0 ? void 0 : options.deprecatedTokens) {
    const {
      deprecatedTokens
    } = options;
    deprecatedTokens.forEach(_ref => {
      let [oldTokenKey, newTokenKey] = _ref;
      var _a;
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== "production" ? (0, _rcUtil.warning)(!(customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]), `The token '${String(oldTokenKey)}' of ${component} had deprecated, use '${String(newTokenKey)}' instead.`) : void 0;
      }
      // Should wrap with `if` clause, or there will be `undefined` in object.
      if ((customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]) || (customToken === null || customToken === void 0 ? void 0 : customToken[newTokenKey])) {
        (_a = customToken[newTokenKey]) !== null && _a !== void 0 ? _a : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
      }
    });
  }
  let mergedToken = Object.assign(Object.assign({}, defaultToken), customToken);
  if (options === null || options === void 0 ? void 0 : options.format) {
    mergedToken = options.format(mergedToken);
  }
  // Remove same value as global token to minimize size
  Object.keys(mergedToken).forEach(key => {
    if (mergedToken[key] === token[key]) {
      delete mergedToken[key];
    }
  });
  return mergedToken;
};
const getCompVarPrefix = (component, prefix) => `${[prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2')].filter(Boolean).join('-')}`;
function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
  const [component] = cells;
  const concatComponent = cells.join('-');
  return prefixCls => {
    const [theme, realToken, hashId, token, cssVar] = (0, _useToken.default)();
    const {
      getPrefixCls,
      iconPrefixCls,
      csp
    } = (0, _react.useContext)(_context.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const type = cssVar ? 'css' : 'js';
    const calc = (0, _calc.default)(type);
    const {
      max,
      min
    } = (0, _maxmin.default)(type);
    // Shared config
    const sharedConfig = {
      theme,
      token,
      hashId,
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
      clientOnly: options.clientOnly,
      // antd is always at top of styles
      order: options.order || -999
    };
    // Generate style for all a tags in antd component.
    (0, _cssinjs.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
      clientOnly: false,
      path: ['Shared', rootPrefixCls]
    }), () => [{
      // Link
      '&': (0, _style.genLinkStyle)(token)
    }]);
    // Generate style for icons
    (0, _useResetIconStyle.default)(iconPrefixCls, csp);
    const wrapSSR = (0, _cssinjs.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
      path: [concatComponent, prefixCls, iconPrefixCls]
    }), () => {
      if (options.injectStyle === false) {
        return [];
      }
      const {
        token: proxyToken,
        flush
      } = (0, _statistic.default)(token);
      const defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
      const componentCls = `.${prefixCls}`;
      const componentToken = getComponentToken(component, realToken, defaultComponentToken, {
        deprecatedTokens: options.deprecatedTokens,
        format: options.format
      });
      if (cssVar) {
        Object.keys(defaultComponentToken).forEach(key => {
          defaultComponentToken[key] = `var(${(0, _cssinjs.token2CSSVar)(key, getCompVarPrefix(component, cssVar.prefix))})`;
        });
      }
      const mergedToken = (0, _statistic.merge)(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`,
        calc,
        max,
        min
      }, cssVar ? defaultComponentToken : componentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls
      });
      flush(component, componentToken);
      return [options.resetStyle === false ? null : (0, _style.genCommonStyle)(mergedToken, prefixCls), styleInterpolation];
    });
    return [wrapSSR, (0, _classnames.default)(hashId, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key)];
  };
}
const genSubStyleComponent = (componentName, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, Object.assign({
    resetStyle: false,
    // Sub Style should default after root one
    order: -998
  }, options));
  const StyledComponent = _ref2 => {
    let {
      prefixCls
    } = _ref2;
    useStyle(prefixCls);
    return null;
  };
  if (process.env.NODE_ENV !== 'production') {
    StyledComponent.displayName = `SubStyle_${Array.isArray(componentName) ? componentName.join('.') : componentName}`;
  }
  return StyledComponent;
};
exports.genSubStyleComponent = genSubStyleComponent;
const genCSSVarRegister = (component, getDefaultToken, options) => {
  function prefixToken(key) {
    return `${component}${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
  }
  const {
    unitless: originUnitless = {},
    injectStyle = true
  } = options !== null && options !== void 0 ? options : {};
  const compUnitless = {
    [prefixToken('zIndexPopup')]: true
  };
  Object.keys(originUnitless).forEach(key => {
    compUnitless[prefixToken(key)] = originUnitless[key];
  });
  const CSSVarRegister = _ref3 => {
    let {
      rootCls,
      cssVar
    } = _ref3;
    const [, realToken] = (0, _useToken.default)();
    (0, _cssinjs.useCSSVarRegister)({
      path: [component],
      prefix: cssVar.prefix,
      key: cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
      unitless: Object.assign(Object.assign({}, _useToken.unitless), compUnitless),
      ignore: _useToken.ignore,
      token: realToken,
      scope: rootCls
    }, () => {
      const defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
      const componentToken = getComponentToken(component, realToken, defaultToken, {
        format: options === null || options === void 0 ? void 0 : options.format,
        deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
      });
      Object.keys(defaultToken).forEach(key => {
        componentToken[prefixToken(key)] = componentToken[key];
        delete componentToken[key];
      });
      return componentToken;
    });
    return null;
  };
  const useCSSVar = rootCls => {
    const [,,,, cssVar] = (0, _useToken.default)();
    return node => injectStyle && cssVar ? ( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CSSVarRegister, {
      rootCls: rootCls,
      cssVar: cssVar,
      component: component
    }), node)) : node;
  };
  return useCSSVar;
};
const genStyleHooks = (component, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(component, styleFn, getDefaultToken, options);
  const useCSSVar = genCSSVarRegister(component, getDefaultToken, options);
  return function (prefixCls) {
    let rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
    const [, hashId] = useStyle(prefixCls);
    const wrapCSSVar = useCSSVar(rootCls);
    return [wrapCSSVar, hashId];
  };
};
exports.genStyleHooks = genStyleHooks;