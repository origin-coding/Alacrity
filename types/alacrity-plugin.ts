import {
  Calculator1Icon,
  Fingerprint3Icon,
  InternetIcon,
  StickyNoteIcon,
} from "tdesign-icons-vue-next";
import type { Component, ShallowRef } from "vue";

export enum AlacrityPluginType {
  hash = "hash",
  encode = "encode",
  web = "web",
  cheat = "cheat",
}

// Logo for each plugin type.
type AlacrityPluginTypeLogo = {
  readonly [type in AlacrityPluginType]: ShallowRef<Component>;
};
export const TypeLogos: AlacrityPluginTypeLogo = {
  hash: shallowRef(Fingerprint3Icon),
  encode: shallowRef(Calculator1Icon),
  web: shallowRef(InternetIcon),
  cheat: shallowRef(StickyNoteIcon),
};

export interface AlacrityPlugin {
  id: string;
  type: AlacrityPluginType;
}
