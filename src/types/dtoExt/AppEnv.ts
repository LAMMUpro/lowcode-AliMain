import { AppEnvDto } from '../dto/AppEnv';

export namespace SpaceAppEnvDto {
  export type list = Array<AppEnvDto>


  export interface updateAppEnv extends Pick<AppEnvDto, 'appVersionId'|'version'> {
    /** 环境id列表 */
    envIdList: Array<AppEnvDto['id']>
  }
}