import { appConfigDir } from "@tauri-apps/api/path";

import type { AlacrityLocaleType } from "~/types/alacrity-locale";
import type { AlacrityThemeType } from "~/types/alacrity-theme";

// Config keys.
export const Keys = {
  favorite: "favorite",
  theme: "theme",
  locale: "locale",
  guide: "guide",
} as const;

// Config type definition.
export interface AlacrityConfig {
  [Keys.favorite]: Set<string>;
  [Keys.theme]: AlacrityThemeType;
  [Keys.locale]: AlacrityLocaleType;
  [Keys.guide]: boolean;
}

// Config file.
const CONFIG_FILE_DIR = await appConfigDir();
const CONFIG_FILE_NAME = "settings.json";
export const CONFIG_FILE: string = `${CONFIG_FILE_DIR}${CONFIG_FILE_NAME}`;
