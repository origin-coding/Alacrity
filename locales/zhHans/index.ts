// noinspection JSUnusedGlobalSymbols

import alacrityConfig from "./alacrity-config.json";
import pluginDescriptions from "./plugin-descriptions.json";
import groupNames from "./plugin-group-names.json";
import pluginNames from "./plugin-names.json";

const messages = {
  "plugin-descriptions": pluginDescriptions,
  "plugin-names": pluginNames,
  "plugin-group-names": groupNames,
  "alacrity-config": alacrityConfig,
};

console.log(messages);

export default messages;
