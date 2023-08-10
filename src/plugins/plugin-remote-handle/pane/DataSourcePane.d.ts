/**
 * 面板，先通过 Dialog 呈现
 */
import React, { PureComponent } from 'react';
import { RuntimeDataSource as DataSource, RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import { DataSourcePanelMode } from '../types';
import type { DataSourceInfoTag, DataSourcePaneImportPlugin, DataSourceType } from '../types';
export interface DataSourcePaneProps {
    className?: string;
    style?: React.CSSProperties;
    /** 自定义数据源 */
    formComponents?: any[];
    /** 数据源类型定义 */
    dataSourceTypes?: DataSourceType[];
    /** 导入插件 */
    importPlugins?: DataSourcePaneImportPlugin[];
    /** 导出插件 */
    exportPlugins?: DataSourcePaneImportPlugin[];
    /** 默认的协议 */
    initialSchema?: DataSource;
    /** 协议变化事件处理 */
    onSchemaChange?: (schema: DataSource) => void;
    /** 导出事件处理 */
    onExport?: (dataSourceConfigList: DataSourceConfig[]) => void;
    helpLink?: string;
    /** 渲染数据源信息标签 */
    renderDataSourceInfoTags?: (dataSource: DataSourceConfig) => DataSourceInfoTag[];
}
export interface DataSourcePaneState {
    current: any;
    listMode: DataSourcePanelMode;
}
export declare class DataSourcePane extends PureComponent<DataSourcePaneProps, DataSourcePaneState> {
    static contextType: any;
    private serviceS;
    state: DataSourcePaneState;
    detailRef?: import("react").RefObject<any>;
    exportRef?: import("react").RefObject<any>;
    importRef?: import("react").RefObject<any>;
    private send;
    componentDidMount(): void;
    componentDidUpdate(newValue: DataSourcePaneProps): void;
    componentWillUnmount(): void;
    handleStartSort: () => void;
    handleFinishSort: () => void;
    handleCancelSort: () => void;
    handleCancelExport: () => void;
    handleStartExport: () => void;
    handleFinishExport: () => void;
    handleOperationClick: (operationType: string, dataSourceId: string) => void;
    handleImport: (importPluginName: string) => void;
    handleFilterChange: (keyword: string, dataSourceType: string) => void;
    handleOperationCancel: () => void;
    handleCreate: (dataSourceType: string) => void;
    handleOperationFinish: () => void;
    renderDetail: () => JSX.Element;
    render(): JSX.Element;
}
