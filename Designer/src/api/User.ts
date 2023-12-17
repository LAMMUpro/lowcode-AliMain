
import { request } from "src/utils";
import { UserDtoCreate, UserDtoUpdate } from 'src/types/dto/User';

/**
 * 添加一个用户
 */
export async function createUser(params: UserDtoCreate) {
  return request('POST', '/user', params);
}

/**
 * 删除某个用户
 */
export async function deleteUserById(params: { id: number }) {
  return request('DELETE', `/user/${params.id}`, {});
}

/**
 * 查找全部用户
 */
export async function findAllUser() {
  return request('GET', `/user`, {});
}

/**
 * 更新用户信息
 */
export async function updateUserById(params: { id: number } & UserDtoUpdate) {
  return request('PUT', `/user/${params.id}`, params);
}
