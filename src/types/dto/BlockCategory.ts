
import { ApiProperty } from "@nestjs/swagger";
import { BlockCategory, Prisma} from "@prisma/client";
import { model2ApiPropertyInit } from "src/utils";

/** 文件名=模块名, 需和Prisma model保持一致 */
const modelName = __filename.match(/([^\/\\]+?)(?:.[^.\/]*)?$/)?.[1];
/** 解析后的模型(JSON格式) */
const model = Prisma.dmmf.datamodel.models.find(item=>item.name==modelName);
/** 模型转swagger @ApiProperty 函数 */
const model2ApiProperty = model2ApiPropertyInit(model);

/** 区块分类  */
export type BlockCategoryDto = BlockCategory;

/** 新增区块分类  */
export class BlockCategoryDtoCreate implements Omit<BlockCategory, 'id'|'priority'|'isDeleted'> {
    @ApiProperty(model2ApiProperty('name', {action: 'create'}))
    name!: BlockCategory['name'];
      
    @ApiProperty(model2ApiProperty('styleId', {action: 'create'}))
    styleId!: BlockCategory['styleId'];
      
    @ApiProperty(model2ApiProperty('priority', {action: 'create'}))
    priority?: BlockCategory['priority'];
      
    @ApiProperty(model2ApiProperty('isDeleted', {action: 'create'}))
    isDeleted?: BlockCategory['isDeleted'];
}

/** 删除区块分类  */
export class BlockCategoryDtoDelete implements Pick<BlockCategory, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: BlockCategory['id'];
}

/** 查单个区块分类  */
export class BlockCategoryDtoFindUnique implements Pick<BlockCategory, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: BlockCategory['id'];
}

/** 查全部区块分类  */
export class BlockCategoryDtoFindAll {
  
}

/** 查分页区块分类  */
export class BlockCategoryDtoFindBatch implements PageInfo {
  @ApiProperty({default: 10,description: '每页数据',type: Number,required: true})
  pageSize!: number;

  @ApiProperty({default: 1,description: '当前页,从1开始',type: Number,required: true})
  currentPage!: number;

  @ApiProperty({default: 0,description: '总数(后端返回)',type: Number,required: false})
  totalCount?: number;
}

/** 更新区块分类  */
export class BlockCategoryDtoUpdate {
    @ApiProperty(model2ApiProperty('name'))
    name?: BlockCategory['name'];
      
    @ApiProperty(model2ApiProperty('styleId'))
    styleId?: BlockCategory['styleId'];
      
    @ApiProperty(model2ApiProperty('priority'))
    priority?: BlockCategory['priority'];
}
