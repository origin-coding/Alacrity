import type { AlacrityLocaleType } from "~/types/alacrity-locale";

export type i18nField = {
  // key is AlacrityLocaleType, value is string
  [key in AlacrityLocaleType]: string;
};

export interface SearchInfo {
  id: string;
  name: i18nField;
  description: i18nField;
}
