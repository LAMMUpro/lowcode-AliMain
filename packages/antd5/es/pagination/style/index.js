import { unit } from '@ant-design/cssinjs';
import { genBasicInputStyle, genInputSmallStyle, initComponentToken, initInputToken } from '../../input/style';
import { genFocusOutline, genFocusStyle, resetComponent } from '../../style';
import { genStyleHooks, mergeToken } from '../../theme/internal';
const genPaginationDisabledStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-disabled`]: {
      '&, &:hover': {
        cursor: 'not-allowed',
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: 'not-allowed'
        }
      },
      '&:focus-visible': {
        cursor: 'not-allowed',
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: 'not-allowed'
        }
      }
    },
    [`&${componentCls}-disabled`]: {
      cursor: 'not-allowed',
      [`${componentCls}-item`]: {
        cursor: 'not-allowed',
        '&:hover, &:active': {
          backgroundColor: 'transparent'
        },
        a: {
          color: token.colorTextDisabled,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'not-allowed'
        },
        '&-active': {
          borderColor: token.colorBorder,
          backgroundColor: token.itemActiveBgDisabled,
          '&:hover, &:active': {
            backgroundColor: token.itemActiveBgDisabled
          },
          a: {
            color: token.itemActiveColorDisabled
          }
        }
      },
      [`${componentCls}-item-link`]: {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
        '&:hover, &:active': {
          backgroundColor: 'transparent'
        },
        [`${componentCls}-simple&`]: {
          backgroundColor: 'transparent',
          '&:hover, &:active': {
            backgroundColor: 'transparent'
          }
        }
      },
      [`${componentCls}-simple-pager`]: {
        color: token.colorTextDisabled
      },
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        [`${componentCls}-item-link-icon`]: {
          opacity: 0
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${componentCls}-simple`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&${componentCls}-disabled ${componentCls}-item-link`]: {
          '&:hover, &:active': {
            backgroundColor: 'transparent'
          }
        }
      }
    }
  };
};
const genPaginationMiniStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`&${componentCls}-mini ${componentCls}-total-text, &${componentCls}-mini ${componentCls}-simple-pager`]: {
      height: token.itemSizeSM,
      lineHeight: unit(token.itemSizeSM)
    },
    [`&${componentCls}-mini ${componentCls}-item`]: {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: unit(token.calc(token.itemSizeSM).sub(2).equal())
    },
    [`&${componentCls}-mini:not(${componentCls}-disabled) ${componentCls}-item:not(${componentCls}-item-active)`]: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      '&:hover': {
        backgroundColor: token.colorBgTextHover
      },
      '&:active': {
        backgroundColor: token.colorBgTextActive
      }
    },
    [`&${componentCls}-mini ${componentCls}-prev, &${componentCls}-mini ${componentCls}-next`]: {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: unit(token.itemSizeSM)
    },
    [`&${componentCls}-mini:not(${componentCls}-disabled)`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&:hover ${componentCls}-item-link`]: {
          backgroundColor: token.colorBgTextHover
        },
        [`&:active ${componentCls}-item-link`]: {
          backgroundColor: token.colorBgTextActive
        },
        [`&${componentCls}-disabled:hover ${componentCls}-item-link`]: {
          backgroundColor: 'transparent'
        }
      }
    },
    [`
    &${componentCls}-mini ${componentCls}-prev ${componentCls}-item-link,
    &${componentCls}-mini ${componentCls}-next ${componentCls}-item-link
    `]: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      '&::after': {
        height: token.itemSizeSM,
        lineHeight: unit(token.itemSizeSM)
      }
    },
    [`&${componentCls}-mini ${componentCls}-jump-prev, &${componentCls}-mini ${componentCls}-jump-next`]: {
      height: token.itemSizeSM,
      marginInlineEnd: 0,
      lineHeight: unit(token.itemSizeSM)
    },
    [`&${componentCls}-mini ${componentCls}-options`]: {
      marginInlineStart: token.paginationMiniOptionsMarginInlineStart,
      [`&-size-changer`]: {
        top: token.miniOptionsSizeChangerTop
      },
      [`&-quick-jumper`]: {
        height: token.itemSizeSM,
        lineHeight: unit(token.itemSizeSM),
        input: Object.assign(Object.assign({}, genInputSmallStyle(token)), {
          width: token.paginationMiniQuickJumperInputWidth,
          height: token.controlHeightSM
        })
      }
    }
  };
};
const genPaginationSimpleStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`
    &${componentCls}-simple ${componentCls}-prev,
    &${componentCls}-simple ${componentCls}-next
    `]: {
      height: token.itemSizeSM,
      lineHeight: unit(token.itemSizeSM),
      verticalAlign: 'top',
      [`${componentCls}-item-link`]: {
        height: token.itemSizeSM,
        backgroundColor: 'transparent',
        border: 0,
        '&:hover': {
          backgroundColor: token.colorBgTextHover
        },
        '&:active': {
          backgroundColor: token.colorBgTextActive
        },
        '&::after': {
          height: token.itemSizeSM,
          lineHeight: unit(token.itemSizeSM)
        }
      }
    },
    [`&${componentCls}-simple ${componentCls}-simple-pager`]: {
      display: 'inline-block',
      height: token.itemSizeSM,
      marginInlineEnd: token.marginXS,
      input: {
        boxSizing: 'border-box',
        height: '100%',
        marginInlineEnd: token.marginXS,
        padding: `0 ${unit(token.paginationItemPaddingInline)}`,
        textAlign: 'center',
        backgroundColor: token.itemInputBg,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        outline: 'none',
        transition: `border-color ${token.motionDurationMid}`,
        color: 'inherit',
        '&:hover': {
          borderColor: token.colorPrimary
        },
        '&:focus': {
          borderColor: token.colorPrimaryHover,
          boxShadow: `${unit(token.inputOutlineOffset)} 0 ${unit(token.controlOutlineWidth)} ${token.controlOutline}`
        },
        '&[disabled]': {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          cursor: 'not-allowed'
        }
      }
    }
  };
};
const genPaginationJumpStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
      outline: 0,
      [`${componentCls}-item-container`]: {
        position: 'relative',
        [`${componentCls}-item-link-icon`]: {
          color: token.colorPrimary,
          fontSize: token.fontSizeSM,
          opacity: 0,
          transition: `all ${token.motionDurationMid}`,
          '&-svg': {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: 'auto'
          }
        },
        [`${componentCls}-item-ellipsis`]: {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: 'block',
          margin: 'auto',
          color: token.colorTextDisabled,
          fontFamily: 'Arial, Helvetica, sans-serif',
          letterSpacing: token.paginationEllipsisLetterSpacing,
          textAlign: 'center',
          textIndent: token.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${token.motionDurationMid}`
        }
      },
      '&:hover': {
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      }
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      marginInlineEnd: token.marginXS
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-next,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      display: 'inline-block',
      minWidth: token.itemSize,
      height: token.itemSize,
      color: token.colorText,
      fontFamily: token.fontFamily,
      lineHeight: `${unit(token.itemSize)}`,
      textAlign: 'center',
      verticalAlign: 'middle',
      listStyle: 'none',
      borderRadius: token.borderRadius,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid}`
    },
    [`${componentCls}-prev, ${componentCls}-next`]: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      outline: 0,
      button: {
        color: token.colorText,
        cursor: 'pointer',
        userSelect: 'none'
      },
      [`${componentCls}-item-link`]: {
        display: 'block',
        width: '100%',
        height: '100%',
        padding: 0,
        fontSize: token.fontSizeSM,
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
        borderRadius: token.borderRadius,
        outline: 'none',
        transition: `all ${token.motionDurationMid}`
      },
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover`]: {
        [`${componentCls}-item-link`]: {
          backgroundColor: 'transparent'
        }
      }
    },
    [`${componentCls}-slash`]: {
      marginInlineEnd: token.paginationSlashMarginInlineEnd,
      marginInlineStart: token.paginationSlashMarginInlineStart
    },
    [`${componentCls}-options`]: {
      display: 'inline-block',
      marginInlineStart: token.margin,
      verticalAlign: 'middle',
      '&-size-changer.-select': {
        display: 'inline-block',
        width: 'auto'
      },
      '&-quick-jumper': {
        display: 'inline-block',
        height: token.controlHeight,
        marginInlineStart: token.marginXS,
        lineHeight: unit(token.controlHeight),
        verticalAlign: 'top',
        input: Object.assign(Object.assign({}, genBasicInputStyle(token)), {
          width: token.calc(token.controlHeightLG).mul(1.25).equal(),
          height: token.controlHeight,
          boxSizing: 'border-box',
          margin: 0,
          marginInlineStart: token.marginXS,
          marginInlineEnd: token.marginXS
        })
      }
    }
  };
};
const genPaginationItemStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-item`]: {
      display: 'inline-block',
      minWidth: token.itemSize,
      height: token.itemSize,
      marginInlineEnd: token.marginXS,
      fontFamily: token.fontFamily,
      lineHeight: unit(token.calc(token.itemSize).sub(2).equal()),
      textAlign: 'center',
      verticalAlign: 'middle',
      listStyle: 'none',
      backgroundColor: 'transparent',
      border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
      borderRadius: token.borderRadius,
      outline: 0,
      cursor: 'pointer',
      userSelect: 'none',
      a: {
        display: 'block',
        padding: `0 ${unit(token.paginationItemPaddingInline)}`,
        color: token.colorText,
        '&:hover': {
          textDecoration: 'none'
        }
      },
      [`&:not(${componentCls}-item-active)`]: {
        '&:hover': {
          transition: `all ${token.motionDurationMid}`,
          backgroundColor: token.colorBgTextHover
        },
        '&:active': {
          backgroundColor: token.colorBgTextActive
        }
      },
      '&-active': {
        fontWeight: token.fontWeightStrong,
        backgroundColor: token.itemActiveBg,
        borderColor: token.colorPrimary,
        a: {
          color: token.colorPrimary
        },
        '&:hover': {
          borderColor: token.colorPrimaryHover
        },
        '&:hover a': {
          color: token.colorPrimaryHover
        }
      }
    }
  };
};
const genPaginationStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      'ul, ol': {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        content: '""'
      },
      [`${componentCls}-total-text`]: {
        display: 'inline-block',
        height: token.itemSize,
        marginInlineEnd: token.marginXS,
        lineHeight: unit(token.calc(token.itemSize).sub(2).equal()),
        verticalAlign: 'middle'
      }
    }), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), {
      // media query style
      [`@media only screen and (max-width: ${token.screenLG}px)`]: {
        [`${componentCls}-item`]: {
          '&-after-jump-prev, &-before-jump-next': {
            display: 'none'
          }
        }
      },
      [`@media only screen and (max-width: ${token.screenSM}px)`]: {
        [`${componentCls}-options`]: {
          display: 'none'
        }
      }
    }),
    // rtl style
    [`&${token.componentCls}-rtl`]: {
      direction: 'rtl'
    }
  };
};
const genPaginationFocusStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}:not(${componentCls}-disabled)`]: {
      [`${componentCls}-item`]: Object.assign({}, genFocusStyle(token)),
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        '&:focus-visible': Object.assign({
          [`${componentCls}-item-link-icon`]: {
            opacity: 1
          },
          [`${componentCls}-item-ellipsis`]: {
            opacity: 0
          }
        }, genFocusOutline(token))
      },
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&:focus-visible ${componentCls}-item-link`]: Object.assign({}, genFocusOutline(token))
      }
    }
  };
};
export const prepareComponentToken = token => Object.assign({
  itemBg: token.colorBgContainer,
  itemSize: token.controlHeight,
  itemSizeSM: token.controlHeightSM,
  itemActiveBg: token.colorBgContainer,
  itemLinkBg: token.colorBgContainer,
  itemActiveColorDisabled: token.colorTextDisabled,
  itemActiveBgDisabled: token.controlItemBgActiveDisabled,
  itemInputBg: token.colorBgContainer,
  miniOptionsSizeChangerTop: 0
}, initComponentToken(token));
export const prepareToken = token => mergeToken(token, {
  inputOutlineOffset: 0,
  paginationMiniOptionsMarginInlineStart: token.calc(token.marginXXS).div(2).equal(),
  paginationMiniQuickJumperInputWidth: token.calc(token.controlHeightLG).mul(1.1).equal(),
  paginationItemPaddingInline: token.calc(token.marginXXS).mul(1.5).equal(),
  paginationEllipsisLetterSpacing: token.calc(token.marginXXS).div(2).equal(),
  paginationSlashMarginInlineStart: token.marginXXS,
  paginationSlashMarginInlineEnd: token.marginSM,
  paginationEllipsisTextIndent: '0.13em' // magic for ui experience
}, initInputToken(token));
// ============================== Export ==============================
export default genStyleHooks('Pagination', token => {
  const paginationToken = prepareToken(token);
  return [genPaginationStyle(paginationToken), genPaginationFocusStyle(paginationToken)];
}, prepareComponentToken);