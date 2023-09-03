interface requestParams {}
interface requestData {}

const host = 'http://localhost:9000'

export async function request(
  method: requestMethods = "GET",
  url: string,
  data: BaseObj<any> = {},
  options: {
    mode?: "no-cors" | "cors" | "same-origin"
    headers?: any
  } = {
    headers: {
      'Content-Type':'application/json'
    }
  }
) {
  const res = await fetch(method!=="GET"?`${host}${url}`:`${host}${url}${Object.keys(data).length?'?':''}${json2query(data)}`, {
    ...options,
    method,
    [method === "GET" ? "" : "body"]: JSON.stringify(data),
  });
  const response = await res.json();
  return response;
}

/**
 * json转url查询参数
 */
export function json2query(json: BaseObj) {
  if (!json) return ''
  return cleanArray(Object.keys(json).map(key => {
    if (json[key] === undefined)
      return ''
    return encodeURIComponent(key) +
    '=' + encodeURIComponent(json[key])
  })).join('&')
}
function cleanArray(actual: string[]) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}