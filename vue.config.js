const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './dest',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        ws: true,
        pathRewrite: {
          '/api': ''
        },
        changeOrigin: true
      }
    }
  }
})
