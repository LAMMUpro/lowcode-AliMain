"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const genMotionStyle = token => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  const sharedPanelMotion = {
    '&-enter, &-appear, &-leave': {
      '&-start': {
        transition: 'none'
      },
      '&-active': {
        transition: `all ${motionDurationSlow}`
      }
    }
  };
  return {
    [componentCls]: {
      // ======================== Mask ========================
      [`${componentCls}-mask-motion`]: {
        '&-enter, &-appear, &-leave': {
          '&-active': {
            transition: `all ${motionDurationSlow}`
          }
        },
        '&-enter, &-appear': {
          opacity: 0,
          '&-active': {
            opacity: 1
          }
        },
        '&-leave': {
          opacity: 1,
          '&-active': {
            opacity: 0
          }
        }
      },
      // ======================= Panel ========================
      [`${componentCls}-panel-motion`]: {
        // Left
        '&-left': [sharedPanelMotion, {
          '&-enter, &-appear': {
            '&-start': {
              transform: 'translateX(-100%) !important'
            },
            '&-active': {
              transform: 'translateX(0)'
            }
          },
          '&-leave': {
            transform: 'translateX(0)',
            '&-active': {
              transform: 'translateX(-100%)'
            }
          }
        }],
        // Right
        '&-right': [sharedPanelMotion, {
          '&-enter, &-appear': {
            '&-start': {
              transform: 'translateX(100%) !important'
            },
            '&-active': {
              transform: 'translateX(0)'
            }
          },
          '&-leave': {
            transform: 'translateX(0)',
            '&-active': {
              transform: 'translateX(100%)'
            }
          }
        }],
        // Top
        '&-top': [sharedPanelMotion, {
          '&-enter, &-appear': {
            '&-start': {
              transform: 'translateY(-100%) !important'
            },
            '&-active': {
              transform: 'translateY(0)'
            }
          },
          '&-leave': {
            transform: 'translateY(0)',
            '&-active': {
              transform: 'translateY(-100%)'
            }
          }
        }],
        // Bottom
        '&-bottom': [sharedPanelMotion, {
          '&-enter, &-appear': {
            '&-start': {
              transform: 'translateY(100%) !important'
            },
            '&-active': {
              transform: 'translateY(0)'
            }
          },
          '&-leave': {
            transform: 'translateY(0)',
            '&-active': {
              transform: 'translateY(100%)'
            }
          }
        }]
      }
    }
  };
};
var _default = exports.default = genMotionStyle;