"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareComponentToken = exports.default = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _style = require("../../style");
var _internal = require("../../theme/internal");
// ============================== Shared ==============================
const genSharedAnchorStyle = token => {
  const {
    componentCls,
    holderOffsetBlock,
    motionDurationSlow,
    lineWidthBold,
    colorPrimary,
    lineType,
    colorSplit,
    calc
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      marginBlockStart: calc(holderOffsetBlock).mul(-1).equal(),
      paddingBlockStart: holderOffsetBlock,
      // delete overflow: auto
      // overflow: 'auto',
      [componentCls]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
        position: 'relative',
        paddingInlineStart: lineWidthBold,
        [`${componentCls}-link`]: {
          paddingBlock: token.linkPaddingBlock,
          paddingInline: `${(0, _cssinjs.unit)(token.linkPaddingInlineStart)} 0`,
          '&-title': Object.assign(Object.assign({}, _style.textEllipsis), {
            position: 'relative',
            display: 'block',
            marginBlockEnd: token.anchorTitleBlock,
            color: token.colorText,
            transition: `all ${token.motionDurationSlow}`,
            '&:only-child': {
              marginBlockEnd: 0
            }
          }),
          [`&-active > ${componentCls}-link-title`]: {
            color: token.colorPrimary
          },
          // link link
          [`${componentCls}-link`]: {
            paddingBlock: token.anchorPaddingBlockSecondary
          }
        }
      }),
      [`&:not(${componentCls}-wrapper-horizontal)`]: {
        [componentCls]: {
          '&::before': {
            position: 'absolute',
            insetInlineStart: 0,
            top: 0,
            height: '100%',
            borderInlineStart: `${(0, _cssinjs.unit)(lineWidthBold)} ${lineType} ${colorSplit}`,
            content: '" "'
          },
          [`${componentCls}-ink`]: {
            position: 'absolute',
            insetInlineStart: 0,
            display: 'none',
            transform: 'translateY(-50%)',
            transition: `top ${motionDurationSlow} ease-in-out`,
            width: lineWidthBold,
            backgroundColor: colorPrimary,
            [`&${componentCls}-ink-visible`]: {
              display: 'inline-block'
            }
          }
        }
      },
      [`${componentCls}-fixed ${componentCls}-ink ${componentCls}-ink`]: {
        display: 'none'
      }
    }
  };
};
const genSharedAnchorHorizontalStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    lineWidthBold,
    colorPrimary
  } = token;
  return {
    [`${componentCls}-wrapper-horizontal`]: {
      position: 'relative',
      '&::before': {
        position: 'absolute',
        left: {
          _skip_check_: true,
          value: 0
        },
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        borderBottom: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
        content: '" "'
      },
      [componentCls]: {
        overflowX: 'scroll',
        position: 'relative',
        display: 'flex',
        scrollbarWidth: 'none' /* Firefox */,
        '&::-webkit-scrollbar': {
          display: 'none' /* Safari and Chrome */
        },
        [`${componentCls}-link:first-of-type`]: {
          paddingInline: 0
        },
        [`${componentCls}-ink`]: {
          position: 'absolute',
          bottom: 0,
          transition: `left ${motionDurationSlow} ease-in-out, width ${motionDurationSlow} ease-in-out`,
          height: lineWidthBold,
          backgroundColor: colorPrimary
        }
      }
    }
  };
};
const prepareComponentToken = token => ({
  linkPaddingBlock: token.paddingXXS,
  linkPaddingInlineStart: token.padding
});
// ============================== Export ==============================
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _internal.genStyleHooks)('Anchor', token => {
  const {
    fontSize,
    fontSizeLG,
    paddingXXS,
    calc
  } = token;
  const anchorToken = (0, _internal.mergeToken)(token, {
    holderOffsetBlock: paddingXXS,
    anchorPaddingBlockSecondary: calc(paddingXXS).div(2).equal(),
    anchorTitleBlock: calc(fontSize).div(14).mul(3).equal(),
    anchorBallSize: calc(fontSizeLG).div(2).equal()
  });
  return [genSharedAnchorStyle(anchorToken), genSharedAnchorHorizontalStyle(anchorToken)];
}, prepareComponentToken);