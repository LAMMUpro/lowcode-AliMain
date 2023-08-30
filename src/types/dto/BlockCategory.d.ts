import { BlockCategory } from "@prisma/client";
export type BlockCategoryDto = BlockCategory;
export declare class BlockCategoryDtoCreate implements Omit<BlockCategory, 'id'> {
    name: BlockCategory['name'];
    styleId: BlockCategory['styleId'];
    priority: BlockCategory['priority'];
    isDeleted: BlockCategory['isDeleted'];
}
export declare class BlockCategoryDtoDelete implements Pick<BlockCategory, 'id'> {
    id: BlockCategory['id'];
}
export declare class BlockCategoryDtoFindUnique implements Pick<BlockCategory, 'id'> {
    id: BlockCategory['id'];
}
export declare class BlockCategoryDtoFindAll {
}
export declare class BlockCategoryDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class BlockCategoryDtoUpdate {
    name?: BlockCategory['name'];
    styleId?: BlockCategory['styleId'];
    priority?: BlockCategory['priority'];
}
