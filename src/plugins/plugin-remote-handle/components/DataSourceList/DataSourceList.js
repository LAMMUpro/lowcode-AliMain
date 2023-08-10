"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DataSourceList = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _DataSourceListItem = require("../DataSourceListItem");
var _stateMachine = require("../../utils/stateMachine");
var _panelContext = require("../../utils/panel-context");
var _misc = require("../../utils/misc");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// import { VirtualList } from '@alifd/next';

var OPERATIONS = [{
  title: '查看',
  icon: 'eye',
  type: 'view',
  disabled: false,
  visible: true
}, {
  title: '编辑',
  icon: 'edit',
  type: 'edit',
  disabled: false,
  visible: true
}, {
  title: '删除',
  icon: 'ashbin',
  type: 'remove',
  disabled: false,
  visible: true
}, {
  title: '复制',
  icon: 'copy',
  type: 'duplicate',
  disabled: false,
  visible: true
}];
var DataSourceList = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(DataSourceList, _PureComponent);
  function DataSourceList() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.serviceS = void 0;
    _this.state = {
      current: (0, _stateMachine.createStateMachine)().initialState,
      dataSource: [].concat(_this.props.dataSource),
      dragId: undefined
    };
    _this.deriveListDataSource = function () {
      var _this$props = _this.props,
        onOperationClick = _this$props.onOperationClick,
        renderItemInfoTags = _this$props.renderItemInfoTags;
      var _this$state = _this.state,
        dataSource = _this$state.dataSource,
        current = _this$state.current;
      var listMode = 'normal';
      if (current.matches('sort')) {
        listMode = 'sorting';
      } else if (current.matches('export')) {
        listMode = 'exporting';
      }
      var operations = OPERATIONS.map(function (i) {
        return (0, _extends2["default"])({}, i, {
          visible: i.type === 'view' || listMode === 'normal'
        });
      });
      if (dataSource.length === 0) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: (0, _misc.generateClassName)('list-empty')
        }, "\u6CA1\u6709\u627E\u5230\u51FD\u6570");
      }
      return (dataSource === null || dataSource === void 0 ? void 0 : dataSource.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: item.id
        }, /*#__PURE__*/_react["default"].createElement(_DataSourceListItem.DroppableDataSourceListItem, {
          renderInfoTags: renderItemInfoTags,
          mode: listMode,
          onStartDrag: _this.handleStartDrag,
          onDragOver: _this.handleDragOver,
          onDrop: _this.handleDrop,
          dataSource: item,
          onOperationClick: onOperationClick,
          operations: operations,
          onToggleSelect: _this.handleToggleSelect,
          selected: current.context["export"].selectedDataSourceIdList.indexOf(item.id) !== -1
        }));
      })) || [];
    };
    _this.handleStartDrag = function (dragId) {
      // TODO 响应两次
      // console.log('start drag', dragId);
      _this.setState({
        dragId: dragId
      });
      // this.setState({ dataSource: this.state.dataSource.slice() });
    };
    _this.handleDragOver = function (dragOverId) {
      // console.log('drag over', dragOverId);
      _this.setState(function (_ref) {
        var dataSource = _ref.dataSource;
        var nextDataSource = dataSource.slice();
        var fromItemIndex = nextDataSource.findIndex(function (i) {
          return i.id === _this.state.dragId;
        });
        var fromItem = nextDataSource[fromItemIndex];
        var toItemIndex = nextDataSource.findIndex(function (i) {
          return i.id === dragOverId;
        });
        var toItem = nextDataSource[toItemIndex];
        nextDataSource[fromItemIndex] = toItem;
        nextDataSource[toItemIndex] = fromItem;
        return {
          dataSource: nextDataSource
        };
      });
    };
    _this.handleDrop = function () {
      _this.context.stateService.send({
        type: 'SAVE_SORT',
        payload: _this.state.dataSource
      });
    };
    _this.handleToggleSelect = function (dataSourceId) {
      _this.context.stateService.send({
        type: 'EXPORT.toggleSelect',
        dataSourceId: dataSourceId
      });
    };
    return _this;
  }
  var _proto = DataSourceList.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this$context,
      _this$context$stateSe,
      _this$context$stateSe2,
      _this2 = this;
    // @ts-ignore
    this.serviceS = (_this$context = this.context) === null || _this$context === void 0 ? void 0 : (_this$context$stateSe = _this$context.stateService) === null || _this$context$stateSe === void 0 ? void 0 : (_this$context$stateSe2 = _this$context$stateSe.subscribe) === null || _this$context$stateSe2 === void 0 ? void 0 : _this$context$stateSe2.call(_this$context$stateSe, function (state) {
      _this2.setState({
        current: state
      });
      /* if (state.value === 'idle') {
          console.log('idle', this.props.dataSource);
          this.setState({
            dataSource: this.props.dataSource
          });
        } */
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$serviceS, _this$serviceS$unsubs;
    (_this$serviceS = this.serviceS) === null || _this$serviceS === void 0 ? void 0 : (_this$serviceS$unsubs = _this$serviceS.unsubscribe) === null || _this$serviceS$unsubs === void 0 ? void 0 : _this$serviceS$unsubs.call(_this$serviceS);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    // TODO
    if (JSON.stringify(prevProps.dataSource) !== JSON.stringify(this.props.dataSource)) {
      this.setState({
        dataSource: this.props.dataSource
      });
    }
  };
  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('list')
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: (0, _misc.generateClassName)('list-wrap')
    }, this.deriveListDataSource()));
  };
  return DataSourceList;
}(_react.PureComponent);
exports.DataSourceList = DataSourceList;
DataSourceList.contextType = _panelContext.DataSourcePaneContext;