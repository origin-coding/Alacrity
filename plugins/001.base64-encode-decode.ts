// noinspection JSUnusedGlobalSymbols

import { AlacrityPluginType } from "~/types/alacrity-plugin";
import useAlacrityPlugins from "~/stores/alacrity-plugins";
import GetPluginId from "~/utils/get-plugin-id";

export default defineNuxtPlugin({
  name: "Base64 Encode Decode",
  parallel: false,
  setup() {
    const { addPlugin } = useAlacrityPlugins();

    addPlugin({
      id: GetPluginId(import.meta.url),
      type: AlacrityPluginType.encode,
      icon: "braces",
    });
  },
});
