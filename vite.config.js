import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ✅ binds to 0.0.0.0
    allowedHosts: ['swarfrontend.onrender.com'], // ✅ allow your Render domain
  },
  build: {
    outDir: 'dist', // ✅ ensures Render knows where to find static files
  }


})
