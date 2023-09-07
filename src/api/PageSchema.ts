
import { request } from "@/utils";

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