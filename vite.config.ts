import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// User Page 仓库，base 必须是根路径 /
export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
