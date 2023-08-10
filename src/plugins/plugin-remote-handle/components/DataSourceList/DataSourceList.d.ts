import { PureComponent } from 'react';
import { RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import { DataSourcePaneStateContext } from '../../utils/stateMachine';
import { DataSourceInfoTag } from '../../types';
export interface DataSourceListProps {
    dataSource: DataSourceConfig[];
    onOperationClick?: (operationType: string, dataSourceId: string) => void;
    onToggleSelect?: (dataSourceId: string) => void;
    renderItemInfoTags?: (dataSource: DataSourceConfig) => DataSourceInfoTag[];
}
interface DataSourceListState {
    current: any;
    dataSource: DataSourceConfig[];
    dragId?: string;
}
export declare class DataSourceList extends PureComponent<DataSourceListProps, DataSourceListState> {
    static contextType: any;
    private serviceS;
    state: {
        current: import("xstate").State<DataSourcePaneStateContext, {
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
        }, any, import("xstate").Typestate<TContext>, import("xstate").ResolveTypegenMeta<import("xstate").TypegenConstraint, {
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
        dataSource: DataSourceConfig[];
        dragId: any;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: DataSourceListProps): void;
    deriveListDataSource: () => JSX.Element | JSX.Element[];
    handleStartDrag: (dragId: string) => void;
    handleDragOver: (dragOverId: string) => void;
    handleDrop: () => void;
    handleToggleSelect: (dataSourceId: string) => void;
    render(): JSX.Element;
}
export {};
