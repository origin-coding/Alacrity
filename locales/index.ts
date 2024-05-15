import type { VueMessageType } from "vue-i18n";
import type { LocaleMessage } from "@intlify/core-base";

const imports = import.meta.glob("./**/*.ts", { eager: true });

function getDirectory(path: string) {
  return path.split("/")[1];
}

const messages: { [x: string]: LocaleMessage<VueMessageType> } = {};

Object.entries(imports).forEach(([path, module]) => {
  module = (module as any).default;
  messages[getDirectory(path)] = module as LocaleMessage<VueMessageType>;
});

export default messages;
