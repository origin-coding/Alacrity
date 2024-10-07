import { createStore } from "@tauri-apps/plugin-store";
import type { Ref } from "vue";

import {
  type AlacrityConfig,
  CONFIG_FILE,
  Keys,
} from "~/types/alacrity-config";

const useThemeStore = defineStore("theme", () => {
  const theme: Ref<AlacrityConfig["theme"]> = ref("light");
  const colorMode = useColorMode();

  createStore(CONFIG_FILE).then((store) => {
    store.get<AlacrityConfig["theme"]>(Keys.theme).then((val) => {
      theme.value = val || "system";
      colorMode.preference = theme.value;
      applyTDesignTheme();
    });
  });

  watch(theme, async (value) => {
    colorMode.preference = value;
    applyTDesignTheme();

    const store = await createStore(CONFIG_FILE);
    await store.set(Keys.theme, value);
    await store.save();
  });

  function applyTDesignTheme() {
    colorMode.forced = true;
    const value =
      colorMode.preference === "system"
        ? colorMode.value
        : colorMode.preference;
    document.documentElement.setAttribute("theme-mode", value);
  }

  return { theme };
});

export default useThemeStore;
