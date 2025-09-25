import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajuste o base para o nome do repositório quando for um Project Page do GitHub Pages
  // Ex.: se o repo for "alvorada-demo", use "/alvorada-demo/". Para User/Org Pages, use "/".
  base: "/marketplace-alvorada-demo/",
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
