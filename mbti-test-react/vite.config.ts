import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // api 개발 서버 프록시 설정
    proxy: {
      '/api': {
          target: 'http://localhost:8090',
          changeOrigin: true,
          secure: false,
          ws: true
      },
    },
  },
})
