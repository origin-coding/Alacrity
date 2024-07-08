// noinspection JSUnusedGlobalSymbols

import { AlacrityPluginType } from "~/types/alacrity-plugin";
import usePluginsStore from "~/stores/plugins";

export default defineNuxtPlugin({
  name: "UUID Generator",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "uuid-generator",
      type: AlacrityPluginType.web,
    });
  },
});
