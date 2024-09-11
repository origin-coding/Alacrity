#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

mod config;

use std::path::Path;
use serde::Serialize;
use serde_json::json;
use tauri::{Manager, api::path::app_config_dir, Wry};
use tauri_plugin_store::{StoreCollection, with_store};

use crate::config::{CONFIG_FILE, KEY_LOCALE, KEY_FAVORITE, KEY_THEME, DefaultConfig, KEY_GUIDE, KEY_COLLAPSED};

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
        .setup(|app| {
            let config_dir_path = app_config_dir(app.config().as_ref())
                .expect("Config dir unavailable!");
            let config_file_path = config_dir_path.join(Path::new(CONFIG_FILE));
            if config_file_path.exists() { return Ok(()); }

            let default_config: DefaultConfig = DefaultConfig::default();
            let stores = app.state::<StoreCollection<Wry>>();
            with_store(app.app_handle(), stores, config_file_path, |store| {
                store.insert(KEY_LOCALE.into(), json!(default_config.locale))?;
                store.insert(KEY_THEME.into(), json!(default_config.theme))?;
                store.insert(KEY_FAVORITE.into(), json!(default_config.favorite))?;
                store.insert(KEY_GUIDE.into(), json!(default_config.guide))?;
                store.insert(KEY_COLLAPSED.into(), json!(default_config.collapsed))?;
                store.save()
            }).expect("Unable to init configuration file!");

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("Error when running tauri application!");
}
