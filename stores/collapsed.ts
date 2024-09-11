import type { Ref } from "vue";

import useTauriStore from "~/stores/tauri-store";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";

const useCollapsedStore = defineStore("collapsed", () => {
  const collapsed: Ref<AlacrityConfig["collapsed"]> = ref(false);
  const tauriStore = useTauriStore();

  tauriStore.store
    .get<AlacrityConfig["collapsed"]>(Keys.collapsed)
    .then((val) => {
      collapsed.value = val || false;
    });

  watch(collapsed, async (value) => {
    await tauriStore.store.set(Keys.collapsed, value);
    await tauriStore.store.save();
  });

  return { collapsed };
});

export default useCollapsedStore;
