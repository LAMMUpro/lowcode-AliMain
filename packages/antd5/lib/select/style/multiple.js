"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = require("../../style");
var _internal = require("../../theme/internal");
var _cssinjs = require("@ant-design/cssinjs");
const FIXED_ITEM_MARGIN = 2;
const getSelectItemStyle = token => {
  const {
    multipleSelectItemHeight,
    selectHeight,
    lineWidth
  } = token;
  const selectItemDist = token.calc(selectHeight).sub(multipleSelectItemHeight).div(2).sub(lineWidth).equal();
  return selectItemDist;
};
function genSizeStyle(token, suffix) {
  const {
    componentCls,
    iconCls
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.multipleSelectItemHeight;
  const selectItemDist = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex'
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '100%',
        // Multiple is little different that horizontal is follow the vertical
        padding: `${(0, _cssinjs.unit)(token.calc(selectItemDist).sub(FIXED_ITEM_MARGIN).equal())} ${(0, _cssinjs.unit)(token.calc(FIXED_ITEM_MARGIN).mul(2).equal())}`,
        borderRadius: token.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: 'text'
        },
        [`${componentCls}-disabled&`]: {
          background: token.multipleSelectorBgDisabled,
          cursor: 'not-allowed'
        },
        '&:after': {
          display: 'inline-block',
          width: 0,
          margin: `${(0, _cssinjs.unit)(FIXED_ITEM_MARGIN)} 0`,
          lineHeight: (0, _cssinjs.unit)(selectItemHeight),
          visibility: 'hidden',
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.calc(token.fontSizeIcon).add(token.controlPaddingHorizontal).equal()
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        display: 'flex',
        alignSelf: 'center',
        flex: 'none',
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: (0, _cssinjs.unit)(token.calc(selectItemHeight).sub(token.calc(token.lineWidth).mul(2)).equal()),
        background: token.multipleItemBg,
        border: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`,
        borderRadius: token.borderRadiusSM,
        cursor: 'default',
        transition: `font-size ${token.motionDurationSlow}, line-height ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
        marginInlineEnd: token.calc(FIXED_ITEM_MARGIN).mul(2).equal(),
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.calc(token.paddingXS).div(2).equal(),
        [`${componentCls}-disabled&`]: {
          color: token.multipleItemColorDisabled,
          borderColor: token.multipleItemBorderColorDisabled,
          cursor: 'not-allowed'
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        '&-content': {
          display: 'inline-block',
          marginInlineEnd: token.calc(token.paddingXS).div(2).equal(),
          overflow: 'hidden',
          whiteSpace: 'pre',
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: 'ellipsis'
        },
        '&-remove': Object.assign(Object.assign({}, (0, _style.resetIcon)()), {
          display: 'inline-flex',
          alignItems: 'center',
          color: token.colorIcon,
          fontWeight: 'bold',
          fontSize: 10,
          lineHeight: 'inherit',
          cursor: 'pointer',
          [`> ${iconCls}`]: {
            verticalAlign: '-0.2em'
          },
          '&:hover': {
            color: token.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      [`${selectOverflowPrefixCls}-item-suffix`]: {
        height: '100%'
      },
      [`${componentCls}-selection-search`]: {
        display: 'inline-flex',
        position: 'relative',
        maxWidth: '100%',
        marginInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(selectItemDist).equal(),
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: (0, _cssinjs.unit)(selectItemHeight),
          transition: `all ${token.motionDurationSlow}`
        },
        '&-input': {
          width: '100%',
          minWidth: 4.1 // fix search cursor missing
        },
        '&-mirror': {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: 'auto',
          zIndex: 999,
          whiteSpace: 'pre',
          // fix whitespace wrapping caused width calculation bug
          visibility: 'hidden'
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: 'translateY(-50%)',
        transition: `all ${token.motionDurationSlow}`
      }
    }
  };
}
const genMultipleStyle = token => {
  const {
    componentCls
  } = token;
  const smallToken = (0, _internal.mergeToken)(token, {
    selectHeight: token.controlHeightSM,
    multipleSelectItemHeight: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const largeToken = (0, _internal.mergeToken)(token, {
    fontSize: token.fontSizeLG,
    selectHeight: token.controlHeightLG,
    multipleSelectItemHeight: token.multipleItemHeightLG,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  });
  return [genSizeStyle(token),
  // ======================== Small ========================
  genSizeStyle(smallToken, 'sm'),
  // Padding
  {
    [`${componentCls}-multiple${componentCls}-sm`]: {
      [`${componentCls}-selection-placeholder`]: {
        insetInline: token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal()
      },
      // https://github.com/ant-design/ant-design/issues/29559
      [`${componentCls}-selection-search`]: {
        marginInlineStart: 2 // Magic Number
      }
    }
  },
  // ======================== Large ========================
  genSizeStyle(largeToken, 'lg')];
};
var _default = exports.default = genMultipleStyle;