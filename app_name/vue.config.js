const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:8889',
  outputDir: '../static/dist',
  indexPath: '../../games/templates/_base_vue.html',
  configureWebpack: {
    devServer: {
      port: 8889,
      devMiddleware: {
        writeToDisk: true
      }
    }
  }
})
