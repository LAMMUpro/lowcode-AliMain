"use client";

import { TinyColor } from '@ctrl/tinycolor';
import { resetComponent } from '../../style';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { unit } from '@ant-design/cssinjs';
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    antCls,
    controlSize,
    dotSize,
    marginFull,
    marginPart,
    colorFillContentHover,
    handleColorDisabled,
    calc
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: 'relative',
      height: controlSize,
      margin: `${unit(marginPart)} ${unit(marginFull)}`,
      padding: 0,
      cursor: 'pointer',
      touchAction: 'none',
      [`&-vertical`]: {
        margin: `${unit(marginFull)} ${unit(marginPart)}`
      },
      [`${componentCls}-rail`]: {
        position: 'absolute',
        backgroundColor: token.railBg,
        borderRadius: token.borderRadiusXS,
        transition: `background-color ${token.motionDurationMid}`
      },
      [`${componentCls}-track,${componentCls}-tracks`]: {
        position: 'absolute',
        transition: `background-color ${token.motionDurationMid}`
      },
      [`${componentCls}-track`]: {
        backgroundColor: token.trackBg,
        borderRadius: token.borderRadiusXS
      },
      [`${componentCls}-track-draggable`]: {
        boxSizing: 'content-box',
        backgroundClip: 'content-box',
        border: 'solid rgba(0,0,0,0)'
      },
      '&:hover': {
        [`${componentCls}-rail`]: {
          backgroundColor: token.railHoverBg
        },
        [`${componentCls}-track`]: {
          backgroundColor: token.trackHoverBg
        },
        [`${componentCls}-dot`]: {
          borderColor: colorFillContentHover
        },
        [`${componentCls}-handle::after`]: {
          boxShadow: `0 0 0 ${unit(token.handleLineWidth)} ${token.colorPrimaryBorderHover}`
        },
        [`${componentCls}-dot-active`]: {
          borderColor: token.dotActiveBorderColor
        }
      },
      [`${componentCls}-handle`]: {
        position: 'absolute',
        width: token.handleSize,
        height: token.handleSize,
        outline: 'none',
        // 扩大选区
        '&::before': {
          content: '""',
          position: 'absolute',
          insetInlineStart: calc(token.handleLineWidth).mul(-1).equal(),
          insetBlockStart: calc(token.handleLineWidth).mul(-1).equal(),
          width: calc(token.handleSize).add(calc(token.handleLineWidth).mul(2)).equal(),
          height: calc(token.handleSize).add(calc(token.handleLineWidth).mul(2)).equal(),
          backgroundColor: 'transparent'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: token.handleSize,
          height: token.handleSize,
          backgroundColor: token.colorBgElevated,
          boxShadow: `0 0 0 ${unit(token.handleLineWidth)} ${token.handleColor}`,
          borderRadius: '50%',
          cursor: 'pointer',
          transition: `
            inset-inline-start ${token.motionDurationMid},
            inset-block-start ${token.motionDurationMid},
            width ${token.motionDurationMid},
            height ${token.motionDurationMid},
            box-shadow ${token.motionDurationMid}
          `
        },
        '&:hover, &:active, &:focus': {
          '&::before': {
            // -(
            //   (token.handleSizeHover - token.handleSize) / 2 +
            //   token.handleLineWidthHover
            // ),
            insetInlineStart: calc(token.handleSizeHover).sub(token.handleSize).div(2).add(token.handleLineWidthHover).mul(-1).equal(),
            insetBlockStart: calc(token.handleSizeHover).sub(token.handleSize).div(2).add(token.handleLineWidthHover).mul(-1).equal(),
            width: calc(token.handleSizeHover).add(calc(token.handleLineWidthHover).mul(2)).equal(),
            height: calc(token.handleSizeHover).add(calc(token.handleLineWidthHover).mul(2)).equal()
          },
          '&::after': {
            boxShadow: `0 0 0 ${unit(token.handleLineWidthHover)} ${token.handleActiveColor}`,
            width: token.handleSizeHover,
            height: token.handleSizeHover,
            insetInlineStart: token.calc(token.handleSize).sub(token.handleSizeHover).div(2).equal(),
            insetBlockStart: token.calc(token.handleSize).sub(token.handleSizeHover).div(2).equal()
          }
        }
      },
      [`${componentCls}-mark`]: {
        position: 'absolute',
        fontSize: token.fontSize
      },
      [`${componentCls}-mark-text`]: {
        position: 'absolute',
        display: 'inline-block',
        color: token.colorTextDescription,
        textAlign: 'center',
        wordBreak: 'keep-all',
        cursor: 'pointer',
        userSelect: 'none',
        '&-active': {
          color: token.colorText
        }
      },
      [`${componentCls}-step`]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none'
      },
      [`${componentCls}-dot`]: {
        position: 'absolute',
        width: dotSize,
        height: dotSize,
        backgroundColor: token.colorBgElevated,
        border: `${unit(token.handleLineWidth)} solid ${token.dotBorderColor}`,
        borderRadius: '50%',
        cursor: 'pointer',
        transition: `border-color ${token.motionDurationSlow}`,
        pointerEvents: 'auto',
        '&-active': {
          borderColor: token.dotActiveBorderColor
        }
      },
      [`&${componentCls}-disabled`]: {
        cursor: 'not-allowed',
        [`${componentCls}-rail`]: {
          backgroundColor: `${token.railBg} !important`
        },
        [`${componentCls}-track`]: {
          backgroundColor: `${token.trackBgDisabled} !important`
        },
        [`
          ${componentCls}-dot
        `]: {
          backgroundColor: token.colorBgElevated,
          borderColor: token.trackBgDisabled,
          boxShadow: 'none',
          cursor: 'not-allowed'
        },
        [`${componentCls}-handle::after`]: {
          backgroundColor: token.colorBgElevated,
          cursor: 'not-allowed',
          width: token.handleSize,
          height: token.handleSize,
          boxShadow: `0 0 0 ${unit(token.handleLineWidth)} ${handleColorDisabled}`,
          insetInlineStart: 0,
          insetBlockStart: 0
        },
        [`
          ${componentCls}-mark-text,
          ${componentCls}-dot
        `]: {
          cursor: `not-allowed !important`
        }
      },
      [`&-tooltip ${antCls}-tooltip-inner`]: {
        minWidth: 'unset'
      }
    })
  };
};
// ============================ Horizontal ============================
const genDirectionStyle = (token, horizontal) => {
  const {
    componentCls,
    railSize,
    handleSize,
    dotSize,
    marginFull,
    calc
  } = token;
  const railPadding = horizontal ? 'paddingBlock' : 'paddingInline';
  const full = horizontal ? 'width' : 'height';
  const part = horizontal ? 'height' : 'width';
  const handlePos = horizontal ? 'insetBlockStart' : 'insetInlineStart';
  const markInset = horizontal ? 'top' : 'insetInlineStart';
  const handlePosSize = calc(railSize).mul(3).sub(handleSize).div(2).equal();
  const draggableBorderSize = calc(handleSize).sub(railSize).div(2).equal();
  const draggableBorder = horizontal ? {
    borderWidth: `${unit(draggableBorderSize)} 0`,
    transform: `translateY(${unit(calc(draggableBorderSize).mul(-1).equal())})`
  } : {
    borderWidth: `0 ${unit(draggableBorderSize)}`,
    transform: `translateX(${unit(token.calc(draggableBorderSize).mul(-1).equal())})`
  };
  return {
    [railPadding]: railSize,
    [part]: calc(railSize).mul(3).equal(),
    [`${componentCls}-rail`]: {
      [full]: '100%',
      [part]: railSize
    },
    [`${componentCls}-track,${componentCls}-tracks`]: {
      [part]: railSize
    },
    [`${componentCls}-track-draggable`]: Object.assign({}, draggableBorder),
    [`${componentCls}-handle`]: {
      [handlePos]: handlePosSize
    },
    [`${componentCls}-mark`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      // https://github.com/ant-design/ant-design/issues/43731
      [markInset]: calc(railSize).mul(3).add(horizontal ? 0 : marginFull).equal(),
      [full]: '100%'
    },
    [`${componentCls}-step`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [markInset]: railSize,
      [full]: '100%',
      [part]: railSize
    },
    [`${componentCls}-dot`]: {
      position: 'absolute',
      [handlePos]: calc(railSize).sub(dotSize).div(2).equal()
    }
  };
};
// ============================ Horizontal ============================
const genHorizontalStyle = token => {
  const {
    componentCls,
    marginPartWithMark
  } = token;
  return {
    [`${componentCls}-horizontal`]: Object.assign(Object.assign({}, genDirectionStyle(token, true)), {
      [`&${componentCls}-with-marks`]: {
        marginBottom: marginPartWithMark
      }
    })
  };
};
// ============================= Vertical =============================
const genVerticalStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-vertical`]: Object.assign(Object.assign({}, genDirectionStyle(token, false)), {
      height: '100%'
    })
  };
};
// ============================== Export ==============================
export const prepareComponentToken = token => {
  // Handle line width is always width-er 1px
  const increaseHandleWidth = 1;
  const controlSize = token.controlHeightLG / 4;
  const controlSizeHover = token.controlHeightSM / 2;
  const handleLineWidth = token.lineWidth + increaseHandleWidth;
  const handleLineWidthHover = token.lineWidth + increaseHandleWidth * 3;
  return {
    controlSize,
    railSize: 4,
    handleSize: controlSize,
    handleSizeHover: controlSizeHover,
    dotSize: 8,
    handleLineWidth,
    handleLineWidthHover,
    railBg: token.colorFillTertiary,
    railHoverBg: token.colorFillSecondary,
    trackBg: token.colorPrimaryBorder,
    trackHoverBg: token.colorPrimaryBorderHover,
    handleColor: token.colorPrimaryBorder,
    handleActiveColor: token.colorPrimary,
    handleColorDisabled: new TinyColor(token.colorTextDisabled).onBackground(token.colorBgContainer).toHexShortString(),
    dotBorderColor: token.colorBorderSecondary,
    dotActiveBorderColor: token.colorPrimaryBorder,
    trackBgDisabled: token.colorBgContainerDisabled
  };
};
export default genStyleHooks('Slider', token => {
  const sliderToken = mergeToken(token, {
    marginPart: token.calc(token.controlHeight).sub(token.controlSize).div(2).equal(),
    marginFull: token.calc(token.controlSize).div(2).equal(),
    marginPartWithMark: token.calc(token.controlHeightLG).sub(token.controlSize).equal()
  });
  return [genBaseStyle(sliderToken), genHorizontalStyle(sliderToken), genVerticalStyle(sliderToken)];
}, prepareComponentToken);