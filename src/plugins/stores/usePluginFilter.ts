import { useFuse } from "@vueuse/integrations/useFuse";
import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";
import { useI18n } from "vue-i18n";

import { Category, Plugin } from "@/common";

import useFavorites from "./useFavorites";
import usePlugins from "./usePlugins";

const usePluginFilter = defineStore("pluginFilter", () => {
  const plugins = usePlugins();
  const favorites = useFavorites();
  const { locale } = useI18n();

  const category: Ref<Category> = ref("All");
  const search: Ref<string> = ref("");

  const filteredPlugins: ComputedRef<Array<Plugin>> = computed(() => {
    // If searching for favorite plugins.
    if (category.value === "Favorite") {
      return plugins.plugins.filter((plugin) => favorites.inFavorites(plugin));
    }

    // Filter by category.
    const filtered: Array<Plugin> =
      category.value === "All"
        ? plugins.plugins
        : plugins.plugins.filter((plugin) =>
            plugin.Categories.includes(category.value as string),
          );

    // Search with useFuse.
    return useFuse(search.value, filtered, {
      fuseOptions: {
        keys: [
          "Name",
          "Author",
          "Description",
          "Categories",
          `Locale.Name.${locale.value}`,
          `Locale.Description.${locale.value}`,
        ],
        isCaseSensitive: false,
        threshold: undefined,
      },
      matchAllWhenSearchEmpty: true,
    }).results.value.map((res) => res.item);
  });

  function setCategory(newCategory: Category) {
    category.value = newCategory;
  }

  function setSearch(newSearch: string) {
    search.value = newSearch;
  }

  return { filteredPlugins, setCategory, setSearch };
});

export default usePluginFilter;
