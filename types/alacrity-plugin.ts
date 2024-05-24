export enum AlacrityPluginType {
  hash = "hash",
  encode = "encode",
}

// Logo for each plugin type.
type AlacrityPluginTypeLogo = {
  readonly [type in AlacrityPluginType]: string;
};
export const TypeLogos: AlacrityPluginTypeLogo = {
  hash: "fingerprint-3",
  encode: "calculator-1",
};

export interface AlacrityPlugin {
  id: string;
  type: AlacrityPluginType;
  icon: string;
}
