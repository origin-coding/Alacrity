import merge from "lodash/merge";
import { type GlobalConfigProvider } from "tdesign-vue-next";
import en_US from "tdesign-vue-next/es/locale/en_US";
import zh_CN from "tdesign-vue-next/es/locale/zh_CN";

// Original locale definition.
export const AlacrityLocales = {
  en: "en",
  zhHans: "zhHans",
} as const;

// Exported locale type.
export type AlacrityLocaleType = keyof typeof AlacrityLocales;

// Exported locale list.
export const AlacrityLocaleList: Array<AlacrityLocaleType> = Object.keys(
  AlacrityLocales,
) as Array<AlacrityLocaleType>;

// Helper function for building TDesign's config suitable for Typescript.
// See: https://tdesign.tencent.com/vue-next/global-configuration-en.
function getDefault(source: unknown): GlobalConfigProvider {
  const empty: GlobalConfigProvider = {};
  return merge(empty, source);
}

// Mapping Alacrity's locale to TDesign's locale.
export const LocaleMappings: {
  [key in AlacrityLocaleType]: GlobalConfigProvider;
} = {
  [AlacrityLocales.en]: getDefault(en_US),
  [AlacrityLocales.zhHans]: getDefault(zh_CN),
};
