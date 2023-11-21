import { createApp, App } from "vue";

import AppView from "./App.vue";

import { registerPlugins, useFavorites, usePlugins } from "@/plugins";

const app = createApp(AppView);
registerPlugins(app).then((app: App) => {
  app.mount("#app");

  // Initialize plugins on application startup.
  const plugins = usePlugins();
  plugins.init(); // Routes also initialized here.

  // Init favorite configuration.
  const favorites = useFavorites();
  favorites.initFavorites();

  // Initialization for theme and locale is performed in App.vue.
  // See App.vue -> onMounted function.
});
