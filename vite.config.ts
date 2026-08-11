import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: 部署到 Jaco-Yijie.github.io 根域名，base 为 '/'
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
