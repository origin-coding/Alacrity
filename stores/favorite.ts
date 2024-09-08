import type { ComputedRef, Ref } from "vue";

import useTauriStore from "~/stores/tauri-store";
import type { AlacrityConfig } from "~/types/alacrity-config";
import { Keys } from "~/types/alacrity-config";

const useFavoriteStore = defineStore("favorite", () => {
  const favorite: Ref<AlacrityConfig["favorite"]> = ref(new Set<string>());

  const tauriStore = useTauriStore();

  tauriStore.store.get<Array<string>>(Keys.favorite).then((value) => {
    favorite.value = value !== null ? new Set(value) : new Set<string>();
  });

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

    await tauriStore.store.set(Keys.favorite, Array.from(favorite.value));
    await tauriStore.store.save();
  }

  return { hasAnyFavorite, isFavorite, toggleFavorite };
});

export default useFavoriteStore;
