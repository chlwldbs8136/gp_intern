const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    },
    i18n: {
      locale: 'ko',
      fallbackLocale: 'ko',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
})

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        path: false,
        __dirname: false,
      }
    }
  },

  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    },
    i18n: {
      locale: 'ko',
      fallbackLocale: 'ko',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
