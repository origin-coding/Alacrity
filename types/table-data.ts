import type { ParsedContentMeta } from "@nuxt/content";

export interface TableData<T> extends ParsedContentMeta {
  body: Array<T>;
}
