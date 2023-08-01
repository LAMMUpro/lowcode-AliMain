

const host = 'http://lowcodeengine.lammu.cn'

interface PackageType {

}
interface ProjectSchemaType {
  componentsMap: Array<any>
  componentsTree: Array<any>
  version: string
}

export async function getPageInfo(params: {
  /** 页面路径 */
  path: string
}):Promise<{
  code: number
  data: {
    path: string
    projectSchema: ProjectSchemaType
    packages: Array<PackageType>
  }
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