import { defineStore } from "pinia";
import { Store } from "tauri-plugin-store-api";
import type { MaybeRefOrGetter } from "vue";

import {
  type AlacrityConfig,
  CONFIG_FILE,
  Keys,
} from "~/types/alacrity-config";

const useAlacrityConfig = defineStore("alacrity-config", () => {
  const config = ref<AlacrityConfig>({
    favorite: new Set<string>(),
    disabled: new Set<string>(),
    theme: "light",
    locale: "zhHans",
  });
  const store = ref(new Store(CONFIG_FILE));

  function isDisabled(name: MaybeRefOrGetter<string>): boolean {
    return config.value.disabled.has(toValue(name));
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
    await store.value.set(Keys.favorite, config.value.disabled);
  }

  async function toggleDisabled(name: MaybeRefOrGetter<string>) {
    const nameValue = toValue(name);

    if (isDisabled(name)) {
      config.value.disabled.delete(nameValue);
    } else {
      config.value.disabled.add(nameValue);
    }
    await store.value.set(Keys.disabled, config.value.disabled);
  }

  async function initConfig() {
    const favorite = await store.value.get<Set<string>>(Keys.favorite);
    config.value.favorite = favorite || new Set<string>();

    const disabled = await store.value.get<Set<string>>(Keys.disabled);
    config.value.disabled = disabled || new Set<string>();
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
