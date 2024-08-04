// noinspection JSUnusedGlobalSymbols

import usePluginsStore from "~/stores/plugins";
import { AlacrityPluginType } from "~/types/alacrity-plugin";

export default defineNuxtPlugin({
  name: "UUID Validator",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "uuid-validator",
      type: AlacrityPluginType.web,
    });
  },
});
