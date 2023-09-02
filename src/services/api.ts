import { PageNodeDto } from "src/types/dto/PageNode"
import { defaultSchema } from "./pageManage"


// const host = 'http://lowcodeengine.lammu.cn'
const host = 'http://localhost:9000'

export interface PackageType {
  
}
export interface ProjectSchemaType {
  componentsMap: Array<any>
  componentsTree: Array<any>
  version: string
}

/** 页面结构 */
export interface PageInfoType {
  path: string
  project_schema: ProjectSchemaType
  packages: Array<PackageType>
}

/** 区块结构 */
export interface BlockInfoType {
  blockName: string
  blockNameCh: string
  icon?: string
  screenshot?: string
  category?: string
  priority?: number
  keywords?: string
  schema: {
    children?: Array<any>
    componentName: string
    /** 是不是得去除？ */
    id: string
    props: Object
    title: string
  }
}

export interface PageNode extends PageNodeDto {
  children: Array<PageNode>
  path: string
}


/**
 * 保存应用信息
 */
export async function saveApplication(params: {
  name: string
  _describe: string
}) {
  const response = await fetch(`${host}/saveApplication`, {
    method: 'POST',
    body: JSON.stringify(params)
  });
  return await response.json();
}

/**
 * 删除应用信息
 */
export async function deleteApplication(params: {
  id: number
}) {
  const response = await fetch(`${host}/deleteApplication`, {
    method: 'DELETE',
    body: JSON.stringify(params)
  });
  return await response.json();
}

/**
 * 获取应用信息
 */
export async function getApplicationList() {
  const response = await fetch(`${host}/application`, {
    method: 'GET',
  });
  return await response.json();
}

/**
 * 修改应用信息
 */
export async function updateApplication(params: {
  id?: number
  name: string
  _describe: string
}) {
  const response = await fetch(`${host}/updateApplication`, {
    method: 'POST',
    body: JSON.stringify(params)
  });
  return await response.json();
}

/**
 * [获取版本数据]
 */
export async function getAppVersionList(params: {
  applicationId: number
}) {
  const response = await fetch(`${host}/app-version?applicationId=${params.applicationId}`, {
    method: 'GET',
  });
  return await response.json();
}

/**
 * [获取环境数据]
 */
export async function getAppEnvList(params: {
  appVersionId: number
}) {
  const response = await fetch(`${host}/app-env?appVersionId=${params.appVersionId}`, {
    method: 'GET',
  });
  return await response.json();
}



/**
 * [获取页面信息]
 */
export async function getPageInfo(params: {
  /** 页面路径 */
  path: string
}):Promise<{
  code: number
  data: PageInfoType
}> {
  const response = await fetch(`${host}/getPage?path=${params.path}`, {
    method: 'GET',
  });
  const res = await response.json();
  if (res.code == 1) {
    res.data.packages = JSON.parse(res.data.packages);
    res.data.project_schema = JSON.parse(res.data.project_schema);
  }
  return res;
}

/**
 * [保存页面信息]
 */
export async function savePageInfo(params: {
  /** 页面路径 */
  path: string
  project_schema: Object
  packages: Array<Object>
}) {
  const response = await fetch(`${host}/savePage`, {
    method: 'POST',
    body: JSON.stringify(params)
  });
  return await response.json();
}

/**
 * [保存区块信息]
 */
export async function saveBlockInfo(params: BlockInfoType) {
  const response = await fetch(`${host}/saveBlock`, {
    method: 'POST',
    body: JSON.stringify(params)
  });
  return await response.json();
}

/**
 * [获取区块信息]
 */
export async function getBlockInfo(params:{
  blockNameEn: string
}):Promise<{
  code: number
  data: BlockInfoType
}> {
  const response = await fetch(`${host}/getBlock?name=${params.blockNameEn}`, {
    method: 'GET',
  });
  const res = await response.json();
  if (res.code == 1) {
    res.data.packages = JSON.parse(res.data.packages);
    res.data.project_schema = JSON.parse(res.data.project_schema);
  }
  return res;
}

/**
 * [获取区块信息列表]
 */
export async function getBlockList():Promise<{
  code: number
  data: Array<BlockInfoType>
}> {
  const response = await fetch(`${host}/getBlocks`, {
    method: 'GET',
  });
  const res = await response.json();
  if (res.code == 1) {
    res.data.forEach((item:BlockInfoType) => {
      item.schema = JSON.parse(item.schema as any);
      (item as any).id = item.blockName;
    })
  }
  return res;
}

/**
 * [新增节点]
 */
export async function saveNode(params: Omit<PageNode, 'id'|'depth'|'children'> & {app_id: number}) {
  const response = await fetch(`${host}/saveNode`, {
    method: 'POST',
    body: JSON.stringify(params)
  });
  const res = await response.json();
  return res;
}

/**
 * 删除节点
 */
export async function deleteNode(params: {
  id: number
}) {
  const response = await fetch(`${host}/deleteNode?id=${params.id}`, {
    method: 'DELETE',
    body: JSON.stringify(params)
  });
  return await response.json();
}

/**
 * 删除页面
 */
export async function deletePage(params: {
  id: number
}) {
  const response = await fetch(`${host}/deletePage?id=${params.id}`, {
    method: 'DELETE',
  });
  return await response.json();
}

/**
 * [获取节点列表]
 */
export async function getNodes(params: {app_id: number}):Promise<{
  code: number
  data: Array<PageNode>
  originList: Array<PageNode>
  leafIds: Array<number>
}> {
  const response = await fetch(`${host}/getNodes?app_id=${params.app_id}`, {
    method: 'GET',
  });
  const res = await response.json();
  return res;
}

/**
 * [获取节点页面数据]
 */
export async function getPage(params: {id: number}):Promise<{
  code: number
  data: {
    project_schema: any
    packages: Array<any>
  }
}> {
  const response = await fetch(`${host}/getPage?id=${params.id}`, {
    method: 'GET',
  });
  const res = await response.json();
  if (res.code == 1) {
    res.data.packages = JSON.parse(res.data.packages||'[]');
    res.data.project_schema = res.data.project_schema ? JSON.parse(res.data.project_schema) : defaultSchema;
  }
  return res;
}

/**
 * 修改node信息
 */
export async function updateNode(params: {
  id: number
  name: string
  parent_id: number|null
  _describe: string
}) {
  const response = await fetch(`${host}/updateNode`, {
    method: 'POST',
    body: JSON.stringify(params)
  });
  return await response.json();
}

/**
 * 修改node页面信息
 */
export async function updatePage(params: {
  id: number
  project_schema: any
  packages: any
}) {
  const response = await fetch(`${host}/updatePage`, {
    method: 'POST',
    body: JSON.stringify(params)
  });
  return await response.json();
}