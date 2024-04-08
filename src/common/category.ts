interface CategoryInfo {
  locale: string; // Used for I18n.
  icon: string;
}

type InternalCatId = "All" | "Favorite";
const internalCategories: Record<InternalCatId, CategoryInfo> = {
  All: { locale: "all", icon: "mdi-view-dashboard" },
  Favorite: { locale: "favorite", icon: "mdi-star" },
};

const normalCategories = {
  Encrypt: { locale: "encrypt", icon: "mdi-lock" },
  Hash: { locale: "hash", icon: "mdi-pound-box" },
  CheatSheet: { locale: "cheat-sheet", icon: "mdi-list-box" },
  CodeSnippet: { locale: "code-snippet", icon: "mdi-code-braces-box" },
  Format: { locale: "formatter", icon: "mdi-file-code" },
  Generator: { locale: "generator", icon: "mdi-pencil-box" },
  Validator: { locale: "validator", icon: "mdi-checkbox-multiple-marked" },
  Converter: { locale: "converter", icon: "mdi-file-sync" },
  Parser: { locale: "parser", icon: "mdi-link-box-variant" },
};

const categories = {
  ...internalCategories,
  ...normalCategories,
};

export { categories };

type InternalCategory = keyof typeof internalCategories;
type NormalCategory = keyof typeof normalCategories;
// type Category = keyof typeof categories;
type Category = InternalCategory | NormalCategory;

export { type Category, type InternalCategory, type NormalCategory };
