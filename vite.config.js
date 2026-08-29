import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base path ensures the portfolio works seamlessly on GitHub Pages
  // whether deployed to https://<username>.github.io/<repo>/ or custom domain
  base: './',
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
