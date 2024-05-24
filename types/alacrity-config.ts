import { appConfigDir } from "@tauri-apps/api/path";
import type { AlacrityLocales } from "~/types/alacrity-locale";

// Config keys.
export const Keys = {
  favorite: "favorite",
  disabled: "disabled",
  theme: "theme",
  locale: "locale",
} as const;

// Config type definition.
export interface AlacrityConfig {
  [Keys.favorite]: Set<string>;
  [Keys.disabled]: Set<string>;
  [Keys.theme]: "light" | "dark";
  [Keys.locale]: keyof typeof AlacrityLocales;
}

// Config file.
const CONFIG_FILE_DIR = await appConfigDir();
const CONFIG_FILE_NAME = "settings.json";
export const CONFIG_FILE: string = `${CONFIG_FILE_DIR}${CONFIG_FILE_NAME}`;
