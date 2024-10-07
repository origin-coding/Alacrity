import { createStore } from "@tauri-apps/plugin-store";
import type { Ref } from "vue";

import {
  type AlacrityConfig,
  CONFIG_FILE,
  Keys,
} from "~/types/alacrity-config";

const useGuideStore = defineStore("guide", () => {
  const guide: Ref<AlacrityConfig["guide"]> = ref(false);

  createStore(CONFIG_FILE).then((store) => {
    store.get<AlacrityConfig["guide"]>(Keys.guide).then((val) => {
      guide.value = val || false;
    });
  });

  watch(guide, async (value) => {
    const store = await createStore(CONFIG_FILE);
    await store.set(Keys.guide, value);
    await store.save();
  });

  return { guide };
});

export default useGuideStore;
