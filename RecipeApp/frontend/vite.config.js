import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures relative paths
  build: {
    outDir: "dist", // This is required for Vercel
  },
});
