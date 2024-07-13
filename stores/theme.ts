import type { Ref } from "vue";
import { type AlacrityConfig, Keys } from "~/types/alacrity-config";
import useTauriStore from "~/stores/tauri-store";
import type { AlacrityThemeType } from "~/types/alacrity-theme";

const useThemeStore = defineStore("theme", () => {
  const theme: Ref<AlacrityConfig["theme"]> = ref("light");

  const tauriStore = useTauriStore();

  const colorMode = useColorMode();

  onMounted(async () => {
    const themeConfig = await tauriStore.store.get<AlacrityConfig["theme"]>(
      Keys.theme,
    );
    theme.value = themeConfig || "light";
    colorMode.preference = theme.value;
    document.documentElement.setAttribute("theme-mode", theme.value);
  });

  async function setTheme(themeVal: AlacrityThemeType) {
    theme.value = themeVal;
    document.documentElement.setAttribute("theme-mode", theme.value);
    await tauriStore.store.set(Keys.theme, theme.value);
    await tauriStore.store.save();
    colorMode.preference = theme.value;
  }

  return { theme, setTheme };
});

export default useThemeStore;
