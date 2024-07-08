import type { MaybeRefOrGetter } from "vue";
import * as uuidLib from "uuid";

// Create an array from GenerationVersions
export const uuidVersions = [
  "NIL",
  "v1",
  "v3",
  "v4",
  "v5",
  "v6",
  "v7",
] as const;

// Create a type from GenerationVersions
export type UuidVersions = (typeof uuidVersions)[number];

export interface UseGenerateUuidOptions {
  count: MaybeRefOrGetter<number>;
  version: MaybeRefOrGetter<UuidVersions>;
  namespace: MaybeRefOrGetter<string | null>;
  name: MaybeRefOrGetter<string | null>;
  onSuccess: (uuidArray: string[]) => void;
  onError: (status: GenerationStatus) => void;
}

export type GenerationStatus =
  | "SUCCESS" // Everything is good.
  | "INVALID_COUNT" // Count is beyond range.
  | "MISSING_NAMESPACE" // Namespace is required for version 3 and 5.
  | "INVALID_NAMESPACE" // Namespace is not a valid UUID.
  | "MISSING_NAME"; // Name is required for version 3 and 5.

export interface UseGenerateUuidReturn {
  generate: () => void;
}

// noinspection JSUnusedGlobalSymbols
export default function useGenerateUuid(
  options: UseGenerateUuidOptions,
): UseGenerateUuidReturn {
  const data = ref<string[]>([]);

  const status = computed<GenerationStatus>(() => {
    const count = toValue(options.count);
    if (count < 0) {
      return "INVALID_COUNT";
    }

    const version = toValue(options.version);
    if (version === "v3" || version === "v5") {
      const namespace = toValue(options.namespace);
      if (!namespace) {
        return "MISSING_NAMESPACE";
      }

      if (!uuidLib.validate(namespace)) {
        return "INVALID_NAMESPACE";
      }

      if (!toValue(options.name)) {
        return "MISSING_NAME";
      }
    }

    return "SUCCESS";
  });

  function generate() {
    if (status.value !== "SUCCESS") {
      options.onError(status.value);
      return;
    }

    data.value = Array.from({ length: toValue(options.count) }).map((_) => {
      const version = toValue(options.version);

      if (version === "NIL") {
        return uuidLib.NIL;
      }

      if (version === "v3" || version === "v5") {
        return uuidLib[version](
          toValue(options.name)!,
          toValue(options.namespace)!,
        );
      }

      if (version === "v1" || version === "v4" || version === "v6") {
        return uuidLib[version]();
      }
      return uuidLib[version]();
    });
    options.onSuccess(data.value);
  }

  return { generate };
}
