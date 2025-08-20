import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { qrcode } from "vite-plugin-qrcode";
import svgr from "vite-plugin-svgr";

/**
 * @see
 * https://vite.dev/config/
 */

export default defineConfig({
  base: "./",
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    open: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  plugins: [react(), qrcode(), svgr(), nodePolyfills(), createHtmlPlugin()],
});
