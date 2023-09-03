
import { request } from "src/utils";
import { BlockStyleDtoCreate, BlockStyleDtoUpdate } from 'src/types/dto/BlockStyle';

/**
 * 添加一个区块风格
 */
export async function createBlockStyle(params: BlockStyleDtoCreate) {
  return request('POST', '/block-style', params);
}

/**
 * 删除某个区块风格
 */
export async function deleteBlockStyleById(params: { id: number }) {
  return request('DELETE', `/block-style/${params.id}`, {});
}

/**
 * 查找全部区块风格
 */
export async function findAllBlockStyle() {
  return request('GET', `/block-style`, {});
}

/**
 * 更新区块风格信息
 */
export async function updateBlockStyleById(params: { id: number } & BlockStyleDtoUpdate) {
  return request('PUT', `/block-style/${params.id}`, params);
}
