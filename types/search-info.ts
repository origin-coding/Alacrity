import type { AlacrityLocales } from "~/types/alacrity-locale";
import type { AlacrityPlugin } from "~/types/alacrity-plugin";

export type i18nField = {
  [locale in AlacrityLocales]: string;
};

export interface SearchInfo extends AlacrityPlugin {
  name: i18nField;
  description: i18nField;
}
