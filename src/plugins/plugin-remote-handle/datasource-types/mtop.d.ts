export declare const DataSourceTypeMtop: {
    type: string;
    schema: {
        type: string;
        properties: {
            options: {
                type: string;
                properties: {
                    uri: {
                        title: string;
                    };
                    v: {
                        title: string;
                        type: string;
                    };
                    appKey: {
                        title: string;
                        type: string;
                    };
                    dataType: {
                        title: string;
                        type: string;
                        enum: string[];
                    };
                };
            };
        };
    };
};
