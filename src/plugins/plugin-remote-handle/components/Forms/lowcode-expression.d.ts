import { PureComponent } from 'react';
import { JSExpression } from '@alilc/lowcode-types';
export interface LowcodeExpressionProps {
    className: string;
    value: JSExpression;
    onChange?: (val: JSExpression) => void;
}
export declare class LowcodeExpressionComp extends PureComponent<LowcodeExpressionProps> {
    static isFieldComponent: boolean;
    static defaultProps: {
        onChange: any;
    };
    handleChange: (newValue: any) => void;
    render(): JSX.Element;
}
export declare const LowcodeExpression: any;
