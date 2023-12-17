import { AppEnvDtoCreate } from 'src/types/dto/AppEnv';
import { SpaceAppEnvDto } from 'src/types/dtoExt/AppEnv';
import { request } from "src/utils";

/**
 * 添加一个应用环境
 */
export async function createAppEnv(params: AppEnvDtoCreate) {
  return request('POST', '/app-env', params);
}

/**
 * 删除某个应用环境
 */
export async function deleteAppEnvById(params: { id: number }) {
  return request('DELETE', `/app-env/${params.id}`, {});
}

/**
 * 查找应用环境
 */
export async function findAllAppEnv(params: {
  applicationId?: number,
  appVersionId?: number,
}) {
  return request('GET', `/app-env`, params);
}

/**
 * 更新版本环境
 */
export async function updateAppEnv(params: SpaceAppEnvDto.updateAppEnv) {
  return request('PUT', `/app-env`, params)
}

