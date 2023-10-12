const fs = require('fs');

/**
 * 编译commonjs模块给设计器用的, 编译es模块给生产项目用的, 只需要导出generateRemoteHandleMap, 这里做处理了
 */

module.exports = ({ context, onGetConfig, onHook, ...rest }, options) => {
  // 这里面可以写哪些，具体请查看插件开发章节
  const { userConfig, command, webpack } = context;

  onHook('before.build.load', stats => {
    if (fs.existsSync('./es/index.js')) fs.writeFileSync('./es/index.js', `
/** 供主项目调用, 初始化this.remoteHandleMap */
export { generateRemoteHandleMap } from './utils/data-helper';

/** 内部封装的fetch方法, 谁爱用谁用 */
export { get, post, request } from './utils/request';`, {encoding:'utf8',flag:'w'})
  });
}