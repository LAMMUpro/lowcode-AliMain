import { PureComponent } from 'react';
export interface PluginProps {
    value: string;
    onChange: any;
}
export default class ClassNameView extends PureComponent<PluginProps> {
    static display: string;
    static propTypes: {
        onChange: any;
        value: any;
    };
    static defaultProps: {
        onChange: () => void;
        value: string;
    };
    getClassNameList: () => any[];
    handleChange: (value: any) => void;
    componentWillMount(): void;
    render(): JSX.Element;
}
