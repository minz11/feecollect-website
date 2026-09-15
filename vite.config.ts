import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgo from 'vite-plugin-svgo';

export default defineConfig({
  plugins: [
    react(),
    svgo({
      multipass: true,
      plugins: [
        { name: 'removeViewBox', active: false },
        { name: 'removeDimensions', active: true },
        { name: 'cleanupAttrs', active: true },
        { name: 'removeComments', active: true },
        { name: 'removeMetadata', active: true },
        { name: 'cleanupNumericValues', active: true },
        { name: 'moveElemsAttrsToGroup', active: true },
        { name: 'moveGroupAttrsToElems', active: true },
        { name: 'cleanupListOfValues', active: true },
        { name: 'removeUselessStrokeAndFill', active: true },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          ui: ['lucide-react'],
        },
      },
    },
  },
});