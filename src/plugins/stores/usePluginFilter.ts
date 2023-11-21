import { defineStore } from "pinia";
import { computed, ComputedRef, ref, Ref } from "vue";
import { useFuse } from "@vueuse/integrations/useFuse";

import { Category, Plugin } from "@/common";
import usePlugins from "./usePlugins";
import useFavorites from "./useFavorites";

const usePluginFilter = defineStore("pluginFilter", () => {
  const plugins = usePlugins();
  const favorites = useFavorites();

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
        keys: ["Name", "Author", "Description", "Categories"],
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
