// noinspection JSUnusedGlobalSymbols

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@unocss/nuxt",
    "@tdesign-vue-next/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],
  tdesign: {
    resolveIcons: true,
    esm: true,
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  // Safari 13(Webview used in Linux and macOS by Tauri) does not support top-level await.
  // We need to manually configure it.
  vite: {
    esbuild: {
      supported: {
        "top-level-await": true,
      },
    },
  },
});
