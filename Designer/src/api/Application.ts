import { ApplicationDtoCreate, ApplicationDtoUpdate } from "src/types/dto/Application";
import { request } from "src/utils";

/**
 * 添加一个应用
 */
export async function createApplication(params: ApplicationDtoCreate) {
  return request('POST', '/application', params);
}

/**
 * 删除某个应用
 */
export async function deleteApplicationById(params: { id: number }) {
  return request('DELETE', `/application/${params.id}`, {});
}

/**
 * 查找全部应用
 */
export async function findAllApplication() {
  return request('GET', `/application`, {});
}

/**
 * 更新应用信息
 */
export async function updateApplicationById(params: { id: number } & ApplicationDtoUpdate) {
  return request('PUT', `/application/${params.id}`, params);
}

