// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mikhailafitzpatrick.com",
  envDir: "..",
  publicDir: "../public",
  vite: {
    plugins: [tailwindcss()],
  },
});
