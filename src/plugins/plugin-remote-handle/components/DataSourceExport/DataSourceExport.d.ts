/**
 * 源码导入插件
 * @todo editor 关联 types，并提供详细的出错信息
 */
import { PureComponent } from 'react';
import { RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import { DataSourceType } from '../../types';
export interface DataSourceExportProps {
    dataSourceList: DataSourceConfig[];
    dataSourceTypes: DataSourceType[];
}
export interface DataSourceExportState {
    code: string;
    isCodeValid: boolean;
}
export declare class DataSourceExport extends PureComponent<DataSourceExportProps, DataSourceExportState> {
    static defaultProps: {
        dataSourceList: any[];
    };
    state: {
        code: string;
        isCodeValid: boolean;
    };
    submit: () => Promise<unknown>;
    private monacoRef;
    constructor(props: DataSourceExportProps);
    deriveValue: (value: any) => DataSourceConfig[];
    handleCopy: () => void;
    handleEditorChange: (newValue: any) => void;
    handleEditorDidMount: (editor: any, monaco: any) => void;
    handleReset: () => void;
    render(): JSX.Element;
}
