import type { Ref } from "vue";

import useTauriStore from "~/stores/tauri-store";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";

const useThemeStore = defineStore("theme", () => {
  const theme: Ref<AlacrityConfig["theme"]> = ref("light");
  const tauriStore = useTauriStore();
  const colorMode = useColorMode();

  tauriStore.store.get<AlacrityConfig["theme"]>(Keys.theme).then((val) => {
    colorMode.preference = val || "system";
    theme.value = colorMode.value as AlacrityConfig["theme"];
    document.documentElement.setAttribute("theme-mode", theme.value);
  });

  watch(theme, async (value) => {
    document.documentElement.setAttribute("theme-mode", value);
    colorMode.preference = value;
    await tauriStore.store.set(Keys.theme, value);
    await tauriStore.store.save();
  });

  return { theme };
});

export default useThemeStore;
