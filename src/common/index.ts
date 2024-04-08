import "./monaco";

import locales from "./locale";

export { categories, type Category } from "./category";
export { type Plugin, processPlugin } from "./plugin";

// Stores
export type {
  CheatSheetData,
  CheatSheetHeaders,
  VuetifyHeaders,
} from "./cheat-sheet";
export {
  CONFIG_FILE_PATH,
  KEY_FAVORITES,
  KEY_LOCALE,
  KEY_THEME,
} from "./config";
export type { locales };
export type { LocalizedMessages } from "./locale";
export {
  useValidateCount,
  useValidateInt,
  useValidateNotEmpty,
  useValidateNotLessThan,
  useValidateNotMoreThan,
  useValidateNumberRange,
} from "./validators";
