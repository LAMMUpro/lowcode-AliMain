import { Block } from "@prisma/client";
export type BlockDto = Block;
export declare class BlockDtoCreate implements Omit<Block, 'id'> {
    styleId: Block['styleId'];
    name: Block['name'];
    nameCh: Block['nameCh'];
    schema: Block['schema'];
    screenshot: Block['screenshot'];
    categoryId: Block['categoryId'];
    categoryName: Block['categoryName'];
    keywords: Block['keywords'];
    priority: Block['priority'];
    isDeleted: Block['isDeleted'];
}
export declare class BlockDtoDelete implements Pick<Block, 'id'> {
    id: Block['id'];
}
export declare class BlockDtoFindUnique implements Pick<Block, 'id'> {
    id: Block['id'];
}
export declare class BlockDtoFindAll {
}
export declare class BlockDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class BlockDtoUpdate {
    styleId?: Block['styleId'];
    name?: Block['name'];
    nameCh?: Block['nameCh'];
    schema?: Block['schema'];
    screenshot?: Block['screenshot'];
    categoryId?: Block['categoryId'];
    categoryName?: Block['categoryName'];
    keywords?: Block['keywords'];
    priority?: Block['priority'];
}
