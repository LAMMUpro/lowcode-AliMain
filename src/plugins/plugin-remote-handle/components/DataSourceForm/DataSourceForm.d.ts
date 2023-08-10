import { PureComponent } from 'react';
import { Form as FormilyForm } from '@formily/core';
import { DataSourceFormProps } from '../../types';
/**
 * 通过是否存在 ID 来决定读写状态
 */
export declare class DataSourceForm extends PureComponent<DataSourceFormProps, {
    form: FormilyForm;
}> {
    constructor(props: any);
    createForm(): FormilyForm;
    componentDidUpdate(prevProps: DataSourceFormProps): void;
    submit: () => Promise<any>;
    deriveInitialData: (dataSource?: object) => any;
    deriveSchema: () => {
        type: string;
        properties: {
            layout: {
                type: string;
                'x-component': string;
                'x-component-props': {
                    labelCol: number;
                    wrapperCol: number;
                };
                properties: any;
            };
        };
    };
    render(): JSX.Element;
}
