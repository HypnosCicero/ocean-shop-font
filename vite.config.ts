import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {createSvgLoaderPlugin} from '@/icons/index'; //这里还是没有办法进行解析

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),createSvgLoaderPlugin()],
  resolve: {
    alias: {
      '@' : resolve(__dirname, './src'),
    }
  }
})
