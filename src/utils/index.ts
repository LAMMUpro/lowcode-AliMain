interface requestParams {}
interface requestData {}

let _env: 'test'|'dev'|'master'|'localhost' = 'localhost';

if (location.hostname.includes('test.lammu.cn')) {
  _env = 'test';
} else if (location.hostname.includes('dev.lammu.cn')) {
  _env = 'dev';
} else if (location.hostname.includes('lammu.cn')) {
  _env = 'master';
}

export const env = _env;

export const host = {
  'localhost': 'http://localhost:9000',
  'test': 'https://lowcodebase.test.nodeservice.cn',
  'dev': 'https://lowcodebase.dev.nodeservice.cn',
  'master': 'https://lowcodebase.nodeservice.cn',
}[env];

export async function request(
  method: requestMethods = "GET",
  url: string,
  data: BaseObj<any> = {},
  options: {
    mode?: "no-cors" | "cors" | "same-origin"
    headers?: any
  } = {
    headers: {
      /** 将Content-Type设置成application/json会受到同源政策的限制。他会先发送一个option请求嗅探服务器是否具有应答的能力，然后才会发送真正的请求。 */
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

export function parseLocalInt(value: string|null):number {
  if (value) return +value;
  return '' as unknown as number;
}

/**
 * 防抖函数
 * @param fn 执行函数
 * @param delay 延时（ms）
 * @returns 防抖后的函数
 */
export function debounce(fn: Function, delay: number = 500) {
  let timer: number | undefined;
  return function(this:any, ...args: Array<any>) {
    const context = this;
    window.clearTimeout(timer);
    timer = window.setTimeout(function() {
      fn.apply(context, args);
      timer = undefined;
    }, delay);
  };
}

/**
 * 节流函数
 * @param fn 执行函数
 * @param delay 延时（ms）
 */
export function throttle(fn: Function, delay: number = 500) {
  let currentTime = Date.now();
  return function (this:any, ...args: Array<any>) {
    const context = this;
    const nowTime = Date.now();
    console.log(nowTime);
    if (nowTime - currentTime > delay) {
      fn.apply(context, args);
      currentTime = Date.now();
    }
  }
}