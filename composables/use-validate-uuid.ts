import type { MaybeRefOrGetter, Ref } from "vue";
import * as uuidLib from "uuid";

export interface UseValidateUuidReturn {
  valid: Ref<boolean>;
  version: Ref<number | null>;
}

// noinspection JSUnusedGlobalSymbols
export default function (
  uuid: MaybeRefOrGetter<string>,
): UseValidateUuidReturn {
  const valid = computed(() => uuidLib.validate(toValue(uuid)));
  const version = computed(() =>
    valid.value ? uuidLib.version(toValue(uuid)) : null,
  );

  return { valid, version };
}
