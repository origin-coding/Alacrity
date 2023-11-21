import { Plugin } from "@/common";
import * as pluginInfo from "./plugin.json";
import pluginView from "./plugin.vue";

const plugin: Plugin = {
    ...pluginInfo,
    View: pluginView,
};

export default plugin;
