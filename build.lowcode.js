const { library } = require('./build.json');
const { name, version } = require("./package.json");

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    /**
     * 不配这个导出没法使用antd
     */
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        engineScope: '@alilc',
        library,
        /** 版本不对可能会报错 */
        staticResources: {
          engineCoreCssUrl:
            'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine/1.2.1-beta.0/dist/css/engine-core.css',
          engineExtCssUrl:
            'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine-ext/1.0.7-beta.4/dist/css/engine-ext.css',
          engineCoreJsUrl:
            'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine/1.2.1-beta.0/dist/js/engine-core.js',
          engineExtJsUrl:
            'https://uipaas-assets.com/prod/npm/@alilc/lowcode-engine-ext/1.0.7-beta.4/dist/js/engine-ext.js',
        },
        npmInfo: {
          package: name,
          version,
        },
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        categories: ['通用', '导航', '信息输入', '信息展示', '信息反馈'],
        baseUrl: {
          prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
          daily: `https://alifd.alicdn.com/npm/${name}@${version}`,
        },
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                package: 'iconfont-icons',
                urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
              // {
              //   package: 'antd',
              //   version: '4.23.0',
              //   urls: [
              //     `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.js`,
              //     `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.css`,
              //   ],
              //   library: 'antd',
              // },
            ],
            components: [],
          },
        ],
      },
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        // 配置要打开的页面，在注入调试模式下，不配置此项的话不会打开浏览器
        // 支持直接使用官方 demo 项目：https://lowcode-engine.cn/demo/index.html
        openUrl: "https://lowcode-engine.cn/demo/demo-basic-antd/index.html?debug"
      }
    ]
  ],
};
