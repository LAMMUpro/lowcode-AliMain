import { AppVersionDtoCreate, AppVersionDtoFindAll } from "src/types/dto/AppVersion";
import { request } from "src/utils";

/**
 * 添加一个应用版本
 */
export async function createAppVersion(params: AppVersionDtoCreate) {
  return request('POST', '/app-version', params);
}

/**
 * 删除某个应用版本
 */
export async function deleteAppVersionById(params: { id: number }) {
  return request('DELETE', `/app-version/${params.id}`, {});
}

/**
 * 查找全部应用版本
 */
export async function findAllAppVersionByAppId(params: { applicationId: number}) {
  return request('GET', `/app-version`, params);
}
