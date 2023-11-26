export { type Plugin, processPlugin } from "./plugin";

export { type Category, categories } from "./category";

// Stores
export {
  CONFIG_FILE_PATH,
  KEY_LOCALE,
  KEY_FAVORITES,
  KEY_THEME,
} from "./config";

export type {
  CheatSheetData,
  VuetifyHeaders,
  CheatSheetHeaders,
} from "./cheat-sheet";

import locales from "./locale";
export type { locales };
export type { LocalizedMessages } from "./locale";

import "./monaco";
