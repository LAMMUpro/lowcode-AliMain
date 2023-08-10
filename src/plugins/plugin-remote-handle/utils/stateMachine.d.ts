import { RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import { DataSourceType } from '../types';
export interface DataSourcePaneStateContext {
    dataSourceList: DataSourceConfig[];
    dataSourceListFilter: {
        type?: DataSourceType;
        keyword: string;
        renderKey: number;
    };
    detail: {
        visible: boolean;
        title?: string;
        target?: string;
        ok?: boolean;
        okText?: string;
        cancelText?: string;
        data?: any;
    };
    sort: {
        dataSourceList: DataSourceConfig[];
    };
    export: {
        selectedDataSourceIdList: string[];
    };
}
declare type DataSourcePaneStateEvent = {
    type: 'START_DUPLICATE';
} | {
    type: 'FINISH_IMPORT';
} | {
    type: 'SHOW_EXPORT_DETAIL';
} | {
    type: 'SHOW_IMPORT_DETAIL';
} | {
    type: 'START_EXPORT';
} | {
    type: 'START_SORT';
} | {
    type: 'START_CREATE';
} | {
    type: 'DETAIL_CANCEL';
} | {
    type: 'START_EDIT';
} | {
    type: 'FILTER_CHANGE';
} | {
    type: 'FINISH_SORT';
} | {
    type: 'SORT_UPDATE';
} | {
    type: 'FINISH_EXPORT';
} | {
    type: 'FINISH_CREATE';
} | {
    type: 'FINISH_EDIT';
} | {
    type: 'UPDATE_DS';
} | {
    type: 'REMOVE';
} | {
    type: 'START_EXPORT';
} | {
    type: 'SAVE_SORT';
} | {
    type: 'CANCEL_SORT';
} | {
    type: 'START_VIEW';
} | {
    type: 'EXPORT.toggleSelect';
};
export declare const createStateMachine: (dataSourceList?: DataSourceConfig[]) => import("xstate").StateMachine<DataSourcePaneStateContext, any, DataSourcePaneStateEvent, import("xstate").Typestate<TContext>, import("xstate").BaseActionObject, Record<string, {
    data: any;
}>, import("xstate").ResolveTypegenMeta<import("xstate").TypegenConstraint, DataSourcePaneStateEvent, import("xstate").BaseActionObject, Record<string, {
    data: any;
}>>>;
export declare const createStateService: () => import("xstate").Interpreter<DataSourcePaneStateContext, any, DataSourcePaneStateEvent, import("xstate").Typestate<DataSourcePaneStateContext>, import("xstate").ResolveTypegenMeta<import("xstate").TypegenConstraint, DataSourcePaneStateEvent, import("xstate").BaseActionObject, Record<string, {
    data: any;
}>>>;
export {};
