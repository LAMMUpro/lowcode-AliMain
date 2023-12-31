import type { ComponentType, ReactElement } from 'react';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import type { ComponentTokenMap, GlobalToken, OverrideToken, UseComponentStyleResult } from '../interface';
import { unitless } from '../useToken';
import type AbstractCalculator from './calc/calculator';
export type OverrideTokenWithoutDerivative = ComponentTokenMap;
export type OverrideComponent = keyof OverrideTokenWithoutDerivative;
export type GlobalTokenWithComponent<C extends OverrideComponent> = GlobalToken & ComponentTokenMap[C];
type ComponentToken<C extends OverrideComponent> = Exclude<OverrideToken[C], undefined>;
type ComponentTokenKey<C extends OverrideComponent> = keyof ComponentToken<C>;
export interface StyleInfo {
    hashId: string;
    prefixCls: string;
    rootPrefixCls: string;
    iconPrefixCls: string;
}
export type CSSUtil = {
    calc: (number: any) => AbstractCalculator;
    max: (...values: (number | string)[]) => number | string;
    min: (...values: (number | string)[]) => number | string;
};
export type TokenWithCommonCls<T> = T & {
    /** Wrap component class with `.` prefix */
    componentCls: string;
    /** Origin prefix which do not have `.` prefix */
    prefixCls: string;
    /** Wrap icon class with `.` prefix */
    iconCls: string;
    /** Wrap ant prefixCls class with `.` prefix */
    antCls: string;
} & CSSUtil;
export type FullToken<C extends OverrideComponent> = TokenWithCommonCls<GlobalTokenWithComponent<C>>;
export type GenStyleFn<C extends OverrideComponent> = (token: FullToken<C>, info: StyleInfo) => CSSInterpolation;
export type GetDefaultToken<C extends OverrideComponent> = null | OverrideTokenWithoutDerivative[C] | ((token: GlobalToken) => OverrideTokenWithoutDerivative[C]);
export type FormatComponentToken<C extends OverrideComponent> = (token: NonNullable<OverrideTokenWithoutDerivative[C]>) => NonNullable<OverrideTokenWithoutDerivative[C]>;
export default function genComponentStyleHook<C extends OverrideComponent>(componentName: C | [C, string], styleFn: GenStyleFn<C>, getDefaultToken?: null | OverrideTokenWithoutDerivative[C] | ((token: GlobalToken) => OverrideTokenWithoutDerivative[C]), options?: {
    resetStyle?: boolean;
    deprecatedTokens?: [ComponentTokenKey<C>, ComponentTokenKey<C>][];
    /**
     * Only use component style in client side. Ignore in SSR.
     */
    clientOnly?: boolean;
    /**
     * Set order of component style. Default is -999.
     */
    order?: number;
    format?: FormatComponentToken<C>;
    injectStyle?: boolean;
}): (prefixCls: string) => UseComponentStyleResult;
export interface SubStyleComponentProps {
    prefixCls: string;
}
type RestParameters<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never;
export declare const genSubStyleComponent: <C extends OverrideComponent>(componentName: [C, string], ...args: RestParameters<Parameters<typeof genComponentStyleHook<C>>>) => ComponentType<SubStyleComponentProps>;
export type CSSVarRegisterProps = {
    rootCls: string;
    component: string;
    cssVar: {
        prefix?: string;
        key?: string;
    };
};
export declare const genStyleHooks: <C extends keyof ComponentTokenMap>(component: C, styleFn: GenStyleFn<C>, getDefaultToken?: GetDefaultToken<C> | undefined, options?: {
    resetStyle?: boolean | undefined;
    deprecatedTokens?: [keyof Exclude<OverrideToken[C], undefined>, keyof Exclude<OverrideToken[C], undefined>][] | undefined;
    /**
     * Chance to format component token with user input.
     * Useful when need calculated token as css variables.
     */
    format?: FormatComponentToken<C> | undefined;
    /**
     * Component tokens that do not need unit.
     */
    unitless?: (keyof Exclude<OverrideToken[C], undefined> extends infer T extends keyof Exclude<OverrideToken[C], undefined> ? { [key in T]: boolean; } : never) | undefined;
    /**
     * Only use component style in client side. Ignore in SSR.
     */
    clientOnly?: boolean | undefined;
    /**
     * Set order of component style.
     * @default -999
     */
    order?: number | undefined;
    /**
     * Whether generate styles
     * @default true
     */
    injectStyle?: boolean | undefined;
} | undefined) => (prefixCls: string, rootCls?: string) => readonly [(node: ReactElement) => ReactElement, string];
export {};
