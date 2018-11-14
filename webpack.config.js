const path = require('path');
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
module.exports = {
  target: 'web',
  framework: 'vue',
  entry: {
    index: 'src/app.js'
  },
  template: 'src/view/index.html',
  lib: ['vue', 'vuex', 'axios'],
  plugins: {
    html: {
      filename: 'index.html'
    },
    skeleton: new SkeletonPlugin({
      pathname: path.resolve(__dirname, 'shell'), // 存储骨架屏代码的文件夹
      staticDir: path.resolve(__dirname, 'dist'), // 最好和 output 相同
      routes: ['/']
    })
  }
};
