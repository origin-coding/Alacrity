import locales from "./locale";

type LocalizedCheatSheetDataItem = Partial<{
  [key in locales]: string | number | undefined;
}>;

interface CheatSheetDataItem {
  [key: string]: string | number | LocalizedCheatSheetDataItem | undefined;
}

type CheatSheetData = Array<CheatSheetDataItem>;

interface VuetifyHeaderItem {
  key: string;
  title?: string;

  // Properties used for styles like width etc.
  // Copied from Vuetify 's source code.
  width?: string | number;
  align?: "start" | "end" | "center";
}

interface CheatSheetHeaderItem {
  localizedHeader: boolean;
  localizedData: boolean;
  header: VuetifyHeaderItem;
}

type VuetifyHeaders = Array<VuetifyHeaderItem>;
type CheatSheetHeaders = Array<CheatSheetHeaderItem>;

export type { CheatSheetData, VuetifyHeaders, CheatSheetHeaders };
