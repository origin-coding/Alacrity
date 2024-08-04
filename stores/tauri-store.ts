import { Store } from "tauri-plugin-store-api";
import type { Ref } from "vue";

import { CONFIG_FILE } from "~/types/alacrity-config";

const useTauriStore = defineStore("tauri-store", () => {
  const store: Ref<Store> = ref(new Store(CONFIG_FILE));

  return { store };
});

export default useTauriStore;
