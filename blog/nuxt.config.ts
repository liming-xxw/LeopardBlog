import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    "@pinia/nuxt",
  ],
  build: {
    transpile: ["@heroicons/vue"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        "@headlessui/vue",
        "@heroicons/vue/solid",
        "@heroicons/vue/outline",
        "vue",
        "pinia",
      ],
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
