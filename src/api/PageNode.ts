
import { json2query, request } from "src/utils";
import { PageNodeDtoCreate, PageNodeDtoUpdate } from 'src/types/dto/PageNode';

/**
 * 添加一个节点
 */
export async function createPageNode(params: PageNodeDtoCreate) {
  return request('POST', '/page-node', params);
}

/**
 * 删除某个节点
 */
export async function deletePageNodeById(params: { id: number }) {
  return request('DELETE', `/page-node/${params.id}`, {});
}

/**
 * 查找版本节点
 */
export async function findManyPageNode(params: {
  applicationId: number
  version: string
}) {
  return request('GET', `/page-node`, params);
}

/**
 * 更新节点信息
 */
export async function updatePageNodeById(params: { id: number } & PageNodeDtoUpdate) {
  return request('PUT', `/page-node/${params.id}`, params);
}
