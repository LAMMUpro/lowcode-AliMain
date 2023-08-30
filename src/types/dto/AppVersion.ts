
import { ApiProperty } from "@nestjs/swagger";
import { AppVersion, Prisma} from "@prisma/client";
import { model2ApiPropertyInit } from "src/utils";

/** 文件名=模块名, 需和Prisma model保持一致 */
const modelName = __filename.match(/([^\/\\]+?)(?:.[^.\/]*)?$/)?.[1];
/** 解析后的模型(JSON格式) */
const model = Prisma.dmmf.datamodel.models.find(item=>item.name==modelName);
/** 模型转swagger @ApiProperty 函数 */
const model2ApiProperty = model2ApiPropertyInit(model);

/** 应用版本 */
export type AppVersionDto = AppVersion;

/** 新增应用版本 */
export class AppVersionDtoCreate implements Omit<AppVersion, 'id'|'version'|'isAuditing'|'isPass'|'auditContent'|'isDeleted'> {
    @ApiProperty(model2ApiProperty('applicationId', {action: 'create'}))
    applicationId!: AppVersion['applicationId'];
      
    @ApiProperty(model2ApiProperty('version', {action: 'create'}))
    version?: AppVersion['version'];
      
    @ApiProperty(model2ApiProperty('isAuditing', {action: 'create'}))
    isAuditing?: AppVersion['isAuditing'];
      
    @ApiProperty(model2ApiProperty('isPass', {action: 'create'}))
    isPass?: AppVersion['isPass'];
      
    @ApiProperty(model2ApiProperty('auditContent', {action: 'create'}))
    auditContent?: AppVersion['auditContent'];
      
    @ApiProperty(model2ApiProperty('isDeleted', {action: 'create'}))
    isDeleted?: AppVersion['isDeleted'];
}

/** 删除应用版本 */
export class AppVersionDtoDelete implements Pick<AppVersion, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: AppVersion['id'];
}

/** 查单个应用版本 */
export class AppVersionDtoFindUnique implements Pick<AppVersion, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: AppVersion['id'];
}

/** 查全部应用版本 */
export class AppVersionDtoFindAll {
  
}

/** 查分页应用版本 */
export class AppVersionDtoFindBatch implements PageInfo {
  @ApiProperty({default: 10,description: '每页数据',type: Number,required: true})
  pageSize!: number;

  @ApiProperty({default: 1,description: '当前页,从1开始',type: Number,required: true})
  currentPage!: number;

  @ApiProperty({default: 0,description: '总数(后端返回)',type: Number,required: false})
  totalCount?: number;
}

/** 更新应用版本 */
export class AppVersionDtoUpdate {
    @ApiProperty(model2ApiProperty('applicationId'))
    applicationId?: AppVersion['applicationId'];
      
    @ApiProperty(model2ApiProperty('version'))
    version?: AppVersion['version'];
      
    @ApiProperty(model2ApiProperty('isAuditing'))
    isAuditing?: AppVersion['isAuditing'];
      
    @ApiProperty(model2ApiProperty('isPass'))
    isPass?: AppVersion['isPass'];
      
    @ApiProperty(model2ApiProperty('auditContent'))
    auditContent?: AppVersion['auditContent'];
}
