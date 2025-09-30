import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // This is the configuration for the local dev server (`npm run dev`)
    return {
      plugins: [react()],
      base: '/portfolio-project/' // The base path that works for your localhost
    };
  } else {
    // This is the configuration for the build command (`npm run build`)
    return {
      plugins: [react()],
      base: '/' // The base path that works for Vercel
    };
  }
});