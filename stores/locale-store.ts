import type { Ref } from "vue";
import type { AlacrityConfig } from "~/types/alacrity-config";
import useTauriStore from "~/stores/tauri-store";
import { Keys } from "~/types/alacrity-config";

const useLocaleStore = defineStore("locale", () => {
  const locale: Ref<AlacrityConfig["locale"]> = ref("en");
  const { locale: i18nLocale } = useI18n();

  const tauriStore = useTauriStore();

  onMounted(() => {
    tauriStore.store
      .get<AlacrityConfig["locale"]>(Keys.locale)
      .then((value) => {
        locale.value = value || "en";
        i18nLocale.value = locale.value;
      });
  });

  async function setLocale(localeConfig: AlacrityConfig["locale"]) {
    locale.value = localeConfig;
    i18nLocale.value = locale.value;
    await tauriStore.store.set(Keys.locale, locale.value);
    await tauriStore.store.save();
  }

  return { locale, setLocale };
});

export default useLocaleStore;
