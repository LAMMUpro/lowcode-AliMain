/** 基于fetch封装的 */
import 'whatwg-fetch';

/** 
 * 该文件导出3个函数, get | post | request
 */

/** 
 * 是否字符串
 */
function isString(str: any): boolean {
  return {}.toString.call(str) === '[object String]';
}

/** 
 * 循环序列化
 */
function forEach(targetObj: any, fn: any, context?: any) {
  if (!targetObj || Array.isArray(targetObj) || isString(targetObj) || typeof targetObj !== 'object') {
    return;
  }
  Object.keys(targetObj).forEach((key) => fn.call(context, targetObj[key], key));
}

/** 
 * 序列化参数
 */
function serializeParams(obj: any) {
  let result: any = [];
  forEach(obj, (val: any, key: any) => {
    if (val === null || val === undefined || val === '') {
      return;
    }
    if (typeof val === 'object') {
      result.push(`${key}=${encodeURIComponent(JSON.stringify(val))}`);
    } else {
      result.push(`${key}=${encodeURIComponent(val)}`);
    }
  });
  return result.join('&');
}

/**
 * 路径拼接
 */
function buildUrl(dataAPI: any, params: any) {
  const paramStr = serializeParams(params);
  if (paramStr) {
    return dataAPI.indexOf('?') > 0 ? `${dataAPI}&${paramStr}` : `${dataAPI}?${paramStr}`;
  }
  return dataAPI;
}

/**
 * get请求封装
 */
 export function get(dataAPI: any, params = {}, headers = {}, otherProps = {}, loadCallback: (response: any) => any) {
  const processedHeaders = {
    Accept: 'application/json',
    ...headers,
  };
  const url = buildUrl(dataAPI, params);
  return request(url, 'GET', null, processedHeaders, otherProps, loadCallback);
}

/**
 * post请求封装
 */
export function post(dataAPI: any, params = {}, headers: any = {}, otherProps = {}, loadCallback: (response: any) => any) {
  const processedHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    ...headers,
  };
  const body = processedHeaders['Content-Type'].indexOf('application/json') > -1 || Array.isArray(params)
  ? JSON.stringify(params)
  : serializeParams(params);

  return request(
    dataAPI,
    'POST',
    body,
    processedHeaders,
    otherProps,
    loadCallback
  );
}

/**
 * 增删改API 请求
 */
export function request(dataAPI: any, method = 'GET', data: any, headers = {}, otherProps: any = {}, loadCallback: (response: any) => any) {
  let processedHeaders = headers || {};
  let payload = data;
  if (method === 'PUT' || method === 'DELETE') {
    processedHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...processedHeaders,
    };
    payload = JSON.stringify(payload || {});
  }
  return new Promise((resolve, reject) => {
    if (otherProps.timeout) {
      setTimeout(() => {
        reject(new Error('timeout'));
      }, otherProps.timeout);
    }
    fetch(dataAPI, {
      method,
      credentials: 'include',
      headers: processedHeaders,
      body: payload,
      ...otherProps,
    })
      .then((response) => {
        /** load(params, loadCallback), 如果回调返回false, 则中断, 抛出异常err = {breack: true} */
        if (loadCallback(response) === false) return { __success: false, breack: true };
        switch (response.status) {
          case 200:
          case 201:
          case 202:
            return response.json();
          case 204:
            if (method === 'DELETE') {
              return {
                success: true,
              };
            } else {
              return {
                __success: false,
                code: response.status,
              };
            }
          case 400:
          case 401:
          case 403:
          case 404:
          case 406:
          case 410:
          case 422:
          case 500:
            return response
              .json()
              .then((res) => {
                return {
                  __success: false,
                  code: response.status,
                  data: res,
                };
              })
              .catch(() => {
                return {
                  __success: false,
                  code: response.status,
                };
              });
          default:
        }
        return null;
      })
      .then((json) => {
        if (!json) {
          reject(json);
          return;
        }
        if (json.__success !== false) {
          resolve(json);
        } else {
          // eslint-disable-next-line no-param-reassign
          delete json.__success;
          reject(json);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}