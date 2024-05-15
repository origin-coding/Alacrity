export enum AlacrityPluginType {
  hash = "hash",
  encode = "encode",
}

// Logo for each plugin type.
type AlacrityPluginTypeLogo = {
  [type in AlacrityPluginType]: string;
};
export const TypeLogos: AlacrityPluginTypeLogo = {
  hash: "fingerprint-3",
  encode: "calculator-1",
};

export interface AlacrityPluginMeta {
  id: string;
  type: AlacrityPluginType;
  icon: string;
}

export interface AlacrityPlugin extends AlacrityPluginMeta {
  route: string;
  enabled: boolean;
  favorite: boolean;
}
