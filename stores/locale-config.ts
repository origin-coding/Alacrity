import type { Ref } from "vue";
import type { AlacrityConfig } from "~/types/alacrity-config";
import useTauriStore from "~/stores/tauri-store";
import { Keys } from "~/types/alacrity-config";

const useLocaleConfig = defineStore("locale", () => {
  const locale: Ref<AlacrityConfig["locale"]> = ref("en");
  const { locale: i18nLocale } = useI18n();

  const { store } = useTauriStore();

  onMounted(async () => {
    const localeConfig = await store.get<AlacrityConfig["locale"]>(Keys.locale);
    locale.value = localeConfig || "en";
    i18nLocale.value = locale.value;
  });

  async function setLocale(localeConfig: AlacrityConfig["locale"]) {
    locale.value = localeConfig;
    await store.set(Keys.locale, locale.value);
    await store.save();
    i18nLocale.value = locale.value;
  }

  return { locale, setLocale };
});

export default useLocaleConfig;
