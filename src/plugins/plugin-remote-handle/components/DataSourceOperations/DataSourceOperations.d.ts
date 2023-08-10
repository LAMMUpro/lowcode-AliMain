import { PureComponent } from 'react';
import { RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import { DataSourcePaneImportPlugin, DataSourceType, DataSourcePanelMode } from '../../types';
export interface DataSourceOperationsProps {
    importPlugins?: DataSourcePaneImportPlugin[];
    dataSourceTypes: DataSourceType[];
    dataSource: DataSourceConfig[];
    onCreate?: (dataSourceType: string) => void;
    onImport?: (importPluginName: string) => void;
    onStartSort?: () => void;
    onFinishSort?: () => void;
    onCancelSort?: () => void;
    onStartExport?: () => void;
    onFinishExport?: () => void;
    onCancelExport?: () => void;
    selectedList: string[];
    mode: DataSourcePanelMode;
    empty: boolean;
}
export declare class DataSourceOperations extends PureComponent<DataSourceOperationsProps> {
    handleDataSourceFormBtnClick: (dataSourceType: string) => void;
    handleDataSourceFormMenuBtnClick: (dataSourceType: string) => void;
    handleImportDataSourceMenuBtnClick: (importPluginName: string) => void;
    renderOperatons: () => JSX.Element[];
    render(): JSX.Element;
}
