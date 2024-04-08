import { createApp } from "vue";

import { registerPlugins, useFavorites, usePlugins } from "@/plugins";

import AppView from "./App.vue";

let app = createApp(AppView);

app = await registerPlugins(app);

app.mount("#app");
// Initialize plugins on application startup.
const plugins = usePlugins();
plugins.init(); // Routes also initialized here.
// Init favorite configuration.
const favorites = useFavorites();
await favorites.initFavorites();
