import type { Ref } from "vue";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";
import useTauriStore from "~/stores/tauri-store";
import type { AlacrityThemeType } from "~/types/alacrity-theme";

const useThemeStore = defineStore("theme", () => {
  const theme: Ref<AlacrityConfig["theme"]> = ref("light");

  const tauriStore = useTauriStore();

  onMounted(async () => {
    const themeConfig = await tauriStore.store.get<AlacrityConfig["theme"]>(Keys.theme);
    theme.value = themeConfig || "light";
    document.documentElement.setAttribute("theme-mode", theme.value);
  });

  async function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
    await tauriStore.store.set(Keys.theme, theme.value);
    await tauriStore.store.save();
    document.documentElement.setAttribute("theme-mode", theme.value);
  }

  async function setTheme(themeVal: AlacrityThemeType) {
    theme.value = themeVal;
    document.documentElement.setAttribute("theme-mode", theme.value);
    await tauriStore.store.set(Keys.theme, theme.value);
    await tauriStore.store.save();
  }

  return { theme, toggleTheme, setTheme };
});

export default useThemeStore;
