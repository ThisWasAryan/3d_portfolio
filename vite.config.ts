import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/3d_portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
          }
        },
      },
    },
  },
  assetsInclude: ['**/*.glb'],
})
