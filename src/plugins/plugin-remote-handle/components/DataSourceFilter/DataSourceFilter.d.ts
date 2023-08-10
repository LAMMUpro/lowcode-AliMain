import { PureComponent } from 'react';
import { DataSourceType } from '../../types';
export interface DataSourceFilterProps {
    dataSourceTypes: DataSourceType[];
    onFilter?: (dataSourceType: string, keyword: string) => void;
}
export interface DataSourceFilterState {
    selectedDataSourceType: string;
    keyword: string;
}
export declare class DataSourceFilter extends PureComponent<DataSourceFilterProps, DataSourceFilterState> {
    state: {
        selectedDataSourceType: string;
        keyword: string;
    };
    handleSearchFilterChange: (filterObj: Record<string, any>) => void;
    handleChange: (val: string, actionType: any, item: string) => void;
    handleSearch: (keyword: string) => void;
    render(): JSX.Element;
}
