import {
  type AlacrityPlugin,
  type AlacrityPluginMeta,
} from "~/types/alacrity-plugin";
import type { i18nField, SearchInfo } from "~/types/search-info";
import { AlacrityLocales } from "~/types/alacrity-locale";
import { useFuse } from "@vueuse/integrations/useFuse";
import type { MaybeRefOrGetter } from "vue";

const useSearchInfo = defineStore("search-info", () => {
  const searchInfos = ref<Set<SearchInfo>>(new Set<SearchInfo>());
  const locales = ref<Array<keyof typeof AlacrityLocales>>([]);
  const search = ref<string>("");

  const searchKeys = computed<Array<string>>(() => {
    const result = ["id"];
    locales.value.forEach((locale) => {
      result.push(`name.${locale}`);
      result.push(`description.${locale}`);
    });
    return result;
  });

  const searchResults = computed<Array<SearchInfo>>(() =>
    useFuse<SearchInfo>(search, Array.from(searchInfos.value), {
      fuseOptions: { keys: searchKeys.value, isCaseSensitive: false },
      matchAllWhenSearchEmpty: true,
    }).results.value.map((res) => res.item),
  );

  function fromPlugin(
    plugin: MaybeRefOrGetter<AlacrityPluginMeta>,
  ): SearchInfo {
    const searchInfo = toValue(plugin) as SearchInfo;

    // These fields don't exist in AlacrityPlugin instance, so we need to construct them.
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

  function addSearchInfo(plugin: MaybeRefOrGetter<AlacrityPlugin>) {
    const searchInfo = fromPlugin(plugin);
    searchInfos.value.add(searchInfo);
  }

  function initSearchInfo() {
    // Cannot be put directly inside composable, so we put it here.
    const { t } = useI18n();

    searchInfos.value.forEach((searchInfo) => {
      let locale: keyof typeof AlacrityLocales;
      for (locale in AlacrityLocales) {
        searchInfo.name[locale] = t(`plugin-names.${searchInfo.id}`);
        searchInfo.description[locale] = t(
          `plugin-descriptions.${searchInfo.id}`,
        );
      }
    });

    // Init locales for searching.
    let locale: keyof typeof AlacrityLocales;
    for (locale in AlacrityLocales) {
      locales.value.push(locale);
    }
  }

  return { addSearchInfo, initSearchInfo, searchResults, search };
});

export default useSearchInfo;
