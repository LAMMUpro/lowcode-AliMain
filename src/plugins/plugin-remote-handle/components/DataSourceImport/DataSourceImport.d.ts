/**
 * 源码导入插件
 * @todo editor 关联 types，并提供详细的出错信息
 */
import { PureComponent } from 'react';
import { RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import { DataSourcePaneImportPluginComponentProps } from '../../types';
export interface DataSourceImportProps extends DataSourcePaneImportPluginComponentProps {
    defaultValue?: DataSourceConfig[];
}
export interface DataSourceImportState {
    code: string;
    isCodeValid: boolean;
}
export declare class DataSourceImport extends PureComponent<DataSourceImportProps, DataSourceImportState> {
    static defaultProps: {
        defaultValue: {
            type: string;
            isInit: boolean;
            options: {
                method: string;
                isCors: boolean;
                timeout: number;
                uri: string;
                params: {};
                headers: {};
            };
            id: string;
        }[];
    };
    state: {
        code: string;
        isCodeValid: boolean;
    };
    submit: () => Promise<unknown>;
    private monacoRef;
    constructor(props: DataSourceImportProps);
    deriveValue: (value: any) => DataSourceConfig[];
    /**
     * 看代码是未使用到
     * @deprecated
     */
    handleComplete: () => void;
    handleEditorChange: (newValue: string) => void;
    handleEditorDidMount: (editor: any, monaco: any) => void;
    render(): JSX.Element;
}
