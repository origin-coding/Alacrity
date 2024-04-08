import { appConfigDir } from "@tauri-apps/api/path";

// Configuration file path.
const CONFIG_DIR_PATH = await appConfigDir();
const CONFIG_FILENAME = "settings.dat";
const CONFIG_FILE_PATH = `${CONFIG_DIR_PATH}/${CONFIG_FILENAME}`;

export { CONFIG_FILE_PATH };

// Configuration keys.
const KEY_LOCALE = "locale";
const KEY_FAVORITES = "favorites";
const KEY_THEME = "theme";

export { KEY_FAVORITES, KEY_LOCALE, KEY_THEME };
