import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User-site Pages deployment serves from the domain root.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        // Keep three.js in its own chunk so the lazy Starfield import
        // does not pull it into the initial bundle.
        manualChunks: {
          three: ["three"],
        },
      },
    },
  },
});
