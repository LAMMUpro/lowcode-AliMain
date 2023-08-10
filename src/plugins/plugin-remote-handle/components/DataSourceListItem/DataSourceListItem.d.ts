import { PureComponent, Component, CSSProperties } from 'react';
import { RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import type { DataSourceInfoTag } from '../../types';
import { DataSourcePanelMode } from '../../pane';
import './list-item.scss';
export declare const ListDndTypes: {
    DATASOURCE_ITEM: string;
};
export interface IDataSourceListItemOperation {
    title: string;
    type: string;
    disabled?: boolean;
    visible?: boolean;
    icon: string;
}
export interface DataSourceListItemProps {
    className?: string;
    style?: CSSProperties;
    dataSource: DataSourceConfig & {
        typeTitle: string;
    };
    operations: IDataSourceListItemOperation[];
    connectDragSource: any;
    connectDragPreview: any;
    connectDropTarget: any;
    onOperationClick?: (operationType: string, dataSourceId: string) => void;
    isDragging: boolean;
    isOver: boolean;
    dropResult: any;
    onStartDrag?: (id: string) => void;
    onDragOver?: (from: string, to: string) => void;
    onDrop?: (from: string, to: string) => void;
    mode: DataSourcePanelMode;
    onToggleSelect?: (id: string) => void;
    selected: boolean;
    renderInfoTags: (dataSource: DataSourceConfig) => DataSourceInfoTag[];
}
export declare class DataSourceListItem extends Component<DataSourceListItemProps> {
    static contextType: any;
    componentDidUpdate(prevProps: DataSourceListItemProps): void;
    handleDragEnd: (from: any, to: any) => void;
    handleExportCheckChange: () => void;
    render(): any;
}
interface DataSourceListItemOperationProps {
    dataSourceId: string;
    title: string;
    icon?: string;
    type: string;
    onOperationClick: (operationType: string, dataSourceId: string) => void;
}
export declare class DataSourceListItemOperation extends PureComponent<DataSourceListItemOperationProps> {
    handleOperationClick: () => void;
    render(): JSX.Element;
}
export declare const DroppableDataSourceListItem: any;
export {};
