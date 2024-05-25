import type { i18nField, SearchInfo } from "~/types/search-info";
import { AlacrityLocales } from "~/types/alacrity-locale";
import { useFuse } from "@vueuse/integrations/useFuse";
import type { MaybeRefOrGetter, Ref } from "vue";
import useLocaleConfig from "~/stores/locale-config";
import { tPluginDescription, tPluginName } from "#build/imports";

const useSearchInfo = defineStore("search-info", () => {
  const searchInfos = ref<Set<SearchInfo>>(new Set<SearchInfo>());
  const searchKeys: Ref<Array<string>> = ref([]);
  const search = ref<string>("");

  const searchResults = computed<Array<SearchInfo>>(() =>
    useFuse<SearchInfo>(search, Array.from(searchInfos.value), {
      fuseOptions: { keys: searchKeys.value, isCaseSensitive: false },
      matchAllWhenSearchEmpty: true,
    }).results.value.map((res) => res.item.id),
  );

  function constructSearchInfo(id: MaybeRefOrGetter<string>): SearchInfo {
    const searchInfo = { id } as SearchInfo;

    // These fields don't exist in AlacrityPlugin, so we need to construct them.
    const name = {} as i18nField;
    const description = {} as i18nField;

    let locale: keyof typeof AlacrityLocales;
    for (locale in AlacrityLocales) {
      name[locale] = "";
      description[locale] = "";
    }

    // Add these fields.
    searchInfo.name = name;
    searchInfo.description = description;

    return searchInfo;
  }

  function addSearchInfo(id: MaybeRefOrGetter<string>) {
    const searchInfo = constructSearchInfo(id);
    searchInfos.value.add(searchInfo);
  }

  function initSearchInfo() {
    // Cannot be put directly inside composable, so we put it here.
    const { locale: localeConfig } = useLocaleConfig();
    const { t, locale: currentLocale } = useI18n();

    searchInfos.value.forEach((searchInfo) => {
      let locale: keyof typeof AlacrityLocales;
      for (locale in AlacrityLocales) {
        // Switch vue-i18n's locale to each locale values.
        currentLocale.value = locale;
        searchInfo.name[locale] = t(tPluginName(searchInfo.id));
        searchInfo.description[locale] = t(tPluginDescription(searchInfo.id));
      }
      // Restore vue-i18n's locale from config.
      currentLocale.value = localeConfig;
    });

    // Init keys for searching.
    let locale: keyof typeof AlacrityLocales;
    for (locale in AlacrityLocales) {
      searchKeys.value.push(`name.${locale}`);
      searchKeys.value.push(`description.${locale}`);
    }
  }

  return { addSearchInfo, initSearchInfo, searchResults, search, searchInfos };
});

export default useSearchInfo;
