import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { Plugin, processPlugin } from "@/common";
import * as alacrityPlugins from "@/AlacrityPlugins";
import { useRouter } from "vue-router";

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

    for (let k in alacrityPlugins) {
      let key = k as keyof typeof alacrityPlugins;
      plugins.value.push(processPlugin(alacrityPlugins[key]));
    }

    // Initialize routes.
    for (let plugin of plugins.value) {
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
