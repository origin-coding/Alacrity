// noinspection JSUnusedGlobalSymbols

import usePluginsStore from "~/stores/plugins";
import { AlacrityPluginType } from "~/types/alacrity-plugin";

export default defineNuxtPlugin({
  name: "Roman Converter",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "roman-converter",
      type: AlacrityPluginType.converter,
    });
  },
});
