// noinspection JSUnusedGlobalSymbols

import { AlacrityPluginType } from "~/types/alacrity-plugin";
import usePluginsStore from "~/stores/plugins";

export default defineNuxtPlugin({
  name: "Http Status Code",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "http-status-code",
      type: AlacrityPluginType.cheat,
    });
  },
});
