import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import * as alacrityPlugins from "@/AlacrityPlugins";
import { Plugin, processPlugin } from "@/common";

const usePlugins = defineStore("plugins", () => {
  const plugins = ref<Array<Plugin>>([]);
  const router = useRouter();

  const currentPlugin = computed<Plugin | null>(() => {
    if (router.currentRoute.value.path === "/") {
      return null;
    }

    return (
      plugins.value.find((plugin) => {
        return plugin.Route! === router.currentRoute.value.path;
      }) ?? null
    );
  });

  function init() {
    plugins.value = [];

    Object.keys(alacrityPlugins).forEach((k) => {
      const key = k as keyof typeof alacrityPlugins;
      plugins.value.push(processPlugin(alacrityPlugins[key]));
    });

    // Initialize routes.
    for (const plugin of plugins.value) {
      router.addRoute({
        path: plugin.Route!.toString(),
        name: plugin.Name.toString(),
        component: plugin.View,
      });
    }
  }

  return { plugins, init, currentPlugin };
});

export default usePlugins;
