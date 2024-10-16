// noinspection JSUnusedGlobalSymbols

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
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
    // To use Node's API, such as Buffer, etc.
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
    respectPathCase: true,
    experimental: {
      clientDB: true, // If not set, contents are Not Found after generating static files.
    },
  },
  // Nuxt content's code highlight works only when <html> has a class called light/dark, without any suffix.
  colorMode: {
    classSuffix: "",
  },
});
