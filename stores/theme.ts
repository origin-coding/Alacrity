import type { Ref } from "vue";

import useTauriStore from "~/stores/tauri-store";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";

const useThemeStore = defineStore("theme", () => {
  const theme: Ref<AlacrityConfig["theme"]> = ref("light");
  const tauriStore = useTauriStore();
  const colorMode = useColorMode();

  tauriStore.store.get<AlacrityConfig["theme"]>(Keys.theme).then((val) => {
    val = val || "system";
    colorMode.preference = val;
    theme.value = val;
    document.documentElement.setAttribute("theme-mode", colorMode.value);
  });

  watch(theme, async (value) => {
    colorMode.preference = value;
    document.documentElement.setAttribute("theme-mode", colorMode.value);
    await tauriStore.store.set(Keys.theme, value);
    await tauriStore.store.save();
  });

  return { theme };
});

export default useThemeStore;
