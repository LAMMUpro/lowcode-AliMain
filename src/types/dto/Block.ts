
import { ApiProperty } from "@nestjs/swagger";
import { Block, Prisma} from "@prisma/client";
import { model2ApiPropertyInit } from "src/utils";

/** 文件名=模块名, 需和Prisma model保持一致 */
const modelName = __filename.match(/([^\/\\]+?)(?:.[^.\/]*)?$/)?.[1];
/** 解析后的模型(JSON格式) */
const model = Prisma.dmmf.datamodel.models.find(item=>item.name==modelName);
/** 模型转swagger @ApiProperty 函数 */
const model2ApiProperty = model2ApiPropertyInit(model);

/** 区块 */
export type BlockDto = Block;

/** 新增区块 */
export class BlockDtoCreate implements Omit<Block, 'id'|'keywords'|'priority'|'isDeleted'> {
    @ApiProperty(model2ApiProperty('styleId', {action: 'create'}))
    styleId!: Block['styleId'];
      
    @ApiProperty(model2ApiProperty('name', {action: 'create'}))
    name!: Block['name'];
      
    @ApiProperty(model2ApiProperty('nameCh', {action: 'create'}))
    nameCh!: Block['nameCh'];
      
    @ApiProperty(model2ApiProperty('schema', {action: 'create'}))
    schema!: Block['schema'];
      
    @ApiProperty(model2ApiProperty('screenshot', {action: 'create'}))
    screenshot!: Block['screenshot'];
      
    @ApiProperty(model2ApiProperty('categoryId', {action: 'create'}))
    categoryId!: Block['categoryId'];
      
    @ApiProperty(model2ApiProperty('categoryName', {action: 'create'}))
    categoryName!: Block['categoryName'];
      
    @ApiProperty(model2ApiProperty('keywords', {action: 'create'}))
    keywords?: Block['keywords'];
      
    @ApiProperty(model2ApiProperty('priority', {action: 'create'}))
    priority?: Block['priority'];
      
    @ApiProperty(model2ApiProperty('isDeleted', {action: 'create'}))
    isDeleted?: Block['isDeleted'];
}

/** 删除区块 */
export class BlockDtoDelete implements Pick<Block, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: Block['id'];
}

/** 查单个区块 */
export class BlockDtoFindUnique implements Pick<Block, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: Block['id'];
}

/** 查全部区块 */
export class BlockDtoFindAll {
  
}

/** 查分页区块 */
export class BlockDtoFindBatch implements PageInfo {
  @ApiProperty({default: 10,description: '每页数据',type: Number,required: true})
  pageSize!: number;

  @ApiProperty({default: 1,description: '当前页,从1开始',type: Number,required: true})
  currentPage!: number;

  @ApiProperty({default: 0,description: '总数(后端返回)',type: Number,required: false})
  totalCount?: number;
}

/** 更新区块 */
export class BlockDtoUpdate {
    @ApiProperty(model2ApiProperty('styleId'))
    styleId?: Block['styleId'];
      
    @ApiProperty(model2ApiProperty('name'))
    name?: Block['name'];
      
    @ApiProperty(model2ApiProperty('nameCh'))
    nameCh?: Block['nameCh'];
      
    @ApiProperty(model2ApiProperty('schema'))
    schema?: Block['schema'];
      
    @ApiProperty(model2ApiProperty('screenshot'))
    screenshot?: Block['screenshot'];
      
    @ApiProperty(model2ApiProperty('categoryId'))
    categoryId?: Block['categoryId'];
      
    @ApiProperty(model2ApiProperty('categoryName'))
    categoryName?: Block['categoryName'];
      
    @ApiProperty(model2ApiProperty('keywords'))
    keywords?: Block['keywords'];
      
    @ApiProperty(model2ApiProperty('priority'))
    priority?: Block['priority'];
}
