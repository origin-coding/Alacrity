// noinspection JSUnusedGlobalSymbols

import { AlacrityPluginType } from "~/types/alacrity-plugin";
import usePluginsStore from "~/stores/plugins";

export default defineNuxtPlugin({
  name: "Git Cheat Sheet",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "git-cheat-sheet",
      type: AlacrityPluginType.cheat,
    });
  },
});
