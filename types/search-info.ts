import type { AlacrityLocales } from "~/types/alacrity-locale";

export type i18nField = {
  [locale in AlacrityLocales]: string;
};

export interface SearchInfo {
  id: string;
  name: i18nField;
  description: i18nField;
}
