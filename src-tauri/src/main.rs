#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod config;

use serde_json::json;
use std::path::Path;
use tauri::Manager;
use tauri_plugin_store::StoreExt;

use crate::config::{
    DefaultConfig, CONFIG_FILE, KEY_COLLAPSED, KEY_FAVORITE, KEY_GUIDE, KEY_LOCALE, KEY_THEME,
};

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_store::Builder::default().build())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_single_instance::init(|app, _, _| {
            app.get_webview_window("main").expect("No main window!").set_focus().expect("Unable to set focus!");
        }))
        .plugin(tauri_plugin_store::Builder::default().build())
        .setup(|app| {
            let config_dir_path = app.path().app_config_dir().expect("Failed to get config dir!");
            let config_file_path = config_dir_path.join(Path::new(CONFIG_FILE));
            if config_file_path.exists() {
                return Ok(());
            }

            let default_config: DefaultConfig = DefaultConfig::default();
            let store = app.handle().store(config_file_path);
            store.set(String::from(KEY_LOCALE), json!(default_config.locale));
            store.set(String::from(KEY_THEME), json!(default_config.theme));
            store.set(String::from(KEY_FAVORITE), json!(default_config.favorite));
            store.set(String::from(KEY_GUIDE), json!(default_config.guide));
            store.set(String::from(KEY_COLLAPSED), json!(default_config.collapsed));
            store.save()?;

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("Error when running tauri application!");
}
