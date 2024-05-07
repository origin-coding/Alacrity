// noinspection JSUnusedGlobalSymbols

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@unocss/nuxt",
    "@tdesign-vue-next/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n"
  ],
  tdesign: {
    resolveIcons: true,
    esm: true,
  },
  i18n: {
    vueI18n: "./i18n.config.ts"
  }
});
