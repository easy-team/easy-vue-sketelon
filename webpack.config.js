const path = require('path');
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
module.exports = {
  target: 'web',
  framework: 'vue',
  entry: {
    app: 'src/app.js'
  },
  template: 'src/view/index.html',
  lib: ['vue', 'vuex', 'axios'],
  plugins: {
    html: {
      filename: 'index.html'
    },
    skeleton: new SkeletonPlugin({
      pathname: path.resolve(__dirname, 'shell'),
      staticDir: path.resolve(__dirname, 'dist/skeleton'),
      routes: ['/']
    })
  }
};
