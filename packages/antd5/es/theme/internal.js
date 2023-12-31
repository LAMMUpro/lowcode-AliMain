import { useStyleRegister } from '@ant-design/cssinjs';
import { PresetColors } from './interface';
import useToken from './useToken';
import genComponentStyleHook, { genSubStyleComponent, genStyleHooks } from './util/genComponentStyleHook';
import genPresetColor from './util/genPresetColor';
import statisticToken, { merge as mergeToken } from './util/statistic';
import useResetIconStyle from './util/useResetIconStyle';
import calc from './util/calc';
export { DesignTokenContext, defaultConfig } from './context';
export { PresetColors, genComponentStyleHook, genSubStyleComponent, genPresetColor, genStyleHooks, mergeToken, statisticToken, calc,
// hooks
useResetIconStyle, useStyleRegister, useToken };