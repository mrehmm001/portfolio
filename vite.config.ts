import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://muneebrehman.co.uk (custom domain on GitHub Pages)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
