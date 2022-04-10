const target = 'http://127.0.0.1:3000'

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        chageOrigin: true
      },
      '^/upload': {
        target,
        chageOrigin: true
      },
      '^/download': {
        target,
        chageOrigin: true
      }
    }
  }
}
