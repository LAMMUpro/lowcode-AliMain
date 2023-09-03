
import { request } from "src/utils";
import { BlockDtoCreate, BlockDtoUpdate } from 'src/types/dto/Block';

/**
 * 添加一个区块
 */
export async function createBlock(params: BlockDtoCreate) {
  return request('POST', '/block', params);
}

/**
 * 删除某个区块
 */
export async function deleteBlockById(params: { id: number }) {
  return request('DELETE', `/block/${params.id}`, {});
}

/**
 * 查找全部区块
 */
export async function findAllBlock(params: { styleId: number }) {
  return request('GET', `/block`, params);
}

/**
 * 更新区块信息
 */
export async function updateBlockById(params: { id: number } & BlockDtoUpdate) {
  return request('PUT', `/block/${params.id}`, params);
}
