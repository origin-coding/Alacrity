import type { Ref } from "vue";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";
import useTauriStore from "~/stores/tauri-store";

const useThemeConfig = defineStore("theme", () => {
  const theme: Ref<AlacrityConfig["theme"]> = ref("light");

  const { store } = useTauriStore();

  onMounted(async () => {
    const themeConfig = await store.get<AlacrityConfig["theme"]>(Keys.theme);
    theme.value = themeConfig || "light";
    document.documentElement.setAttribute("theme-mode", theme.value);
  });

  async function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
    await store.set(Keys.theme, theme.value);
    await store.save();
    document.documentElement.setAttribute("theme-mode", theme.value);
  }

  return { theme, toggleTheme };
});

export default useThemeConfig;
