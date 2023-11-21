#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

mod alacrity_plugins;
mod config;

use std::path::Path;
use serde::Serialize;
use serde_json::json;
use tauri::{Manager, api::path::app_config_dir, Wry};
use tauri_plugin_store::{StoreCollection, with_store};

use crate::alacrity_plugins::get_headers;
use crate::config::{CONFIG_FILE_NAME, KEY_LOCALE, get_current_locale, KEY_FAVORITES, KEY_THEME};

#[derive(Clone, Serialize)]
struct Payload {
    args: Vec<String>,
    cwd: String,
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_single_instance::init(|app, args, cwd| {
            app.emit_all("single-instance", Payload { args, cwd }).unwrap()
        }))
        .plugin(tauri_plugin_store::Builder::default().build())
        .invoke_handler(tauri::generate_handler![get_headers])
        .setup(|app| {
            let config_dir_path = app_config_dir(app.config().as_ref())
                .expect("Config dir unavailable!");
            let config_file_path = config_dir_path.join(Path::new(CONFIG_FILE_NAME));
            if config_file_path.exists() { return Ok(()); }

            let stores = app.state::<StoreCollection<Wry>>();
            with_store(app.app_handle(), stores, config_file_path, |store| {
                store.insert(KEY_LOCALE.into(), json!(get_current_locale()))?;
                store.insert(KEY_FAVORITES.into(), json!([]))?;
                store.insert(KEY_THEME.into(), json!("lightTheme"))?;
                store.save()
            }).expect("Unable to init configuration file!");

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
