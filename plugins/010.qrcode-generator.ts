// noinspection JSUnusedGlobalSymbols

import { AlacrityPluginType } from "~/types/alacrity-plugin";
import usePluginsStore from "~/stores/plugins";

export default defineNuxtPlugin({
  name: "QR Code Generator",
  parallel: false,
  setup() {
    const { addPlugin } = usePluginsStore();

    addPlugin({
      id: "qrcode-generator",
      type: AlacrityPluginType.web,
    });
  },
});
