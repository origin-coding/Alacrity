import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";
import { Store } from "tauri-plugin-store-api";

import { CONFIG_FILE_PATH, KEY_FAVORITES, Plugin } from "@/common";

const useFavorites = defineStore("favorites", () => {
  // Plugin favorite list is stored like "Name-Author", for example: "Base64-Alacrity";
  const favorites: Ref<Set<string>> = ref(new Set<string>());

  const inFavorites: ComputedRef<(plugin: Plugin) => boolean> = computed(() => {
    return (plugin: Plugin) =>
      favorites.value.has(`${plugin.Name}-${plugin.Author}`);
  });

  function initFavorites() {
    const store = new Store(CONFIG_FILE_PATH);
    store.get<Array<string>>(KEY_FAVORITES).then((res) => {
      if (res === null) {
        return;
      }
      res.forEach((favorite) => favorites.value.add(favorite));
    });
    store.save().then();
  }

  function saveFavorites() {
    const store = new Store(CONFIG_FILE_PATH);
    store.set(KEY_FAVORITES, Array.from(favorites.value)).then();
    store.save().then();
  }

  function addToFavorites(plugin: Plugin) {
    favorites.value.add(`${plugin.Name}-${plugin.Author}`);
    saveFavorites();
  }

  function removeFromFavorites(plugin: Plugin) {
    favorites.value.delete(`${plugin.Name}-${plugin.Author}`);
    saveFavorites();
  }

  return { inFavorites, initFavorites, addToFavorites, removeFromFavorites };
});

export default useFavorites;
