import { defineStore } from "pinia";
import { Store } from "tauri-plugin-store-api";
import { computed, ComputedRef, Ref, ref } from "vue";

import { CONFIG_FILE_PATH, KEY_FAVORITES, Plugin } from "@/common";

const useFavorites = defineStore("favorites", () => {
  // Plugin favorite list is stored like "Name-Author", for example: "Base64-Alacrity";
  const favorites: Ref<Set<string>> = ref(new Set<string>());

  const inFavorites: ComputedRef<(plugin: Plugin) => boolean> = computed(() => {
    return (plugin: Plugin) =>
      favorites.value.has(`${plugin.Name}-${plugin.Author}`);
  });

  async function initFavorites() {
    const store = new Store(CONFIG_FILE_PATH);

    const favoritesConfig = await store.get<Array<string>>(KEY_FAVORITES);
    if (favoritesConfig === null) {
      return;
    }

    favoritesConfig.forEach((favorite) => favorites.value.add(favorite));

    await store.save();
  }

  async function saveFavorites() {
    const store = new Store(CONFIG_FILE_PATH);

    await store.set(KEY_FAVORITES, Array.from(favorites.value));
    await store.save();
  }

  async function addToFavorites(plugin: Plugin) {
    favorites.value.add(`${plugin.Name}-${plugin.Author}`);
    await saveFavorites();
  }

  async function removeFromFavorites(plugin: Plugin) {
    favorites.value.delete(`${plugin.Name}-${plugin.Author}`);
    await saveFavorites();
  }

  return { inFavorites, initFavorites, addToFavorites, removeFromFavorites };
});

export default useFavorites;
