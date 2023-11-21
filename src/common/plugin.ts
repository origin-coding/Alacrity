import { Component, markRaw } from "vue";

interface LocaleOption {
  en: string;
  zhHans: string;
  [key: string]: string;
}

interface Locale {
  Name: LocaleOption;
  Description: LocaleOption;
}

interface PluginInfo {
  Name: String;
  // Plugins with author "Alacrity" are officially supported.
  // Third-party plugins are not allowed to use this as author's name.
  Author: String;
  Email?: String;
  Description: String;
  Version: String;
  // Plugin categories/tags.
  Categories: Array<String>;

  // I18n support.
  MultiLanguage?: Boolean;
  Locale?: Locale;
}

interface Plugin extends PluginInfo {
  // Plugin initial page.
  View: Component<{}, {}>;
  // Plugin's route will be automatically assigned to `${Author}-${Name}`.
  Route?: String;
}

export { type PluginInfo, type Plugin };

function processPlugin(plugin: Plugin): Plugin {
  // First, process plugin.json's route.
  // If route is not specified, assign it to "Author-Name".
  const route = plugin.Route?.toString() ?? `${plugin.Author}-${plugin.Name}`;
  // Add beginning '/' to route.
  plugin.Route = route.startsWith("/") ? route : `/${route}`;

  // Second, mark plugin.json's view as raw to avoid unnecessary performance overhead.
  plugin.View = markRaw(plugin.View);

  return plugin;
}

export { processPlugin };
