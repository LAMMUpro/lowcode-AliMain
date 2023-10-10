
interface BaseObj<T = string|number|boolean> {
  [key: string]: T
}

interface PageInfo {
  /** 每页数据 */
  pageSize: number
  /** 当前页，从1开始 */
  currentPage: number
  /** 后端返回总数字段 */
  totalCount?: number
}

/** 请求方法 */
type requestMethods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | "OPTIONS";

type ApiResponse = {
  code: 1 | -1
  status: number
  msg: string
  data: BaseObj<any>
}

/** 两个类型是否相等 */
type IsEqual<T, U> = 
  (<T1>() => T1 extends T ? 1 : 2) extends
  (<T2>() => T2 extends U ? 1 : 2)
    ? true
    : false