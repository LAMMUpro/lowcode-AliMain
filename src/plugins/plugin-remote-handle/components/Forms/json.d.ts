import { PureComponent } from 'react';
export interface JSONProps {
    className?: string;
    value: Record<string, any>;
    onChange?: (val: any) => void;
}
export interface JSONState {
}
export declare class JSONComp extends PureComponent<JSONProps, JSONState> {
    static isFieldComponent: boolean;
    static defaultProps: {
        onChange: any;
    };
    handleEditorChange: (newValue: string) => void;
    render(): JSX.Element;
}
export declare const JSON: any;
