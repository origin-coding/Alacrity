import type { Ref } from "vue";

import useTauriStore from "~/stores/tauri-store";
import type { AlacrityConfig } from "~/types/alacrity-config";
import { Keys } from "~/types/alacrity-config";

const useLocaleStore = defineStore("locale", () => {
  const locale: Ref<AlacrityConfig["locale"]> = ref("en");
  const { locale: i18nLocale } = useI18n();

  const tauriStore = useTauriStore();

  tauriStore.store.get<AlacrityConfig["locale"]>(Keys.locale).then((val) => {
    locale.value = val || "system";
    i18nLocale.value = mapLocale(locale.value);
  });

  watch(locale, async (value) => {
    i18nLocale.value = mapLocale(locale.value);
    await tauriStore.store.set(Keys.locale, value);
    await tauriStore.store.save();
  });

  return { locale };
});

export default useLocaleStore;
