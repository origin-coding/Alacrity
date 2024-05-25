// noinspection JSUnusedGlobalSymbols

import pluginDescriptions from "./plugin-descriptions.json";
import pluginNames from "./plugin-names.json";
import groupNames from "./plugin-group-names.json";
import alacrityConfig from "./alacrity-config.json";

const messages = {
  "plugin-descriptions": pluginDescriptions,
  "plugin-names": pluginNames,
  "plugin-group-names": groupNames,
  "alacrity-config": alacrityConfig,
};

console.log(messages);

export default messages;
