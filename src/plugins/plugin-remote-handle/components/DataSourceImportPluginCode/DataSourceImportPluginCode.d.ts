/**
 * 源码导入插件
 * @todo editor 关联 types，并提供详细的出错信息
 */
import { PureComponent } from 'react';
import { RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import { DataSourcePaneImportPluginComponentProps } from '../../types';
import './index.scss';
export interface DataSourceImportPluginCodeProps extends DataSourcePaneImportPluginComponentProps {
    defaultValue?: DataSourceConfig[];
}
export interface DataSourceImportPluginCodeState {
    code: string;
    isCodeValid: boolean;
}
export declare class DataSourceImportPluginCode extends PureComponent<DataSourceImportPluginCodeProps, DataSourceImportPluginCodeState> {
    static defaultProps: {
        defaultValue: {
            type: string;
            id: string;
        }[];
    };
    state: {
        code: string;
        isCodeValid: boolean;
    };
    submit: () => Promise<unknown>;
    private monacoRef;
    constructor(props: DataSourceImportPluginCodeProps);
    deriveValue: (value: any) => DataSourceConfig[];
    handleComplete: () => void;
    handleEditorChange: (newValue: string) => void;
    handleEditorDidMount: (editor: any, monaco: any) => void;
    render(): JSX.Element;
}
