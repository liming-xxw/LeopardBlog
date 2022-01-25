import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    ["@pinia/nuxt"],
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/md-editor-v3@1.7.2/lib/style.css",
      },
    ],
  },
});
