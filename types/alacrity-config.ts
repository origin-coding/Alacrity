import type { AlacrityLocaleType } from "~/types/alacrity-locale";
import type { AlacrityThemeType } from "~/types/alacrity-theme";

// Config keys.
export const Keys = {
  favorite: "favorite",
  theme: "theme",
  locale: "locale",
  guide: "guide",
  collapsed: "collapsed",
} as const;

// Config type definition.
export interface AlacrityConfig {
  [Keys.favorite]: Set<string>;
  [Keys.theme]: AlacrityThemeType;
  [Keys.locale]: AlacrityLocaleType;
  [Keys.guide]: boolean;
  [Keys.collapsed]: boolean;
}

// Config file.
export const CONFIG_FILE = "settings.json";
