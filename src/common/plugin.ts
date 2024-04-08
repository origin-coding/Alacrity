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
  Name: string;
  // Plugins with author "Alacrity" are officially supported.
  // Third-party plugins are not allowed to use this as author's name.
  Author: string;
  Email?: string;
  Description: string;
  Version: string;
  // Plugin categories/tags.
  Categories: Array<string>;

  // I18n support.
  MultiLanguage?: boolean;
  Locale?: Locale;
}

interface Plugin extends PluginInfo {
  // Plugin initial page.
  /* eslint-disable */
  View: Component<{}, {}>;
  // Plugin's route will be automatically assigned to `${Author}-${Name}`.
  Route?: string;
}

export { type Plugin, type PluginInfo };

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
