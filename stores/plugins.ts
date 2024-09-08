import { defineStore } from "pinia";
import type { MaybeRefOrGetter } from "vue";

import useSearchStore from "~/stores/search";
import type { AlacrityPlugin } from "~/types/alacrity-plugin";

const usePluginsStore = defineStore("plugins", () => {
  const searchStore = useSearchStore();

  const plugins = ref<Set<AlacrityPlugin>>(new Set<AlacrityPlugin>());

  const allPlugins = computed(() => Array.from(plugins.value));

  // Group plugins by type, used in side menu.
  const groupedPlugins = computed(() => {
    return Object.groupBy(plugins.value, (plugin) => plugin.type);
  });

  function addPlugin(plugin: MaybeRefOrGetter<AlacrityPlugin>): void {
    plugin = toValue(plugin);
    plugins.value.add(plugin);
    searchStore.addSearchInfo(plugin.id);
  }

  return { allPlugins, groupedPlugins, addPlugin };
});

export default usePluginsStore;
