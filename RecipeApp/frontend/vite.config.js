import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures the base path is set correctly for relative URLs
  build: {
    outDir: 'dist', // Output directory for the production build
  },
});
