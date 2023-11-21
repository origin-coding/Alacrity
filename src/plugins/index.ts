// Plugins
import { createPinia } from "pinia";
import { loadFonts } from "@/plugins/webfontloader";
import vuetify from "@/plugins/vuetify";
import router from "@/plugins/router";
import i18n from "@/plugins/i18n";

// Types
import type { App } from "vue";

export async function registerPlugins(app: App): Promise<App> {
  await loadFonts();
  const pinia = createPinia();
  app.use(router).use(pinia).use(i18n).use(vuetify);
  return app;
}

export { router };
// Stores.
export { usePlugins, usePluginFilter, useFavorites } from "./stores";
