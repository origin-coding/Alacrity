import { defineStore } from "pinia";
import {
  type AlacrityConfig,
  CONFIG_FILE_PATH,
  DISABLE_KEY,
  FAVORITE_KEY,
} from "~/types/alacrity-config";
import { Store } from "tauri-plugin-store-api";
import type { MaybeRefOrGetter } from "vue";

const useAlacrityConfig = defineStore("alacrity-config", () => {
  const config = ref<AlacrityConfig>({
    favorite: new Set<string>(),
    disable: new Set<string>(),
  });
  const store = ref(new Store(CONFIG_FILE_PATH));

  function isDisabled(name: MaybeRefOrGetter<string>): boolean {
    return config.value.disable.has(toValue(name));
  }

  function isInFavorite(name: MaybeRefOrGetter<string>): boolean {
    return config.value.favorite.has(toValue(name));
  }

  async function toggleInFavorite(name: MaybeRefOrGetter<string>) {
    const nameValue = toValue(name);

    if (isInFavorite(name)) {
      config.value.favorite.delete(nameValue);
    } else {
      config.value.favorite.add(nameValue);
    }
    await store.value.set(FAVORITE_KEY, config.value.disable);
  }

  async function toggleDisabled(name: MaybeRefOrGetter<string>) {
    const nameValue = toValue(name);

    if (isDisabled(name)) {
      config.value.disable.delete(nameValue);
    } else {
      config.value.disable.add(nameValue);
    }
    await store.value.set(DISABLE_KEY, config.value.disable);
  }

  async function initConfig() {
    const favorite = await store.value.get<Set<string>>(FAVORITE_KEY);
    config.value.favorite = favorite || new Set<string>();

    const disable = await store.value.get<Set<string>>(DISABLE_KEY);
    config.value.disable = disable || new Set<string>();
  }

  return {
    isDisabled,
    isInFavorite,
    toggleDisabled,
    toggleInFavorite,
    initConfig,
  };
});

export default useAlacrityConfig;
