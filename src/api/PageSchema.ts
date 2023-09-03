
import { request } from "src/utils";
import { PageSchemaDtoCreate, PageSchemaDtoUpdate } from 'src/types/dto/PageSchema';

/**
 * 添加一个页面schema
 */
export async function createPageSchema(params: PageSchemaDtoCreate) {
  return request('POST', '/page-schema', params);
}

/**
 * 删除某个页面schema
 */
export async function deletePageSchemaById(params: { nodeId: number }) {
  return request('DELETE', `/page-schema/${params.nodeId}`, {});
}

/**
 * 查找页面schema
 */
export async function findPageSchemaByNodeId(params: { nodeId: number }) {
  const res = await request('GET', `/page-schema/${params.nodeId}`, {});
  if (res.code == 1) {
    res.data.package = JSON.parse(res.data.package||'[]');
    res.data.schema = JSON.parse(res.data.schema||'{}');
  }
  return res;
}

/**
 * 更新页面schema信息
 */
export async function updatePageSchemaById(params: { id: number } & PageSchemaDtoUpdate) {
  return request('PUT', `/page-schema/${params.id}`, params);
}
