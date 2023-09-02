import { BlockStyle } from "@prisma/client";
export type BlockStyleDto = BlockStyle;
export declare class BlockStyleDtoCreate implements Omit<BlockStyle, 'id' | 'priority' | 'isDeleted'> {
    name: BlockStyle['name'];
    priority?: BlockStyle['priority'];
    isDeleted?: BlockStyle['isDeleted'];
}
export declare class BlockStyleDtoDelete implements Pick<BlockStyle, 'id'> {
    id: BlockStyle['id'];
}
export declare class BlockStyleDtoFindUnique implements Pick<BlockStyle, 'id'> {
    id: BlockStyle['id'];
}
export declare class BlockStyleDtoFindAll {
}
export declare class BlockStyleDtoFindBatch implements PageInfo {
    pageSize: number;
    currentPage: number;
    totalCount?: number;
}
export declare class BlockStyleDtoUpdate {
    name?: BlockStyle['name'];
    priority?: BlockStyle['priority'];
}
