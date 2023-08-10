import React from 'react';
import { JSExpression } from '@alilc/lowcode-types';
import './param-value.scss';
declare type ParamValueType = 'string' | 'number' | 'boolean' | 'expression' | 'jsonstring' | 'json';
export interface ParamValueProps {
    className?: string;
    style?: React.CSSProperties;
    value: any;
    onChange?: (value: any) => void;
    types: ParamValueType[];
}
export interface ParamValueState {
    type: ParamValueType;
    value: string | number | JSExpression | boolean;
}
export declare const ParamValue: any;
export {};
