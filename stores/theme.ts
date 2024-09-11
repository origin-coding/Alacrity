import type { Ref } from "vue";

import useTauriStore from "~/stores/tauri-store";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";

const useThemeStore = defineStore("theme", () => {
  const theme: Ref<AlacrityConfig["theme"]> = ref("light");
  const tauriStore = useTauriStore();
  const colorMode = useColorMode();

  tauriStore.store.get<AlacrityConfig["theme"]>(Keys.theme).then((val) => {
    theme.value = val || "system";
    colorMode.preference = theme.value;
    applyTDesignTheme();
  });

  watch(theme, async (value) => {
    colorMode.preference = value;
    applyTDesignTheme();
    await tauriStore.store.set(Keys.theme, value);
    await tauriStore.store.save();
  });

  function applyTDesignTheme() {
    const value =
      colorMode.preference === "system"
        ? colorMode.value
        : colorMode.preference;
    document.documentElement.setAttribute("theme-mode", value);
  }

  return { theme };
});

export default useThemeStore;
