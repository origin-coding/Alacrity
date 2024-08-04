import type { Ref } from "vue";

import useTauriStore from "~/stores/tauri-store";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";

const useThemeStore = defineStore("theme", () => {
  const theme: Ref<AlacrityConfig["theme"]> = ref("light");
  const tauriStore = useTauriStore();
  const colorMode = useColorMode();

  tauriStore.store.get<AlacrityConfig["theme"]>(Keys.theme).then((val) => {
    theme.value = val || "light";
    colorMode.preference = theme.value;
    document.documentElement.setAttribute("theme-mode", theme.value);
  });

  watch(theme, async (value) => {
    document.documentElement.setAttribute("theme-mode", value);
    await tauriStore.store.set(Keys.theme, value);
    await tauriStore.store.save();
    colorMode.preference = value;
  });

  return { theme };
});

export default useThemeStore;
