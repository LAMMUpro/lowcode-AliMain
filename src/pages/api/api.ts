

const host = 'http://lowcodeengine.lammu.cn'

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
  projectSchema: ProjectSchemaType
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
    res.data.projectSchema = JSON.parse(res.data.projectSchema);
  }
  return res;
}

/**
 * [保存页面信息]
 */
export async function savePageInfo(params: {
  /** 页面路径 */
  path: string
  projectSchema: Object
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
    res.data.projectSchema = JSON.parse(res.data.projectSchema);
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
      item.id = item.blockName;
    })
  }
  return res;
}
