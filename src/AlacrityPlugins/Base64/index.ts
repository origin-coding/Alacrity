import { Plugin } from "@/common";

import * as pluginInfo from "./plugin.json";
import pluginView from "./PluginView.vue";

const plugin: Plugin = {
  ...pluginInfo,
  View: pluginView,
};

export default plugin;
