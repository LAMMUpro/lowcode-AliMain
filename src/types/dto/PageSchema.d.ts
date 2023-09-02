import { PageSchema } from "@prisma/client";
export type PageSchemaDto = PageSchema;
export declare class PageSchemaDtoCreate implements Omit<PageSchema, 'id' | 'isDeleted'> {
    schema: PageSchema['schema'];
    package: PageSchema['package'];
    nodeId: PageSchema['nodeId'];
    isDeleted?: PageSchema['isDeleted'];
}
export declare class PageSchemaDtoDelete implements Pick<PageSchema, 'id'> {
    id: PageSchema['id'];
}
export declare class PageSchemaDtoFindUnique implements Pick<PageSchema, 'id'> {
    id: PageSchema['id'];
}
export declare class PageSchemaDtoFindAll {
}
export declare class PageSchemaDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class PageSchemaDtoUpdate {
    schema?: PageSchema['schema'];
    package?: PageSchema['package'];
    nodeId?: PageSchema['nodeId'];
}
