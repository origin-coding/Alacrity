// Plugins
// Element Plus
import "element-plus/dist/index.css";

import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import type { App } from "vue";

import i18n from "@/plugins/i18n";
import router from "@/plugins/router";
import vuetify from "@/plugins/vuetify";
import loadFonts from "@/plugins/webfontloader";

export async function registerPlugins(app: App): Promise<App> {
  await loadFonts();
  const pinia = createPinia();
  app.use(router).use(pinia).use(i18n).use(vuetify).use(ElementPlus);
  return app;
}

export { router };
// Stores.
export { useFavorites, usePluginFilter, usePlugins } from "./stores";
