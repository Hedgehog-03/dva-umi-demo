import { defineConfig } from 'umi';

export default defineConfig({
  // 配置路由前缀，默认是'/'
  base: '/',
  // 打包后的index.html引入的资源添加的前缀，默认是'/'
  publicPath: '/static/',
  // 指定打包文件的输出路径
  outputPath: '/static/',
  // 配置是否让打包后的文件包含hash后缀，默认是false
  hash: true,
  // 配置history类型和配置项
  history: {
    type: 'browser',
  },
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  // 如果不配置routes选项，使用约定式路由，分析 src/pages 目录拿到路由配置
  // 开启HMR
  fastRefresh: {},
  // 开启dva
  dva: {},
  // 通过 webpack-chain 的 API 修改 webpack 配置
  // chainWebpack(config) {
  //   config.merge({
  //     optimization: {
  //       splitChunks: {
  //         cacheGroups: {
  //           styles: {
  //             name: 'styles',
  //             test: /\.(css|less)$/,
  //             chunks: 'all',
  //             minChunks: 2,
  //             minSize: 0,
  //           },
  //           vendors: {
  //             name: 'vendors',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             chunks: 'all',
  //           },
  //         },
  //         automaticNameDelimiter: '~',
  //       }
  //     }
  //   });
  // }
});
