import React from 'react';
import { Field } from '@formily/core';
export interface ComponentSwitchBtnCompProps {
    className?: string;
    style?: React.CSSProperties;
    component: string;
    originalComponent: string;
    setComponent: (component: string) => void;
    field: Field;
}
export interface ComponentSwitchBtnCompState {
    currentComponent: string;
}
export declare const ComponentSwitchBtn: any;
