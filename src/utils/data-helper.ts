import { isI18nData, isJSExpression } from '@alilc/lowcode-utils';
import { isJSFunction } from '@alilc/lowcode-utils';
import { isEmpty } from 'lodash';
import { jsonp, _request, get, post } from './request';

const DS_STATUS = {
  INIT: 'init',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
};

const EXPRESSION_TYPE = {
  JSEXPRESSION: 'JSExpression',
  JSFUNCTION: 'JSFunction',
  JSSLOT: 'JSSlot',
  JSBLOCK: 'JSBlock',
  I18N: 'i18n',
};

// TODO
const host = {}

export function generateRemoteHandleMap(ajaxList: Array<{id: string}>) {
  const res: any = {};
  ajaxList.forEach((item) => {
    res[item.id] = {
      status: DS_STATUS.INIT,
      load: (...args: any) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return getDataSource(ajaxList, item.id, ...args);
      },
    };
  });
  return res;
}

function parser (config: any) {
  return parseData(config);
}

interface IParseOptions {
  thisRequiredInJSE?: boolean;
  logScope?: string;
}
function parseData(schema: unknown, self?: any, options: IParseOptions = {}): any {
  if (isJSExpression(schema)) {
    return parseExpression({
      str: schema,
      self,
      thisRequired: options.thisRequiredInJSE,
      logScope: options.logScope,
    });
  } else if (isI18nData(schema)) {
    return parseI18n(schema, self);
  } else if (typeof schema === 'string') {
    return schema.trim();
  } else if (Array.isArray(schema)) {
    return schema.map((item) => parseData(item, self, options));
  } else if (typeof schema === 'function') {
    return schema.bind(self);
  } else if (typeof schema === 'object') {
    // 对于undefined及null直接返回
    if (!schema) {
      return schema;
    }
    const res: any = {};
    forEach(schema, (val: any, key: string) => {
      if (key.startsWith('__')) {
        return;
      }
      res[key] = parseData(val, self, options);
    });
    return res;
  }
  return schema;
}

function forEach(targetObj: any, fn: any, context?: any) {
  if (!targetObj || Array.isArray(targetObj) || isString(targetObj) || typeof targetObj !== 'object') {
    return;
  }

  Object.keys(targetObj).forEach((key) => fn.call(context, targetObj[key], key));
}

function isString(str: any): boolean {
  return {}.toString.call(str) === '[object String]';
}

/**
 * 对象类型JSExpression，支持省略this
 * @param str expression in string form
 * @param self scope object
 * @returns funtion
 */

function parseExpression(options: {
  str: any; self: any; thisRequired?: boolean; logScope?: string;
}): any;
function parseExpression(str: any, self: any, thisRequired?: boolean): any;
function parseExpression(a: any, b?: any, c = false) {
  let str;
  let self;
  let thisRequired;
  let logScope;
  if (typeof a === 'object' && b === undefined) {
    str = a.str;
    self = a.self;
    thisRequired = a.thisRequired;
    logScope = a.logScope;
  } else {
    str = a;
    self = b;
    thisRequired = c;
  }
  try {
    const contextArr = ['"use strict";', 'var __self = arguments[0];'];
    contextArr.push('return ');
    let tarStr: string;

    tarStr = (str.value || '').trim();

    // NOTE: use __self replace 'this' in the original function str
    // may be wrong in extreme case which contains '__self' already
    tarStr = tarStr.replace(/this(\W|$)/g, (_a: any, b: any) => `__self${b}`);
    tarStr = contextArr.join('\n') + tarStr;

    // 默认调用顶层窗口的parseObj, 保障new Function的window对象是顶层的window对象
    if (inSameDomain() && (window.parent as any).__newFunc) {
      return (window.parent as any).__newFunc(tarStr)(self);
    }
    const code = `with(${thisRequired ? '{}' : '$scope || {}'}) { ${tarStr} }`;
    return new Function('$scope', code)(self);
  } catch (err) {
    console.error(`${logScope || ''} parseExpression.error`, err, str, self?.__self ?? self);
    return undefined;
  }
}
function inSameDomain() {
  try {
    return window.parent !== window && window.parent.location.host === window.location.host;
  } catch (e) {
    return false;
  }
}
function parseI18n(i18nInfo: any, self: any) {
  return parseExpression({
    type: EXPRESSION_TYPE.JSEXPRESSION,
    value: `this.i18n('${i18nInfo.key}')`,
  }, self);
}

function transformArrayToMap(arr: any[], key: string, overwrite = true) {
  if (isEmpty(arr) || !Array.isArray(arr)) {
    return {};
  }
  const res: any = {};
  arr.forEach((item) => {
    const curKey = item[key];
    if (item[key] === undefined) {
      return;
    }
    if (res[curKey] && !overwrite) {
      return;
    }
    res[curKey] = item;
  });
  return res;
}

function getDataSource(ajaxList: Array<{id: string}>, id: string, params: any, otherOptions: any, callback: any) {
  const ajaxMap = transformArrayToMap(ajaxList, 'id')
  const req = parser(ajaxMap[id]);
  const options = req.options || {};
  let callbackFn = callback;
  let otherOptionsObj = otherOptions;
  if (typeof otherOptions === 'function') {
    callbackFn = otherOptions;
    otherOptionsObj = {};
  }
  const { headers, ...otherProps } = otherOptionsObj || {};
  if (!req) {
    console.warn(`getDataSource API named ${id} not exist`);
    return;
  }

  return asyncDataHandler([
    {
      ...req,
      options: {
        ...options,
        // 支持参数为array的情况，当参数为array时，不做参数合并
        params:
          Array.isArray(options.params) || Array.isArray(params)
            ? params || options.params
            : {
              ...options.params,
              ...params,
            },
        headers: {
          ...options.headers,
          ...headers,
        },
        ...otherProps,
      },
    },
  ])
  .then((res: any) => {
    try {
      callbackFn && callbackFn(res && res[id]);
    } catch (e) {
      console.error('load请求回调函数报错', e);
    }
    return res && res[id];
  })
  .catch((err: any) => {
    try {
      callbackFn && callbackFn(null, err);
    } catch (e) {
      console.error('load请求回调函数报错', e);
    }
    return err;
  });
}

function transformStringToFunction(str: string) {
  if (typeof str !== 'string') {
    return str;
  }
  if (inSameDomain() && (window.parent as any).__newFunc) {
    return (window.parent as any).__newFunc(`"use strict"; return ${str}`)();
  } else {
    return new Function(`"use strict"; return ${str}`)();
  }
}

/**
* process data using dataHandler
*
* @param {(string | null)} id request id, will be used in error message, can be null
* @param {*} dataHandler
* @param {*} data
* @param {*} error
* @returns
* @memberof DataHelper
*/
function handleData(id: string | null, dataHandler: any, data: any, error: any) {
  let dataHandlerFun = dataHandler;
  if (isJSFunction(dataHandler)) {
    dataHandlerFun = transformStringToFunction(dataHandler.value);
  }
  if (!dataHandlerFun || typeof dataHandlerFun !== 'function') {
    return data;
  }
  try {
    return dataHandlerFun.call(host, data, error);
  } catch (e) {
    if (id) {
      console.error(`[${id}]单个请求数据处理函数运行出错`, e);
    } else {
      console.error('请求数据处理函数运行出错', e);
    }
  }
}

function updateDataSourceMap(id: string, data: any, error: any) {
  // this.dataSourceMap[id].error = error || undefined;
  // this.dataSourceMap[id].data = data;
  // this.dataSourceMap[id].status = error ? DS_STATUS.ERROR : DS_STATUS.LOADED;
}

function asyncDataHandler(asyncDataList: any[]) {
  return new Promise((resolve, reject) => {
    const allReq: any[] = [];
    asyncDataList.forEach((req) => {
      const { id, type } = req;
      // TODO: need refactoring to remove 'legao' related logic
      if (!id || !type || type === 'legao') {
        return;
      }
      allReq.push(req);
    });

    if (allReq.length === 0) {
      resolve({});
    }
    const res: any = {};
    Promise.all(
      allReq.map((item: any) => {
        return new Promise((innerResolve) => {
          const { type, id, dataHandler, options } = item;

          const fetchHandler = (data: any, error: any) => {
            res[id] = handleData(id, dataHandler, data, error);
            updateDataSourceMap(id, res[id], error);
            innerResolve({});
          };

          const doFetch = (innerType: string, innerOptions: any) => {
            doRequest(innerType as any, innerOptions)
              ?.then((data: any) => {
                fetchHandler(data, undefined);
              })
              .catch((err: Error) => {
                fetchHandler(undefined, err);
              });
          };

          // TODO
          // this.dataSourceMap[id].status = DS_STATUS.LOADING;
          doFetch(type, options);
        });
      }),
    ).then(() => {
      resolve(res);
    }).catch((e) => {
      reject(e);
    });
  });
}

type DataSourceType = 'fetch' | 'jsonp';

function doRequest(type: DataSourceType, options: any) {
  // eslint-disable-next-line prefer-const
  let { uri, url, method = 'GET', headers, params, ...otherProps } = options;
  otherProps = otherProps || {};
  // if (type === 'jsonp') {
  //   return jsonp(uri, params, otherProps);
  // }

  if (type === 'fetch') {
    switch (method.toUpperCase()) {
      case 'GET':
        return get(uri, params, headers, otherProps);
      case 'POST':
        return post(uri, params, headers, otherProps);
      default:
        return _request(uri, method, params, headers, otherProps);
    }
  }

}