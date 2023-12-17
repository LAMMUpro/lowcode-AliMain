
import { request } from "src/utils";
import { BlockCategoryDtoCreate, BlockCategoryDtoUpdate } from 'src/types/dto/BlockCategory';

/**
 * 添加一个区块分类 
 */
export async function createBlockCategory(params: BlockCategoryDtoCreate) {
  return request('POST', '/block-category', params);
}

/**
 * 删除某个区块分类 
 */
export async function deleteBlockCategoryById(params: { id: number }) {
  return request('DELETE', `/block-category/${params.id}`, {});
}

/**
 * 查找全部区块分类 
 */
export async function findAllBlockCategory(params: {styleId: number}) {
  return request('GET', `/block-category`, params);
}

/**
 * 更新区块分类 信息
 */
export async function updateBlockCategoryById(params: { id: number } & BlockCategoryDtoUpdate) {
  return request('PUT', `/block-category/${params.id}`, params);
}
