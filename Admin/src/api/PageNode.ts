
import { request } from "@/utils";

/**
 * 查找版本节点
 */
export async function findManyPageNode(params: {
  applicationId: number
  version: string
}) {
  return request('GET', `/page-node`, params);
}
