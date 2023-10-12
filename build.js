module.exports = {
  plugins: [
    'build-plugin-component',
    'build-plugin-fusion',
    [
      'build-plugin-moment-locales',
      {
        locales: ['zh-cn'],
      },
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'plugin',
        // 开启注入调试模式，see：https://www.yuque.com/lce/doc/ulvlkz
        inject: true,
        // 配置要打开的页面，在注入调试模式下，不配置此项的话不会打开浏览器
        // 支持直接使用官方 demo 项目：https://lowcode-engine.cn/demo/index.html
        openUrl: 'https://lowcode-engine.cn/demo/index.html?debug',
      },
    ],
    /** 编译commonjs模块给设计器用的, 编译es模块给生产项目用的, 只需要导出generateRemoteHandleMap, 这里做处理了 */
    "./build.plugin.js"
  ]
};
