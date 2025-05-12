// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devServer: {
    host: '0.0.0.0',
  },
  devtools: { enabled: true,
  vscode: {
  enabled: true,
  startOnBoot: true,
  reuseExistingServer: true,
  }

   },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ]
})