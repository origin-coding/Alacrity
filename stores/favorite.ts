import type { ComputedRef, Ref } from "vue";
import type { AlacrityConfig } from "~/types/alacrity-config";
import useTauriStore from "~/stores/tauri-store";
import { Keys } from "~/types/alacrity-config";

const useFavoriteStore = defineStore("favorite", () => {
  const favorite: Ref<AlacrityConfig["favorite"]> = ref(new Set<string>());

  const tauriStore = useTauriStore();

  onMounted(async () => {
    // JSON cannot represent a Set, so we store it as an array.
    const favoriteConfig = await tauriStore.store.get<Array<string>>(Keys.favorite);
    favorite.value =
      favoriteConfig !== null ? new Set(favoriteConfig) : new Set<string>();
  });

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

  return { isFavorite, toggleFavorite };
});

export default useFavoriteStore;
