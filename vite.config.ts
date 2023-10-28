import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hue-hub/',
  server: {
    fs: {
      allow: ['../do0dle-colors/', './']
    }
  }
})
