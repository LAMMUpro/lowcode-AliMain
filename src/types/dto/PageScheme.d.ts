import { PageScheme } from "@prisma/client";
export type PageSchemeDto = PageScheme;
export declare class PageSchemeDtoCreate implements Omit<PageScheme, 'id'> {
    schema: PageScheme['schema'];
    package: PageScheme['package'];
    nodeId: PageScheme['nodeId'];
    isDeleted: PageScheme['isDeleted'];
}
export declare class PageSchemeDtoDelete implements Pick<PageScheme, 'id'> {
    id: PageScheme['id'];
}
export declare class PageSchemeDtoFindUnique implements Pick<PageScheme, 'id'> {
    id: PageScheme['id'];
}
export declare class PageSchemeDtoFindAll {
}
export declare class PageSchemeDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class PageSchemeDtoUpdate {
    schema?: PageScheme['schema'];
    package?: PageScheme['package'];
    nodeId?: PageScheme['nodeId'];
}
