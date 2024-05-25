import { defineStore } from "pinia";
import { type AlacrityPlugin } from "~/types/alacrity-plugin";
import useSearchStore from "~/stores/search-store";
import type { MaybeRefOrGetter } from "vue";

const usePluginsStore = defineStore("plugins", () => {
  const searchStore = useSearchStore();

  const plugins = ref<Set<AlacrityPlugin>>(new Set<AlacrityPlugin>());

  // Group plugins by type, used in side menu.
  const groupedPlugins = computed(() => {
    return Object.groupBy(plugins.value, (plugin) => plugin.type);
  });

  function addPlugin(plugin: MaybeRefOrGetter<AlacrityPlugin>): void {
    plugin = toValue(plugin);
    plugins.value.add(plugin);
    searchStore.addSearchInfo(plugin.id);
  }

  return { groupedPlugins, addPlugin };
});

export default usePluginsStore;
