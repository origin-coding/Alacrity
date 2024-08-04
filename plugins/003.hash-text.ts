// noinspection JSUnusedGlobalSymbols

import usePluginsStore from "~/stores/plugins";
import { AlacrityPluginType } from "~/types/alacrity-plugin";

export default defineNuxtPlugin({
  name: "Hash Text",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "hash-text",
      type: AlacrityPluginType.hash,
    });
  },
});
