import { PureComponent } from 'react';
import { InterpretDataSourceConfig } from '@alilc/lowcode-types';
import { Project, Event, Setters } from '@alilc/lowcode-shell';
import Logger from 'zen-logger';
import { DataSourcePane } from './DataSourcePane';
import { DataSourceFilter } from '../components/DataSourceFilter';
import { DataSourceList } from '../components/DataSourceList';
import { DroppableDataSourceListItem } from '../components/DataSourceListItem';
import { DataSourcePaneImportPlugin, DataSourceType, DataSourceConfig } from '../types';
import { DataSourceImportPluginCode } from '../components/DataSourceImportPluginCode';
import { JSFunctionComp } from '../components/Forms';
import { createStateService } from '../utils/stateMachine';
import { DataSourcePaneContext } from '../utils/panel-context';
import './index.scss';
export interface DataSource {
    list: InterpretDataSourceConfig[];
}
export { DataSourceForm } from '../components/DataSourceForm';
export interface DataSourcePanePluginProps {
    event: Event;
    project: Project;
    setters: Setters | null;
    importPlugins?: DataSourcePaneImportPlugin[];
    dataSourceTypes: DataSourceType[];
    exportPlugins?: DataSourcePaneImportPlugin[];
    logger: Logger;
    defaultSchema?: DataSource | (() => DataSource);
    onSchemaChange?: (schema: DataSource) => void;
    onError?: (error: Error) => void;
}
export interface DataSourcePanePluginState {
    /** 面板是否打开 */
    active: boolean;
    panelKey: number;
}
export { DataSourcePaneImportPlugin, DataSourceType, DataSourceConfig };
export declare function createDataSourcePane(): void;
export default class DataSourcePanePlugin extends PureComponent<DataSourcePanePluginProps, DataSourcePanePluginState> {
    static displayName: string;
    static defaultProps: {
        dataSourceTypes: any[];
        importPlugins: any[];
        exportPlugins: any[];
    };
    stateService: import("xstate").Interpreter<import("../utils/stateMachine").DataSourcePaneStateContext, any, {
        type: "START_DUPLICATE";
    } | {
        type: "FINISH_IMPORT";
    } | {
        type: "SHOW_EXPORT_DETAIL";
    } | {
        type: "SHOW_IMPORT_DETAIL";
    } | {
        type: "START_EXPORT";
    } | {
        type: "START_SORT";
    } | {
        type: "START_CREATE";
    } | {
        type: "DETAIL_CANCEL";
    } | {
        type: "START_EDIT";
    } | {
        type: "FILTER_CHANGE";
    } | {
        type: "FINISH_SORT";
    } | {
        type: "SORT_UPDATE";
    } | {
        type: "FINISH_EXPORT";
    } | {
        type: "FINISH_CREATE";
    } | {
        type: "FINISH_EDIT";
    } | {
        type: "UPDATE_DS";
    } | {
        type: "REMOVE";
    } | {
        type: "START_EXPORT";
    } | {
        type: "SAVE_SORT";
    } | {
        type: "CANCEL_SORT";
    } | {
        type: "START_VIEW";
    } | {
        type: "EXPORT.toggleSelect";
    }, import("xstate").Typestate<import("../utils/stateMachine").DataSourcePaneStateContext>, import("xstate").ResolveTypegenMeta<import("xstate").TypegenConstraint, {
        type: "START_DUPLICATE";
    } | {
        type: "FINISH_IMPORT";
    } | {
        type: "SHOW_EXPORT_DETAIL";
    } | {
        type: "SHOW_IMPORT_DETAIL";
    } | {
        type: "START_EXPORT";
    } | {
        type: "START_SORT";
    } | {
        type: "START_CREATE";
    } | {
        type: "DETAIL_CANCEL";
    } | {
        type: "START_EDIT";
    } | {
        type: "FILTER_CHANGE";
    } | {
        type: "FINISH_SORT";
    } | {
        type: "SORT_UPDATE";
    } | {
        type: "FINISH_EXPORT";
    } | {
        type: "FINISH_CREATE";
    } | {
        type: "FINISH_EDIT";
    } | {
        type: "UPDATE_DS";
    } | {
        type: "REMOVE";
    } | {
        type: "START_EXPORT";
    } | {
        type: "SAVE_SORT";
    } | {
        type: "CANCEL_SORT";
    } | {
        type: "START_VIEW";
    } | {
        type: "EXPORT.toggleSelect";
    }, import("xstate").BaseActionObject, Record<string, {
        data: any;
    }>>>;
    state: {
        active: boolean;
        panelKey: number;
    };
    constructor(props: DataSourcePanePluginProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleSchemaChange: ({ list: apiList }: DataSource) => void;
    handleReset: () => void;
    render(): JSX.Element;
}
export { DataSourceImportPluginCode, JSFunctionComp, DataSourcePane, DataSourceList, DroppableDataSourceListItem, DataSourceFilter, DataSourcePaneContext, createStateService, };
export * from '../datasource-types';
export * from '../types';
