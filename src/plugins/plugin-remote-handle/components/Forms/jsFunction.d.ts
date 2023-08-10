import { PureComponent } from 'react';
import { JSFunction as IJSFunction } from '@alilc/lowcode-types';
export interface JSFunctionProps {
    className: string;
    value: IJSFunction;
    onChange?: (val: any) => void;
}
export interface JSFunctionState {
}
export declare class JSFunctionComp extends PureComponent<JSFunctionProps, JSFunctionState> {
    static isFieldComponent: boolean;
    static defaultProps: {
        onChange: any;
    };
    handleEditorChange: (newValue: string) => void;
    render(): JSX.Element;
}
export declare const JSFunction: any;
