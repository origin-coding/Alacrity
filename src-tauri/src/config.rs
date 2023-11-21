// Configuration filename.
pub const CONFIG_FILE_NAME: &str = "settings.dat";

// Keys defined in configuration.
pub const KEY_LOCALE: &str = "locale";
pub const KEY_FAVORITES: &str = "favorites";
pub const KEY_THEME: &str = "theme";


use sys_locale::get_locale;

pub fn get_current_locale() -> &'static str {
    return match get_locale().expect("Unable to get current system locale!").as_str() {
        "zh-CN" => "zhHans",
        "en-US" => "en",
        _ => "zhHans"
    };
}
