// noinspection JSUnusedGlobalSymbols

import messages from "~/locales";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zhHans",
  fallbackLocale: "zhHans",
  fallbackWarn: false,
  missingWarn: false,
  messages,
}));
