import { createStore } from "@tauri-apps/plugin-store";
import type { ComputedRef, Ref } from "vue";

import type { AlacrityConfig } from "~/types/alacrity-config";
import { CONFIG_FILE, Keys } from "~/types/alacrity-config";

const useFavoriteStore = defineStore("favorite", () => {
  const favorite: Ref<AlacrityConfig["favorite"]> = ref(new Set<string>());

  createStore(CONFIG_FILE).then((store) => {
    store.get<Array<string>>(Keys.favorite).then((value) => {
      favorite.value = value !== null ? new Set(value) : new Set<string>();
    });
  });

  const allFavorite = computed(() => Array.from(favorite.value));

  const hasAnyFavorite = computed(() => favorite.value.size !== 0);

  type isFavoriteType = (id: string) => boolean;
  const isFavorite: ComputedRef<isFavoriteType> = computed(
    () => (id: string) => favorite.value.has(id),
  );

  async function toggleFavorite(id: string) {
    if (favorite.value.has(id)) {
      favorite.value.delete(id);
    } else {
      favorite.value.add(id);
    }

    const store = await createStore(CONFIG_FILE);

    await store.set(Keys.favorite, Array.from(favorite.value));
    await store.save();
  }

  return { allFavorite, hasAnyFavorite, isFavorite, toggleFavorite };
});

export default useFavoriteStore;
