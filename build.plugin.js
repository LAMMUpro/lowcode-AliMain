const fs = require('fs-extra');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const { version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.resolve.plugin('tsconfigpaths').use(TsconfigPathsPlugin, [
      {
        configFile: './tsconfig.json',
      },
    ]);

    config.merge({
      node: {
        fs: 'empty',
      },
    });

    config
      .plugin('index')
      .use(HtmlWebpackPlugin, [
        {
          inject: false,
          minify: false,
          templateParameters: {
            version,
          },
          template: require.resolve('./public/index.ejs'),
          filename: 'index.html',
        },
      ]);
    config
      .plugin('preview')
      .use(HtmlWebpackPlugin, [
        {
          inject: false,
          templateParameters: {
          },
          template: require.resolve('./public/preview.html'),
          filename: 'preview.html',
        },
      ]);

    config
      .plugin('compression')
      .use(CompressionWebpackPlugin, [
        {
          test: /.js$|.html$|.css$/, // 匹配文件名
          algorithm: 'gzip', // 算法
          minRatio: 0.7, // 压缩体积至少减少30%, 否则不压缩
          filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
        },
      ]);

    config.plugins.delete('hot');
    config.devServer.hot(false);

    config.module // fixes https://github.com/graphql/graphql-js/issues/1272
      .rule('mjs$')
      .test(/\.mjs$/)
      .include
        .add(/node_modules/)
        .end()
      .type('javascript/auto');
  });
};
