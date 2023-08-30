
import { ApiProperty } from "@nestjs/swagger";
import { BlockStyle, Prisma} from "@prisma/client";
import { model2ApiPropertyInit } from "src/utils";

/** 文件名=模块名, 需和Prisma model保持一致 */
const modelName = __filename.match(/([^\/\\]+?)(?:.[^.\/]*)?$/)?.[1];
/** 解析后的模型(JSON格式) */
const model = Prisma.dmmf.datamodel.models.find(item=>item.name==modelName);
/** 模型转swagger @ApiProperty 函数 */
const model2ApiProperty = model2ApiPropertyInit(model);

/** 区块风格 */
export type BlockStyleDto = BlockStyle;

/** 新增区块风格 */
export class BlockStyleDtoCreate implements Omit<BlockStyle, 'id'|'priority'|'isDeleted'> {
    @ApiProperty(model2ApiProperty('name', {action: 'create'}))
    name!: BlockStyle['name'];
      
    @ApiProperty(model2ApiProperty('priority', {action: 'create'}))
    priority?: BlockStyle['priority'];
      
    @ApiProperty(model2ApiProperty('isDeleted', {action: 'create'}))
    isDeleted?: BlockStyle['isDeleted'];
}

/** 删除区块风格 */
export class BlockStyleDtoDelete implements Pick<BlockStyle, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: BlockStyle['id'];
}

/** 查单个区块风格 */
export class BlockStyleDtoFindUnique implements Pick<BlockStyle, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: BlockStyle['id'];
}

/** 查全部区块风格 */
export class BlockStyleDtoFindAll {
  
}

/** 查分页区块风格 */
export class BlockStyleDtoFindBatch implements PageInfo {
  @ApiProperty({default: 10,description: '每页数据',type: Number,required: true})
  pageSize!: number;

  @ApiProperty({default: 1,description: '当前页,从1开始',type: Number,required: true})
  currentPage!: number;

  @ApiProperty({default: 0,description: '总数(后端返回)',type: Number,required: false})
  totalCount?: number;
}

/** 更新区块风格 */
export class BlockStyleDtoUpdate {
    @ApiProperty(model2ApiProperty('name'))
    name?: BlockStyle['name'];
      
    @ApiProperty(model2ApiProperty('priority'))
    priority?: BlockStyle['priority'];
}
