import * as uuidLib from "uuid";
import type { MaybeRefOrGetter, Ref } from "vue";

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
