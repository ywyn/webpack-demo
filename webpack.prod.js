const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    clean: true,
    pathinfo: false,
  },
  plugins: [
    // 提取 CSS
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: true, // 最小化 entry chunk
    // 抽离重复代码
    splitChunks: {
      chunks: 'all',
      // 重复打包问题
      cacheGroups: {
        vendors: {
          // node_modules里的代码
          // name: 'vendors', 一定不要定义固定的name
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10, // 优先级
          enforce: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      //  CSS 压缩
      new CssMinimizerPlugin({
        parallel: 4,
      }),
      // JS 压缩
      new TerserPlugin({
        parallel: 4,
        extractComments: false, // 不讲注释提取到单独的文件中
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          format: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
  },
});
