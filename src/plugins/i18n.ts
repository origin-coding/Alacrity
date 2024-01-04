import { createI18n } from "vue-i18n";

import { en as enVuetify, zhHans as zhHansVuetify } from "vuetify/locale";

import en from "@/locale/en.json";
import zhHans from "@/locale/zhHans.json";

const i18n = createI18n({
  legacy: false,
  locale: "zhHans",
  fallbackLocale: "en",

  // Suppress these warnings in development mode.
  silentTranslationWarn: true,
  silentFallbackWarn: true,

  // Messages, including custom global messages and Vuetify's messages.
  messages: {
    en: {
      ...en,
      $vuetify: enVuetify,
    },
    zhHans: {
      ...zhHans,
      $vuetify: zhHansVuetify,
    },
  },
});

export default i18n;
