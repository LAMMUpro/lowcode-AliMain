
import { ApiProperty } from "@nestjs/swagger";
import { PageScheme, Prisma} from "@prisma/client";
import { model2ApiPropertyInit } from "src/utils";

/** 文件名=模块名, 需和Prisma model保持一致 */
const modelName = __filename.match(/([^\/\\]+?)(?:.[^.\/]*)?$/)?.[1];
/** 解析后的模型(JSON格式) */
const model = Prisma.dmmf.datamodel.models.find(item=>item.name==modelName);
/** 模型转swagger @ApiProperty 函数 */
const model2ApiProperty = model2ApiPropertyInit(model);

/** 页面schema */
export type PageSchemeDto = PageScheme;

/** 新增页面schema */
export class PageSchemeDtoCreate implements Omit<PageScheme, 'id'|'isDeleted'> {
    @ApiProperty(model2ApiProperty('schema', {action: 'create'}))
    schema!: PageScheme['schema'];
      
    @ApiProperty(model2ApiProperty('package', {action: 'create'}))
    package!: PageScheme['package'];
      
    @ApiProperty(model2ApiProperty('nodeId', {action: 'create'}))
    nodeId!: PageScheme['nodeId'];
      
    @ApiProperty(model2ApiProperty('isDeleted', {action: 'create'}))
    isDeleted?: PageScheme['isDeleted'];
}

/** 删除页面schema */
export class PageSchemeDtoDelete implements Pick<PageScheme, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: PageScheme['id'];
}

/** 查单个页面schema */
export class PageSchemeDtoFindUnique implements Pick<PageScheme, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: PageScheme['id'];
}

/** 查全部页面schema */
export class PageSchemeDtoFindAll {
  
}

/** 查分页页面schema */
export class PageSchemeDtoFindBatch implements PageInfo {
  @ApiProperty({default: 10,description: '每页数据',type: Number,required: true})
  pageSize!: number;

  @ApiProperty({default: 1,description: '当前页,从1开始',type: Number,required: true})
  currentPage!: number;

  @ApiProperty({default: 0,description: '总数(后端返回)',type: Number,required: false})
  totalCount?: number;
}

/** 更新页面schema */
export class PageSchemeDtoUpdate {
    @ApiProperty(model2ApiProperty('schema'))
    schema?: PageScheme['schema'];
      
    @ApiProperty(model2ApiProperty('package'))
    package?: PageScheme['package'];
      
    @ApiProperty(model2ApiProperty('nodeId'))
    nodeId?: PageScheme['nodeId'];
}
