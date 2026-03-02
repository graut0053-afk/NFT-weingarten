import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/NFT-weingarten/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Poll Media App",
        short_name: "PollApp",
        description: "Polling and Media Upload App",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        orientation: "portrait",

        // IMPORTANT for GitHub Pages:
        start_url: "/NFT-weingarten/",
        scope: "/NFT-weingarten/",

        icons: [
          {
            src: "/NFT-weingarten/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/NFT-weingarten/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
