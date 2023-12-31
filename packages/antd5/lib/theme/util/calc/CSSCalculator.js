"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _calculator = _interopRequireDefault(require("./calculator"));
const CALC_UNIT = 'CALC_UNIT';
function unit(value) {
  if (typeof value === 'number') {
    return `${value}${CALC_UNIT}`;
  }
  return value;
}
let CSSCalculator = exports.default = /*#__PURE__*/function (_AbstractCalculator) {
  (0, _inherits2.default)(CSSCalculator, _AbstractCalculator);
  var _super = (0, _createSuper2.default)(CSSCalculator);
  function CSSCalculator(num) {
    var _this;
    (0, _classCallCheck2.default)(this, CSSCalculator);
    _this = _super.call(this);
    _this.result = '';
    if (num instanceof CSSCalculator) {
      _this.result = `(${num.result})`;
    } else if (typeof num === 'number') {
      _this.result = unit(num);
    } else if (typeof num === 'string') {
      _this.result = num;
    }
    return _this;
  }
  (0, _createClass2.default)(CSSCalculator, [{
    key: "add",
    value: function add(num) {
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} + ${num.getResult()}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} + ${unit(num)}`;
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} - ${num.getResult()}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} - ${unit(num)}`;
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (this.lowPriority) {
        this.result = `(${this.result})`;
      }
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} * ${num.getResult(true)}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} * ${num}`;
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (this.lowPriority) {
        this.result = `(${this.result})`;
      }
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} / ${num.getResult(true)}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} / ${num}`;
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult(force) {
      return this.lowPriority || force ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function equal(options) {
      const {
        unit: cssUnit = true
      } = options || {};
      const regexp = new RegExp(`${CALC_UNIT}`, 'g');
      this.result = this.result.replace(regexp, cssUnit ? 'px' : '');
      if (typeof this.lowPriority !== 'undefined') {
        return `calc(${this.result})`;
      }
      return this.result;
    }
  }]);
  return CSSCalculator;
}(_calculator.default);