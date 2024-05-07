// noinspection JSUnusedGlobalSymbols

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@unocss/nuxt",
    "@tdesign-vue-next/nuxt",
    "@vueuse/nuxt",
  ],
  tdesign: {
    resolveIcons: true,
    esm: true,
  },
});
