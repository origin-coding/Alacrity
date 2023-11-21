import { createI18n } from "vue-i18n";
import en from "@/locale/en.json";
import zhHans from "@/locale/zhHans.json";

const i18n = createI18n({
  legacy: false,
  locale: "zhHans",
  fallbackLocale: "en",
  // Suppress warnings in production mode.
  missingWarn: import.meta.env.DEV,
  fallbackWarn: import.meta.env.DEV,
  messages: {
    en,
    zhHans,
  },
});

export default i18n;
