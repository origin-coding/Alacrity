// noinspection JSUnusedGlobalSymbols

import { AlacrityPluginType } from "~/types/alacrity-plugin";
import usePluginsStore from "~/stores/plugins";
import { BracesIcon } from "tdesign-icons-vue-next";

export default defineNuxtPlugin({
  name: "Base64 Encode Decode",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "base64-encode-decode",
      type: AlacrityPluginType.encode,
      icon: shallowRef(BracesIcon),
    });
  },
});
