import { DataSourcePaneImportPlugin, DataSourceType } from './types';
export interface Options {
    importPlugins?: DataSourcePaneImportPlugin[];
    dataSourceTypes: DataSourceType[];
    exportPlugins?: DataSourcePaneImportPlugin[];
}
declare const plugin: {
    (ctx: any, options: Options): {
        name: string;
        width: number;
        dep: any[];
        exports(): {};
        init(): void;
    };
    pluginName: string;
    meta: {
        preferenceDeclaration: {
            title: string;
            properties: {
                key: string;
                type: string;
                description: string;
            }[];
        };
    };
};
export default plugin;
