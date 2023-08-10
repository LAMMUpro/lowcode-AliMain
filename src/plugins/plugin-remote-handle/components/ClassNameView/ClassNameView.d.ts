import { PureComponent } from 'react';
export interface PluginProps {
    value: string;
    onChange: any;
}
export interface ClassNameViewState {
    dataSource: Array<{
        value: string;
        label: string;
    }>;
    selectValue: string[];
}
export default class ClassNameView extends PureComponent<PluginProps, ClassNameViewState> {
    static display: string;
    static propTypes: {
        onChange: any;
        value: any;
    };
    static defaultProps: {
        onChange: () => void;
        value: string;
    };
    getClassNameList: () => string[];
    handleChange: (value: string[]) => void;
    componentWillMount(): void;
    render(): JSX.Element;
}
