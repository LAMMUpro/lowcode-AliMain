import { request, get, post } from './request';

/** 
 * 该文件导出generateRemoteHandleMap函数供增删改API初始化使用
 */

function isI18nData(obj: any) {
  return obj && obj.type === 'i18n';
}

function isJSExpression(data: any) {
  return data && data.type === 'JSExpression' && data.extType !== 'function';
}

function isInnerJsFunction(data: any) {
  return data && data.type === 'JSExpression' && data.extType === 'function';
}
function isJSFunction(data: any) {
  return typeof data === 'object' && data && data.type === 'JSFunction' || isInnerJsFunction(data);
}

interface BaseObj<T = string|number|boolean> {
  [key: string]: T
}

/**
 * 请求options
 */
interface Options {
  headers: BaseObj<any>
  /** (自定义)域名 */
  host: string | LowCodeType<'JSExpression'>
  /** 是否跨域 */
  isCors: boolean
  /** 请求方法 */
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | "OPTIONS"
  /** 请求参数, get时是query, post时是body */
  params: BaseObj<any>
  /** 超时时间 */
  timeout: Number
  /** 请求路径, 不带域名! */
  uri: string | LowCodeType<'JSExpression'>
}

/**
 * 低代码类型
 */
interface LowCodeType<T> {
  type: T,
  value: string
}

/**
 * 增删改API 配置
 */
interface RemoteHandleItem {
  /** 函数名 */
  id: string
  /** 是否立即执行 */
  isInit: boolean
  /** 请求类型, 这里只用fetch */
  type: 'fetch'
  /** 额外参数 */
  options: Options
  /** 是否发起处理函数 */
  shouldFetch?: LowCodeType<'JSFunction'> //() => boolean
  /** 请求失败处理函数 */
  errorHandler?: LowCodeType<'JSFunction'> //(err: Error) => void 
  /** 请求前参数处理函数 */
  willFetch?: LowCodeType<'JSFunction'> //(options: Options) => Options
  /** 请求成功处理函数 */
  dataHandler?: LowCodeType<'JSFunction'> //(res: any) => any
}

/**
 * 增删改API map
 */
interface RemoteHandleMap {
  [key: string]: {
    /** 请求状态 */
    status: 'init' | 'error' | 'loading' | 'loaded'
    /** 请求执行函数, otherOptions主要用于设置header */
    load: (extParams: Array<any> | {[key: string]: any}, otherOptions?: Partial<Options>, callback?: (response: any) => void) => Promise<any> | undefined
  }
}

/**
 * 根据remoteHandleList生成对应的调用函数, 挂在this.remoteHandleMap对象下
 * @param remoteHandleList 增删改API 列表
 * @param ctx React页面组件上下文
 * @returns 
 */
export function generateRemoteHandleMap(this: any, remoteHandleList: Array<RemoteHandleItem>) {
  const remoteHandleMap: RemoteHandleMap = {};
  console.log(remoteHandleList);
  remoteHandleList.forEach((remoteHandleItem) => {
    remoteHandleMap[remoteHandleItem.id] = {
      status: 'init',
      /** 调用时支持load(params, otherOptions, callback) | load(params, callback) */
      load: (extParams, otherOptions, callback) => {
        /** 
         * 判断是否要发起函数
         */
        let shouldFetch = true;
        if (remoteHandleItem.shouldFetch && isJSFunction(remoteHandleItem.shouldFetch)) {
          shouldFetch = transformStringToFunction(remoteHandleItem.shouldFetch.value).call(this);
        }
        if (!shouldFetch) return Promise.reject();

        /** 
         * 请求参数处理函数
         */
        if (remoteHandleItem.willFetch && isJSFunction(remoteHandleItem.willFetch)) {
          /** 
           * 合并load({})传入的第一个params参数
           */
          let isMergeParams = Object.prototype.toString.call(extParams)==='[object Object]';
          /** options处理前params参数合并 */
          const originParamsKeys = Object.keys(remoteHandleItem.options.params);
          if (isMergeParams) {
            remoteHandleItem.options.params = {
              ...remoteHandleItem.options.params,
              ...extParams,
            }
          } else if (Object.prototype.toString.call(extParams)==='[object Array]') {
            /**
             * 如果load(params)参数是Array, 直接赋值options.params
             */
            remoteHandleItem.options.params = extParams;
          }
          /** options = willFetch(options) */
          remoteHandleItem.options = transformStringToFunction(remoteHandleItem.willFetch.value).call(this, remoteHandleItem.options);
          /** options处理后删除load(params)__开头的参数 */
          if (isMergeParams) {
            Object.keys(extParams).filter(key=>key.startsWith('__')).forEach(key=>{
              /** 原先params有__开头的参数不删 */
              if (!originParamsKeys.find(originKey => originKey===key)) {
                delete remoteHandleItem.options.params[key];
              }
            })
          }
        }

        return loadRemoteHandleApi.call(this, remoteHandleItem, otherOptions, callback);
      },
    };
  });
  return remoteHandleMap;
}

/**
 * 解析schema, 把字符串表达式转为对应值
 * @param schema 需要转换的值
 * @param ctx 上下文
 * @param options 
 * @returns 
 */
function parseData(
  schema: any, 
  ctx?: any, 
  options: {
    thisRequiredInJSE?: boolean;
    logScope?: string;
  } = {}
): any {
  if (isJSExpression(schema)) {
    return parseExpression({
      str: schema,
      self: ctx,
      thisRequired: options.thisRequiredInJSE,
      logScope: options.logScope,
    });
  } else if (isI18nData(schema)) {
    return parseExpression({
      type: 'JSExpression',
      value: `this.i18n('${schema.key}')`,
    }, ctx);
  } else if (typeof schema === 'string') {
    return schema.trim();
  } else if (Array.isArray(schema)) {
    return schema.map((item) => parseData(item, ctx, options));
  } else if (typeof schema === 'function') {
    return schema.bind(ctx);
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
      res[key] = parseData(val, ctx, options);
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

/** 是否是字符串 */
function isString(str: any): boolean {
  return {}.toString.call(str) === '[object String]';
}

/**
 * 解析JSExpression (对象类型表达式)，支持省略this
 * @param str expression in string form
 * @param self 函数作用域
 * @returns any
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

/**
 * 是否是相同的域名??
 * 默认调用顶层窗口的parseObj, 保障new Function的window对象是顶层的window对象
 */
function inSameDomain() {
  try {
    return window.parent !== window && window.parent.location.host === window.location.host;
  } catch (e) {
    return false;
  }
}

/**
 * this.remoteHandleMap['xxx'].load({})调用时触发
 * @param this 上下文
 * @param _remoteHandleItem 对应的配置
 * @param params load(params)
 * @param otherOptions 其他options
 * @param callback 
 * @returns 
 */
function loadRemoteHandleApi(this: any, _remoteHandleItem: RemoteHandleItem, otherOptions?: Partial<Options>, callback?: (response:any) => any) {
  /** 解析变量表达式 */
  const remoteHandleItem: RemoteHandleItem = parseData(_remoteHandleItem, this);
  if (!remoteHandleItem) {
    console.warn(`remoteHandle API named ${_remoteHandleItem.id} not exist`);
    return ;
  }

  const options = remoteHandleItem.options || {};
  let callbackFn = callback || ((response:any) => undefined) ;
  let otherOptionsObj = otherOptions;
  if (typeof otherOptions === 'function') {
    callbackFn = otherOptions;
    otherOptionsObj = {};
  }
  const { headers: extHeaders, ...otherProps } = otherOptionsObj || {};
  
  return asyncDataHandler.call(this, {
    ...remoteHandleItem,
    options: {
      ...options,
      headers: {
        ...options.headers,
        ...extHeaders,
      },
      ...otherProps,
    },
  }, callbackFn).then((res: any) => {
    return res;
  }).catch((err: any) => {
    /** 错误处理函数 */
    if (remoteHandleItem.errorHandler && isJSFunction(remoteHandleItem.errorHandler)) {
      const errorHandler = transformStringToFunction(remoteHandleItem.errorHandler.value);
      errorHandler.call(this, err);
    }
    return err;
  });
}

/**
 * 字符串函数 转函数, 使用的时候用call给作用域
 */
function transformStringToFunction(str: string): Function {
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
 * 异步函数处理
 * //TODO load(params, callback)处理response.header, 上下文
 */
function asyncDataHandler(this: any, asyncRequestData: any, loadCallback: (response: any) => void) {
  return new Promise((resolve, reject) => {
    /** 异常情况 */
    if (!asyncRequestData.id || !asyncRequestData.type || asyncRequestData.type === 'legao') reject('函数id或type不存在或不合法!');

    /** 发送请求, 这里的data已经不包含header这些信息了!! */
    doRequest(asyncRequestData.options, loadCallback)?.then((data: any) => {
      fetchDataHandler(data, undefined);
    }).catch((err: Error) => {
      fetchDataHandler(undefined, err);
    });

    /** 响应处理 */
    const fetchDataHandler = (data: any, error: any) => {
      asyncRequestData.error = error || undefined;
      asyncRequestData.data = data;
      asyncRequestData.status = error ? 'error' : 'loaded';
      if (error) reject(error);
      /** 处理res.data.code = -1的情况, 需要在utils上实现__handleResCodeError函数 */
      if (data.code===-1) this.utils.__handleResCodeError.call(this, data);
      /** 请求结果处理函数 */
      if (asyncRequestData.dataHandler && isJSFunction(asyncRequestData.dataHandler)) {
        try {
          const _data = transformStringToFunction(asyncRequestData.dataHandler.value)?.call(this, data);
          resolve(_data);
        } catch (e) {
          console.error(`请求数据处理函数${asyncRequestData.id}运行出错`, e);
        }
      }
      resolve(data);
    };
  });
}

/** 发送fetch请求 */
function doRequest(options: any, loadCallback: (response: any) => void) {
  let { uri, url, method = 'GET', headers, params, ...otherProps } = options;
  otherProps = otherProps || {};

  switch (method.toUpperCase()) {
    case 'GET':
      return get(options.host + uri, params, headers, otherProps, loadCallback);
    case 'POST':
      return post(options.host + uri, params, headers, otherProps, loadCallback);
    default:
      return request(options.host + uri, method, params, headers, otherProps, loadCallback);
  }
}
