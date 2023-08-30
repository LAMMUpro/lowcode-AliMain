
import { ApiProperty } from "@nestjs/swagger";
import { PageNode, Prisma} from "@prisma/client";
import { model2ApiPropertyInit } from "src/utils";

/** 文件名=模块名, 需和Prisma model保持一致 */
const modelName = __filename.match(/([^\/\\]+?)(?:.[^.\/]*)?$/)?.[1];
/** 解析后的模型(JSON格式) */
const model = Prisma.dmmf.datamodel.models.find(item=>item.name==modelName);
/** 模型转swagger @ApiProperty 函数 */
const model2ApiProperty = model2ApiPropertyInit(model);

/** 节点 */
export type PageNodeDto = PageNode;

/** 新增节点 */
export class PageNodeDtoCreate implements Omit<PageNode, 'id'|'parentId'|'hasSchema'|'isDeleted'> {
    @ApiProperty(model2ApiProperty('name', {action: 'create'}))
    name!: PageNode['name'];
      
    @ApiProperty(model2ApiProperty('describe', {action: 'create'}))
    describe!: PageNode['describe'];
      
    @ApiProperty(model2ApiProperty('parentId', {action: 'create'}))
    parentId?: PageNode['parentId'];
      
    @ApiProperty(model2ApiProperty('applicationId', {action: 'create'}))
    applicationId!: PageNode['applicationId'];
      
    @ApiProperty(model2ApiProperty('version', {action: 'create'}))
    version!: PageNode['version'];
      
    @ApiProperty(model2ApiProperty('hasSchema', {action: 'create'}))
    hasSchema?: PageNode['hasSchema'];
      
    @ApiProperty(model2ApiProperty('isDeleted', {action: 'create'}))
    isDeleted?: PageNode['isDeleted'];
}

/** 删除节点 */
export class PageNodeDtoDelete implements Pick<PageNode, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: PageNode['id'];
}

/** 查单个节点 */
export class PageNodeDtoFindUnique implements Pick<PageNode, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: PageNode['id'];
}

/** 查全部节点 */
export class PageNodeDtoFindAll {
  
}

/** 查分页节点 */
export class PageNodeDtoFindBatch implements PageInfo {
  @ApiProperty({default: 10,description: '每页数据',type: Number,required: true})
  pageSize!: number;

  @ApiProperty({default: 1,description: '当前页,从1开始',type: Number,required: true})
  currentPage!: number;

  @ApiProperty({default: 0,description: '总数(后端返回)',type: Number,required: false})
  totalCount?: number;
}

/** 更新节点 */
export class PageNodeDtoUpdate {
    @ApiProperty(model2ApiProperty('name'))
    name?: PageNode['name'];
      
    @ApiProperty(model2ApiProperty('describe'))
    describe?: PageNode['describe'];
      
    @ApiProperty(model2ApiProperty('parentId'))
    parentId?: PageNode['parentId'];
      
    @ApiProperty(model2ApiProperty('applicationId'))
    applicationId?: PageNode['applicationId'];
      
    @ApiProperty(model2ApiProperty('version'))
    version?: PageNode['version'];
      
    @ApiProperty(model2ApiProperty('hasSchema'))
    hasSchema?: PageNode['hasSchema'];
}
