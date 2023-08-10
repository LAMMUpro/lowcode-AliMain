import { PureComponent } from 'react';
export interface CodeProps {
    className: string;
    value: string;
    onChange?: (val: any) => void;
    language?: string;
}
export interface CodeState {
}
export declare class CodeComp extends PureComponent<CodeProps, CodeState> {
    static isFieldComponent: boolean;
    static defaultProps: {
        onChange: any;
        language: string;
    };
    private monacoRef;
    handleEditorChange: (newValue: any) => void;
    handleEditorDidMount: (isFullscreen: any, editor: any, monaco: any) => void;
    render(): JSX.Element;
}
export declare const Code: any;
