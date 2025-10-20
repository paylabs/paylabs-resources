import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";

// Adjust if your repository name is different
const repoBase = "/paylabs-resources/";

// https://vitejs.dev/config/
export default defineConfig({
  base: repoBase,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "icons/icon-192x192.png",
        "icons/icon-512x512.png",
        "robots.txt",
      ],
      manifest: {
        name: "Paylabs Resources",
        short_name: "Paylabs",
        description: "Landing page resource integrasi Paylabs",
        start_url: repoBase,
        scope: repoBase,
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0ea5e9",
        icons: [
          {
            src: `${repoBase}icons/icon-192x192.ico`,
            sizes: "192x192",
            type: "image/x-icon",
          },
          {
            src: `${repoBase}icons/icon-512x512.ico`,
            sizes: "512x512",
            type: "image/x-icon",
          },
          {
            src: `${repoBase}icons/icon-512x512.ico`,
            sizes: "512x512",
            type: "image/x-icon",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
        navigateFallback: "index.html",
        runtimeCaching: [
          {
            urlPattern:
              /^https:\/\/(fonts\.gstatic\.com|fonts\.googleapis\.com|unpkg\.com|cdn\.skypack\.dev)/,
            handler: "CacheFirst",
            options: {
              cacheName: "externals",
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
      devOptions: { enabled: true },
    }),
  ],
});
