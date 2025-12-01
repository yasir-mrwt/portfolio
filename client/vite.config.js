/**
 * Vite Configuration
 *
 * Vite is a fast build tool for modern web applications.
 *
 * How it works:
 * - Uses native ES modules in development for instant HMR
 * - Bundles with Rollup for optimized production builds
 * - Supports React Fast Refresh for instant component updates
 *
 * This config:
 * - Enables React plugin for JSX transformation
 * - Sets up development server on port 5173
 * - Configures build output directory
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    open: true, // Auto-open browser on dev server start
  },

  build: {
    outDir: "dist",
    sourcemap: true, // Generate source maps for debugging

    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          animation: ["framer-motion"],
        },
      },
    },
  },
});
