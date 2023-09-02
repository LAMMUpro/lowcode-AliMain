import { PageNode } from "@prisma/client";
export type PageNodeDto = PageNode;
export declare class PageNodeDtoCreate implements Omit<PageNode, 'id' | 'parentId' | 'hasSchema' | 'isDeleted'> {
    name: PageNode['name'];
    describe: PageNode['describe'];
    parentId?: PageNode['parentId'];
    applicationId: PageNode['applicationId'];
    version: PageNode['version'];
    hasSchema?: PageNode['hasSchema'];
    isDeleted?: PageNode['isDeleted'];
}
export declare class PageNodeDtoDelete implements Pick<PageNode, 'id'> {
    id: PageNode['id'];
}
export declare class PageNodeDtoFindUnique implements Pick<PageNode, 'id'> {
    id: PageNode['id'];
}
export declare class PageNodeDtoFindAll {
}
export declare class PageNodeDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class PageNodeDtoUpdate {
    name?: PageNode['name'];
    describe?: PageNode['describe'];
    parentId?: PageNode['parentId'];
    applicationId?: PageNode['applicationId'];
    version?: PageNode['version'];
    hasSchema?: PageNode['hasSchema'];
}
