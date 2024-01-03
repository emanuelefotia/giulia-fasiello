export default defineNuxtConfig({
  app: {
    head: {
      title: "Giulia Fasiello",

      htmlAttrs: {
        lang: "it",
      },
    },
  },
  ssr: false,

  css: ["@/assets/main.css", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
});
