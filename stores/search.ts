import { useFuse } from "@vueuse/integrations/useFuse";
import type { MaybeRefOrGetter, Ref } from "vue";

import { tPluginDescription, tPluginName } from "#build/imports";
import useLocaleStore from "~/stores/locale";
import {
  AlacrityLocaleList,
  type AlacrityLocaleType,
} from "~/types/alacrity-locale";
import type { i18nField, SearchInfo } from "~/types/search-info";

const useSearchStore = defineStore("search-info", () => {
  const searchInfos = ref<Set<SearchInfo>>(new Set<SearchInfo>());
  const searchKeys: Ref<Array<string>> = ref([]);
  const search = ref<string>("");

  const searchResults = computed<Array<string>>(() =>
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

    for (const locale in AlacrityLocaleList) {
      name[locale as AlacrityLocaleType] = "";
      description[locale as AlacrityLocaleType] = "";
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
    const localeConfig = useLocaleStore();
    const { t, locale: currentLocale } = useI18n();

    searchInfos.value.forEach((searchInfo) => {
      for (const locale in AlacrityLocaleList) {
        // Switch vue-i18n's locale to each locale values.
        currentLocale.value = locale;
        searchInfo.name[locale as AlacrityLocaleType] = t(
          tPluginName(searchInfo.id),
        );
        searchInfo.description[locale as AlacrityLocaleType] = t(
          tPluginDescription(searchInfo.id),
        );
      }
      // Restore vue-i18n's locale from config.
      currentLocale.value = localeConfig.locale;
    });

    // Init keys for searching.
    for (const locale in AlacrityLocaleList) {
      searchKeys.value.push(`name.${locale}`);
      searchKeys.value.push(`description.${locale}`);
    }
  }

  return { addSearchInfo, initSearchInfo, searchResults, search, searchInfos };
});

export default useSearchStore;
