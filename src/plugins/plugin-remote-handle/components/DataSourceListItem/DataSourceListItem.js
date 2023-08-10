"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ListDndTypes = exports.DroppableDataSourceListItem = exports.DataSourceListItemOperation = exports.DataSourceListItem = void 0;
var _balloon = _interopRequireDefault(require("@alifd/next/lib/balloon"));
var _tag = _interopRequireDefault(require("@alifd/next/lib/tag"));
var _checkbox = _interopRequireDefault(require("@alifd/next/lib/checkbox"));
var _button = _interopRequireDefault(require("@alifd/next/lib/button"));
var _icon = _interopRequireDefault(require("@alifd/next/lib/icon"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactDnd = require("react-dnd");
var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));
var _pane = require("../../pane");
var _misc = require("../../utils/misc");
var _panelContext = require("../../utils/panel-context");
require("./list-item.scss");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// TODO 抽离 renderItem

var ListDndTypes = {
  DATASOURCE_ITEM: 'DATASOURCE_ITEM'
};
exports.ListDndTypes = ListDndTypes;
function defaultRenderInfoTags(dataSource) {
  return [{
    type: 'primary',
    content: dataSource.type
  }];
}
var DataSourceListItemDragHandler = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(DataSourceListItemDragHandler, _PureComponent);
  function DataSourceListItemDragHandler() {
    return _PureComponent.apply(this, arguments) || this;
  }
  var _proto = DataSourceListItemDragHandler.prototype;
  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement(_button["default"], {
      size: "small",
      text: true
    }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
      type: "list"
    }));
  };
  return DataSourceListItemDragHandler;
}(_react.PureComponent);
var DataSourceListItem = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DataSourceListItem, _Component);
  function DataSourceListItem() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.handleDragEnd = function (from, to) {
      var _this$props$onDrop, _this$props;
      (_this$props$onDrop = (_this$props = _this.props).onDrop) === null || _this$props$onDrop === void 0 ? void 0 : _this$props$onDrop.call(_this$props, from, to);
    };
    _this.handleExportCheckChange = function () {
      var _this$props$onToggleS, _this$props2;
      (_this$props$onToggleS = (_this$props2 = _this.props).onToggleSelect) === null || _this$props$onToggleS === void 0 ? void 0 : _this$props$onToggleS.call(_this$props2, _this.props.dataSource.id);
    };
    return _this;
  }
  var _proto2 = DataSourceListItem.prototype;
  _proto2.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.dropResult !== this.props.dropResult) {
      var _this$props$dropResul;
      if ((_this$props$dropResul = this.props.dropResult) !== null && _this$props$dropResul !== void 0 && _this$props$dropResul.moved) {
        var _this$props$dropResul2, _this$props3, _this$props3$dropResu;
        this.handleDragEnd((_this$props$dropResul2 = this.props.dropResult) === null || _this$props$dropResul2 === void 0 ? void 0 : _this$props$dropResul2.from, (_this$props3 = this.props) === null || _this$props3 === void 0 ? void 0 : (_this$props3$dropResu = _this$props3.dropResult) === null || _this$props3$dropResu === void 0 ? void 0 : _this$props3$dropResu.to);
      }
    }
    if (prevProps.isDragging !== this.props.isDragging && this.props.isDragging) {
      var _this$props$onStartDr, _this$props4;
      (_this$props$onStartDr = (_this$props4 = this.props).onStartDrag) === null || _this$props$onStartDr === void 0 ? void 0 : _this$props$onStartDr.call(_this$props4, this.props.dataSource.id);
    }
    if (prevProps.isOver !== this.props.isOver && this.props.isOver) {
      var _this$props$onDragOve, _this$props5;
      // console.log('is over 2', this.props.dataSource.id);
      (_this$props$onDragOve = (_this$props5 = this.props).onDragOver) === null || _this$props$onDragOve === void 0 ? void 0 : _this$props$onDragOve.call(_this$props5, this.props.dataSource.id);
    }
  };
  _proto2.render = function render() {
    var _this$props7, _this$props7$connectD, _this$props8, _this$props8$connectD, _cn, _this$props$connectDr, _this$props9, _renderInfoTags$map, _renderInfoTags, _renderInfoTags$map2;
    var _this$props6 = this.props,
      operations = _this$props6.operations,
      dataSource = _this$props6.dataSource,
      className = _this$props6.className,
      style = _this$props6.style,
      onOperationClick = _this$props6.onOperationClick,
      isDragging = _this$props6.isDragging,
      mode = _this$props6.mode,
      selected = _this$props6.selected,
      _this$props6$renderIn = _this$props6.renderInfoTags,
      renderInfoTags = _this$props6$renderIn === void 0 ? defaultRenderInfoTags : _this$props6$renderIn;

    // 拖拽中，需要向右偏移 8p，避免覆盖
    var offsetStyle = mode === _pane.DataSourcePanelMode.SORTING ? {
      marginLeft: '8px'
    } : null;
    return (_this$props7 = this.props) === null || _this$props7 === void 0 ? void 0 : (_this$props7$connectD = _this$props7.connectDropTarget) === null || _this$props7$connectD === void 0 ? void 0 : _this$props7$connectD.call(_this$props7, (_this$props8 = this.props) === null || _this$props8 === void 0 ? void 0 : (_this$props8$connectD = _this$props8.connectDragPreview) === null || _this$props8$connectD === void 0 ? void 0 : _this$props8$connectD.call(_this$props8, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])((0, _misc.generateClassName)('list-item'), (_cn = {}, _cn[(0, _misc.generateClassName)('list-item-dragging')] = isDragging, _cn[(0, _misc.generateClassName)('list-item-sort')] = mode === _pane.DataSourcePanelMode.SORTING, _cn[(0, _misc.generateClassName)('list-item-export')] = mode === _pane.DataSourcePanelMode.EXPORTING, _cn), className),
      style: style
    }, mode === _pane.DataSourcePanelMode.SORTING && ((_this$props$connectDr = (_this$props9 = this.props).connectDragSource) === null || _this$props$connectDr === void 0 ? void 0 : _this$props$connectDr.call(_this$props9, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _misc.generateClassName)('list-item-drag-handle')
    }, /*#__PURE__*/_react["default"].createElement(DataSourceListItemDragHandler, null)))), mode === _pane.DataSourcePanelMode.EXPORTING && /*#__PURE__*/_react["default"].createElement(_checkbox["default"], {
      className: (0, _misc.generateClassName)('list-item-export-checkbox'),
      checked: selected,
      onChange: this.handleExportCheckChange
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('list-item-title'),
      style: offsetStyle
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('list-item-id'),
      title: dataSource.id
    }, dataSource.id), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('list-item-operations')
    }, operations === null || operations === void 0 ? void 0 : operations.map(function (operation) {
      // TODO 获取不到 dataSourceTypes
      // if (!this.context.dataSourceTypes?.find((i: any) => i.type === dataSource.type) && operation.type !== 'remove') return null;
      return operation.visible && /*#__PURE__*/_react["default"].createElement(DataSourceListItemOperation, {
        key: operation.type,
        dataSourceId: dataSource.id,
        onOperationClick: onOperationClick,
        title: operation.title,
        icon: operation.icon,
        type: operation.type
      });
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('list-item-desc'),
      style: offsetStyle
    }, (_renderInfoTags$map = (_renderInfoTags = renderInfoTags(dataSource)) === null || _renderInfoTags === void 0 ? void 0 : (_renderInfoTags$map2 = _renderInfoTags.map) === null || _renderInfoTags$map2 === void 0 ? void 0 : _renderInfoTags$map2.call(_renderInfoTags, function (tag) {
      if (tag.tooltip === true) {
        return /*#__PURE__*/_react["default"].createElement(_balloon["default"].Tooltip, {
          key: (0, _uniqueId2["default"])('ds-tag-'),
          delay: 100,
          trigger: /*#__PURE__*/_react["default"].createElement(_tag["default"], {
            style: {
              maxWidth: tag.maxWidth || 120
            },
            size: "small",
            type: tag.type || 'normal',
            color: tag.color
          }, tag.content)
        }, tag.tooltipContent || tag.content);
      }
      return /*#__PURE__*/_react["default"].createElement(_tag["default"], {
        key: (0, _uniqueId2["default"])('ds-tag-'),
        style: {
          maxWidth: tag.maxWidth || 120
        },
        size: "small",
        type: tag.type || 'normal',
        color: tag.color
      }, tag.content);
    })) !== null && _renderInfoTags$map !== void 0 ? _renderInfoTags$map : null))));
  };
  return DataSourceListItem;
}(_react.Component);
exports.DataSourceListItem = DataSourceListItem;
DataSourceListItem.contextType = _panelContext.DataSourcePaneContext;
var DataSourceListItemOperation = /*#__PURE__*/function (_PureComponent2) {
  (0, _inheritsLoose2["default"])(DataSourceListItemOperation, _PureComponent2);
  function DataSourceListItemOperation() {
    var _this2;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _PureComponent2.call.apply(_PureComponent2, [this].concat(args)) || this;
    _this2.handleOperationClick = function () {
      var _this2$props = _this2.props,
        type = _this2$props.type,
        dataSourceId = _this2$props.dataSourceId,
        onOperationClick = _this2$props.onOperationClick;
      onOperationClick === null || onOperationClick === void 0 ? void 0 : onOperationClick(type, dataSourceId);
    };
    return _this2;
  }
  var _proto3 = DataSourceListItemOperation.prototype;
  _proto3.render = function render() {
    var _this$props10 = this.props,
      icon = _this$props10.icon,
      title = _this$props10.title;
    if (!icon) {
      return /*#__PURE__*/_react["default"].createElement(_button["default"], {
        key: title,
        size: "small",
        onClick: this.handleOperationClick,
        text: true
      }, title);
    }
    return /*#__PURE__*/_react["default"].createElement(_balloon["default"].Tooltip, {
      key: icon,
      delay: 100,
      trigger: /*#__PURE__*/_react["default"].createElement(_button["default"], {
        iconSize: "small",
        className: (0, _misc.generateClassName)('item-operate'),
        onClick: this.handleOperationClick,
        text: true
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: icon
      }))
    }, title);
  };
  return DataSourceListItemOperation;
}(_react.PureComponent);
exports.DataSourceListItemOperation = DataSourceListItemOperation;
var DraggableDataSourceListItem = (0, _reactDnd.DragSource)(ListDndTypes.DATASOURCE_ITEM, {
  canDrag: function canDrag(props) {
    return true;
  },
  isDragging: function isDragging(props, monitor) {
    var _props$dataSource;
    // If your component gets unmounted while dragged
    // (like a card in Kanban board dragged between lists)
    // you can implement something like this to keep its
    // appearance dragged:
    return monitor.getItem().id === (props === null || props === void 0 ? void 0 : (_props$dataSource = props.dataSource) === null || _props$dataSource === void 0 ? void 0 : _props$dataSource.id);
  },
  beginDrag: function beginDrag(props, monitor, component) {
    var _props$dataSource2;
    // Return the data describing the dragged item
    var item = {
      id: props === null || props === void 0 ? void 0 : (_props$dataSource2 = props.dataSource) === null || _props$dataSource2 === void 0 ? void 0 : _props$dataSource2.id
    };
    return item;
  },
  endDrag: function endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      return;
    }

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    var item = monitor.getItem();

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    var dropResult = monitor.getDropResult();

    // This is a good place to call some Flux action
    // CardActions.moveCardToList(item.id, dropResult.listId)
  }
}, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
})(DataSourceListItem);
var DroppableDataSourceListItem = (0, _reactDnd.DropTarget)(ListDndTypes.DATASOURCE_ITEM, {
  drop: function drop(props, monitor, component) {
    var _props$dataSource3;
    if (monitor.didDrop()) {
      return;
    }
    var item = monitor.getItem();
    return {
      moved: true,
      from: item.id,
      to: props === null || props === void 0 ? void 0 : (_props$dataSource3 = props.dataSource) === null || _props$dataSource3 === void 0 ? void 0 : _props$dataSource3.id
    };
  }
}, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    dropResult: monitor.getDropResult(),
    isOver: monitor.isOver()
  };
})(DraggableDataSourceListItem);
exports.DroppableDataSourceListItem = DroppableDataSourceListItem;