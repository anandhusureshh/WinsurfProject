import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/WinsurfProject/',
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: false,
  }
})
