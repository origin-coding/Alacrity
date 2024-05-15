// noinspection JSUnusedGlobalSymbols

import { AlacrityPluginType } from "~/types/alacrity-plugin";
import useAlacrityPlugins from "~/stores/alacrity-plugins";

export default defineNuxtPlugin({
  name: "Base64 Encode Decode",
  parallel: false,
  setup() {
    const { addPlugin } = useAlacrityPlugins();

    addPlugin({
      id: "base64-encode-decode",
      type: AlacrityPluginType.encode,
      icon: "braces",
    });
  },
});
