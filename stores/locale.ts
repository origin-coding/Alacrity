import { createStore } from "@tauri-apps/plugin-store";
import type { Ref } from "vue";

import { type AlacrityConfig, CONFIG_FILE } from "~/types/alacrity-config";
import { Keys } from "~/types/alacrity-config";

const useLocaleStore = defineStore("locale", () => {
  const locale: Ref<AlacrityConfig["locale"]> = ref("en");
  const { locale: i18nLocale } = useI18n();

  createStore(CONFIG_FILE).then((store) => {
    store.get<AlacrityConfig["locale"]>(Keys.locale).then((val) => {
      locale.value = val || "system";
      i18nLocale.value = mapLocale(locale.value);
    });
  });

  watch(locale, async (value) => {
    i18nLocale.value = mapLocale(locale.value);
    const store = await createStore(CONFIG_FILE);
    await store.set(Keys.locale, value);
    await store.save();
  });

  return { locale };
});

export default useLocaleStore;
