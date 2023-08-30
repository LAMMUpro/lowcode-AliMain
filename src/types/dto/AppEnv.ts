
import { ApiProperty } from "@nestjs/swagger";
import { AppEnv, Prisma} from "@prisma/client";
import { model2ApiPropertyInit } from "src/utils";

/** 文件名=模块名, 需和Prisma model保持一致 */
const modelName = __filename.match(/([^\/\\]+?)(?:.[^.\/]*)?$/)?.[1];
/** 解析后的模型(JSON格式) */
const model = Prisma.dmmf.datamodel.models.find(item=>item.name==modelName);
/** 模型转swagger @ApiProperty 函数 */
const model2ApiProperty = model2ApiPropertyInit(model);

/** 应用环境 */
export type AppEnvDto = AppEnv;

/** 新增应用环境 */
export class AppEnvDtoCreate implements Omit<AppEnv, 'id'|'canDelete'|'appVersionId'|'version'|'isDeleted'> {
    @ApiProperty(model2ApiProperty('applicationId', {action: 'create'}))
    applicationId!: AppEnv['applicationId'];
      
    @ApiProperty(model2ApiProperty('env', {action: 'create'}))
    env!: AppEnv['env'];
      
    @ApiProperty(model2ApiProperty('envCh', {action: 'create'}))
    envCh!: AppEnv['envCh'];
      
    @ApiProperty(model2ApiProperty('canDelete', {action: 'create'}))
    canDelete?: AppEnv['canDelete'];
      
    @ApiProperty(model2ApiProperty('appVersionId', {action: 'create'}))
    appVersionId?: AppEnv['appVersionId'];
      
    @ApiProperty(model2ApiProperty('version', {action: 'create'}))
    version?: AppEnv['version'];
      
    @ApiProperty(model2ApiProperty('isDeleted', {action: 'create'}))
    isDeleted?: AppEnv['isDeleted'];
}

/** 删除应用环境 */
export class AppEnvDtoDelete implements Pick<AppEnv, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: AppEnv['id'];
}

/** 查单个应用环境 */
export class AppEnvDtoFindUnique implements Pick<AppEnv, 'id'> {
    @ApiProperty(model2ApiProperty('id'))
    id!: AppEnv['id'];
}

/** 查全部应用环境 */
export class AppEnvDtoFindAll {
  
}

/** 查分页应用环境 */
export class AppEnvDtoFindBatch implements PageInfo {
  @ApiProperty({default: 10,description: '每页数据',type: Number,required: true})
  pageSize!: number;

  @ApiProperty({default: 1,description: '当前页,从1开始',type: Number,required: true})
  currentPage!: number;

  @ApiProperty({default: 0,description: '总数(后端返回)',type: Number,required: false})
  totalCount?: number;
}

/** 更新应用环境 */
export class AppEnvDtoUpdate {
    @ApiProperty(model2ApiProperty('applicationId'))
    applicationId?: AppEnv['applicationId'];
      
    @ApiProperty(model2ApiProperty('env'))
    env?: AppEnv['env'];
      
    @ApiProperty(model2ApiProperty('envCh'))
    envCh?: AppEnv['envCh'];
      
    @ApiProperty(model2ApiProperty('canDelete'))
    canDelete?: AppEnv['canDelete'];
      
    @ApiProperty(model2ApiProperty('appVersionId'))
    appVersionId?: AppEnv['appVersionId'];
      
    @ApiProperty(model2ApiProperty('version'))
    version?: AppEnv['version'];
}
