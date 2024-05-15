import { defineStore } from "pinia";
import {
  type AlacrityPlugin,
  type AlacrityPluginMeta,
} from "~/types/alacrity-plugin";
import useAlacrityConfig from "~/stores/alacrity-config";
import useSearchInfo from "~/stores/search-info";
import type { MaybeRefOrGetter } from "vue";

const useAlacrityPlugins = defineStore("alacrity-plugins", () => {
  const { isInFavorite, isDisabled } = useAlacrityConfig();
  const { addSearchInfo } = useSearchInfo();

  const plugins = ref<Set<AlacrityPlugin>>(new Set<AlacrityPlugin>());

  const groupedPlugins = computed(() => {
    return Object.groupBy(plugins.value, (plugin) => plugin.type);
  });

  function fromPluginMeta(
    meta: MaybeRefOrGetter<AlacrityPluginMeta>,
  ): AlacrityPlugin {
    const metaValue = toValue(meta);

    return {
      ...metaValue,
      route: getPluginRoute(metaValue.id),
      favorite: isInFavorite(metaValue.id),
      enabled: !isDisabled(metaValue.id),
    };
  }

  function addPlugin(pluginMeta: MaybeRefOrGetter<AlacrityPluginMeta>): void {
    const plugin = fromPluginMeta(pluginMeta);
    plugins.value.add(plugin);
    addSearchInfo(plugin);
  }

  return { plugins, groupedPlugins, addPlugin };
});

export default useAlacrityPlugins;
