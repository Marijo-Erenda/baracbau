/* ==================================
   BARACBAU – Frontend
   vite.config.ts
   Vite Build & Dev Server Configuration
   ================================== */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/* ================================
   Vite Configuration
   ================================ */

export default defineConfig({
  /* ================================
     Plugins
     ================================ */

  plugins: [react()],

  /* ================================
     Module Resolution / Aliases
     ================================ */

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  /* ================================
     Development Server
     ================================ */

  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
      },
    },
  },
});
