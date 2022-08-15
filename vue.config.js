//const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:6100',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
    }
  }
  }
}

