import { appConfigDir } from "@tauri-apps/api/path";

// Config type definition.
export interface AlacrityConfig {
  favorite: Set<string>;
  disable: Set<string>;
}

// Config keys.
export const FAVORITE_KEY: string = "favorite";
export const DISABLE_KEY: string = "disable";

// Config file.
const CONFIG_FILE_DIR = await appConfigDir();
const CONFIG_FILE_NAME = "settings.json";
export const CONFIG_FILE_PATH: string = `${CONFIG_FILE_DIR}/${CONFIG_FILE_NAME}`;
