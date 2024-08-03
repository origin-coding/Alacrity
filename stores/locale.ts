import type { Ref } from "vue";
import type { AlacrityConfig } from "~/types/alacrity-config";
import useTauriStore from "~/stores/tauri-store";
import { Keys } from "~/types/alacrity-config";

const useLocaleStore = defineStore("locale", () => {
  const locale: Ref<AlacrityConfig["locale"]> = ref("en");
  const { locale: i18nLocale } = useI18n();

  const tauriStore = useTauriStore();

  tauriStore.store.get<AlacrityConfig["locale"]>(Keys.locale).then((val) => {
    locale.value = val || "en";
    i18nLocale.value = locale.value;
  });

  watch(locale, async (value) => {
    i18nLocale.value = value;
    await tauriStore.store.set(Keys.locale, value);
    await tauriStore.store.save();
  });

  return { locale };
});

export default useLocaleStore;
