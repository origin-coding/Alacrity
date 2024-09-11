use std::string::ToString;

// Configuration filename.
pub const CONFIG_FILE: &str = "settings.json";

// Keys defined in configuration.
pub const KEY_FAVORITE: &str = "favorite";
pub const KEY_LOCALE: &str = "locale";
pub const KEY_THEME: &str = "theme";
pub const KEY_GUIDE: &str = "guide";

// Default values.
pub struct DefaultConfig {
    pub locale: String,
    pub theme: String,
    pub favorite: Vec<String>,
    pub guide: bool,
}

impl Default for DefaultConfig {
    fn default() -> Self {
        DefaultConfig {
            locale: "en".to_string(),
            theme: "system".to_string(),
            favorite: Vec::new(),
            guide: false,
        }
    }
}
