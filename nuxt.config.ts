// noinspection JSUnusedGlobalSymbols

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/index.less"],
  modules: [
    "@nuxt/eslint",
    "@unocss/nuxt",
    "@tdesign-vue-next/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/color-mode",
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
  experimental: {
    clientNodeCompat: true,
  },
  content: {
    highlight: {
      theme: {
        light: "light-plus",
        dark: "dark-plus",
        default: "dark-plus",
      },
    },
  },
  // Nuxt content's code highlight works only when <html> has a class called light/dark, without any suffix.
  colorMode: {
    classSuffix: "",
  },
});
