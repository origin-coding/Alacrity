// noinspection JSUnusedGlobalSymbols

import type { AlacrityConfig } from "~/types/alacrity-config";

export default function (locale: AlacrityConfig["locale"]) {
  if (locale !== "system") {
    return locale;
  }

  let language: string;
  switch (navigator.language.toLowerCase()) {
    case "zh-cn":
    case "zh-hans":
      language = "zhHans";
      break;
    case "en-us":
    case "en":
      language = "en";
      break;
    default:
      language = "en";
  }
  return language;
}
