import { createStore } from "@tauri-apps/plugin-store";
import type { Ref } from "vue";

import {
  type AlacrityConfig,
  CONFIG_FILE,
  Keys,
} from "~/types/alacrity-config";

const useCollapsedStore = defineStore("collapsed", () => {
  const collapsed: Ref<AlacrityConfig["collapsed"]> = ref(false);

  createStore(CONFIG_FILE).then((store) => {
    store.get<AlacrityConfig["collapsed"]>(Keys.collapsed).then((val) => {
      collapsed.value = val || false;
    });
  });

  watch(collapsed, async (value) => {
    const store = await createStore(CONFIG_FILE);
    await store.set(Keys.collapsed, value);
    await store.save();
  });

  return { collapsed };
});

export default useCollapsedStore;
