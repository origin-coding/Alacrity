// noinspection JSUnusedGlobalSymbols

import usePluginsStore from "~/stores/plugins";
import { AlacrityPluginType } from "~/types/alacrity-plugin";

export default defineNuxtPlugin({
  name: "URL Parser",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "url-parser",
      type: AlacrityPluginType.web,
    });
  },
});
