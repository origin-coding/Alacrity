import type { Component, ShallowRef } from "vue";
import {
  Calculator1Icon,
  Fingerprint3Icon,
  InternetIcon,
} from "tdesign-icons-vue-next";

export enum AlacrityPluginType {
  hash = "hash",
  encode = "encode",
  web = "web",
}

// Logo for each plugin type.
type AlacrityPluginTypeLogo = {
  readonly [type in AlacrityPluginType]: ShallowRef<Component>;
};
export const TypeLogos: AlacrityPluginTypeLogo = {
  hash: shallowRef(Fingerprint3Icon),
  encode: shallowRef(Calculator1Icon),
  web: shallowRef(InternetIcon),
};

export interface AlacrityPlugin {
  id: string;
  type: AlacrityPluginType;
}
