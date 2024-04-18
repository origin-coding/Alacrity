// TDesign
import "tdesign-vue-next/es/style/index.css";

import { createPinia } from "pinia";
import TDesign from "tdesign-vue-next";
import type { App } from "vue";

import i18n from "@/plugins/i18n";
import router from "@/plugins/router";

export async function registerPlugins(app: App): Promise<App> {
  const pinia = createPinia();
  app.use(router).use(pinia).use(i18n).use(TDesign);

  return app;
}

export { router };
// Stores.
export { useFavorites, usePluginFilter, usePlugins } from "./stores";
