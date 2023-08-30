
import { ApiProperty } from "@nestjs/swagger";
import { Application, Prisma} from "@prisma/client";
import { model2ApiPropertyInit } from "src/utils";

/** 文件名=模块名, 需和Prisma model保持一致 */
const modelName = __filename.match(/([^\/\\]+?)(?:.[^.\/]*)?$/)?.[1];
/** 解析后的模型(JSON格式) */
const model = Prisma.dmmf.datamodel.models.find(item=>item.name==modelName);
/** 模型转swagger @ApiProperty 函数 */
const model2ApiProperty = model2ApiPropertyInit(model);

/** 应用 */
export type ApplicationDto = Application;

/** 新增应用 */
export class ApplicationDtoCreate implements Omit<Application, 'id'|'currentEditVersion'|'isDeleted'> {
    @ApiProperty(model2ApiProperty('name', {action: 'create'}))
    name!: Application['name'];
      
    @ApiProperty(model2ApiProperty('describe', {action: 'create'}))
    describe!: Application['describe'];
      
    @ApiProperty(model2ApiProperty('currentEditVersion', {action: 'create'}))
    currentEditVersion?: Application['currentEditVersion'];
      
    @ApiProperty(model2ApiProperty('isDeleted', {action: 'create'}))
    isDeleted?: Application['isDeleted'];
}

/** 删除应用 */
export class ApplicationDtoDelete implements Pick<Application, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: Application['id'];
}

/** 查单个应用 */
export class ApplicationDtoFindUnique implements Pick<Application, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: Application['id'];
}

/** 查全部应用 */
export class ApplicationDtoFindAll {
  
}

/** 查分页应用 */
export class ApplicationDtoFindBatch implements PageInfo {
  @ApiProperty({default: 10,description: '每页数据',type: Number,required: true})
  pageSize!: number;

  @ApiProperty({default: 1,description: '当前页,从1开始',type: Number,required: true})
  currentPage!: number;

  @ApiProperty({default: 0,description: '总数(后端返回)',type: Number,required: false})
  totalCount?: number;
}

/** 更新应用 */
export class ApplicationDtoUpdate {
    @ApiProperty(model2ApiProperty('name'))
    name?: Application['name'];
      
    @ApiProperty(model2ApiProperty('describe'))
    describe?: Application['describe'];
      
    @ApiProperty(model2ApiProperty('currentEditVersion'))
    currentEditVersion?: Application['currentEditVersion'];
}
