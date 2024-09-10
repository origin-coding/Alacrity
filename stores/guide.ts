import type { Ref } from "vue";

import useTauriStore from "~/stores/tauri-store";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";

const useGuideStore = defineStore("guide", () => {
  const guide: Ref<AlacrityConfig["guide"]> = ref(false);
  const tauriStore = useTauriStore();

  tauriStore.store.get<AlacrityConfig["guide"]>(Keys.guide).then((val) => {
    guide.value = val || false;
  });

  watch(guide, async (value) => {
    await tauriStore.store.set(Keys.guide, value);
    await tauriStore.store.save();
  });

  return { guide };
});

export default useGuideStore;
