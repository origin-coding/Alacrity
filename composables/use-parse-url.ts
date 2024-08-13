import type { MaybeRefOrGetter } from "vue";

// noinspection JSUnusedGlobalSymbols
export default function (url: MaybeRefOrGetter<string>) {
  const isUrl = computed(() => URL.canParse(toValue(url)));

  const parsed = computed(() => (isUrl.value ? new URL(toValue(url)) : null));

  return { isUrl, parsed };
}
