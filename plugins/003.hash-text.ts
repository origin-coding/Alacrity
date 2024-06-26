// noinspection JSUnusedGlobalSymbols

import { AlacrityPluginType } from "~/types/alacrity-plugin";
import usePluginsStore from "~/stores/plugins";

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
