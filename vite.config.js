import { fileURLToPath, URL } from 'node:url'
// import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const routerBuildConfig = () => ({
  routesFolder: 'src/pages', extensions: ['.vue'],
  dts: false,  importMode: 'async',
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter({}),vue(),],
  test: {
    environment: 'jsdom',
    root: fileURLToPath(new URL('./', import.meta.url))
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
