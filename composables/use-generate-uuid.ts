import type { MaybeRefOrGetter } from "vue";
import * as uuidLib from "uuid";
import type { EventHookOn } from "@vueuse/core";

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
  count: number;
  version: UuidVersions;
  namespace: string;
  name: string;
  hyphen: boolean;
  uppercase: boolean;
}

export type GenerationStatus =
  | "SUCCESS" // Everything is good.
  | "INVALID_COUNT" // Count is beyond range.
  | "MISSING_NAMESPACE" // Namespace is required for version 3 and 5.
  | "INVALID_NAMESPACE"; // Namespace is not a valid UUID.

export type GenerationError = Exclude<GenerationStatus, "SUCCESS">;

export interface UseGenerateUuidReturn {
  generate: () => void;
  onError: EventHookOn<GenerationError>;
  onSuccess: EventHookOn<string[]>;
}

// noinspection JSUnusedGlobalSymbols
export default function useGenerateUuid(
  options: MaybeRefOrGetter<UseGenerateUuidOptions>,
): UseGenerateUuidReturn {
  const generateError = createEventHook<GenerationError>();
  const generateSuccess = createEventHook<string[]>();

  const status = computed<GenerationStatus>(() => {
    const optionsRaw = toValue(options);

    if (optionsRaw.count < 0) {
      return "INVALID_COUNT";
    }

    const version = optionsRaw.version;
    if (version === "v3" || version === "v5") {
      const namespace = optionsRaw.namespace;
      if (!namespace) {
        return "MISSING_NAMESPACE";
      }

      if (!uuidLib.validate(namespace)) {
        return "INVALID_NAMESPACE";
      }
    }

    return "SUCCESS";
  });

  async function generate() {
    const optionsRaw = toValue(options);

    if (status.value !== "SUCCESS") {
      await generateError.trigger(status.value);
      return;
    }

    const data = Array.from({ length: optionsRaw.count }).map((_) => {
      const version = optionsRaw.version;
      let uuid: string;

      if (version === "NIL") {
        uuid = uuidLib.NIL;
      } else if (version === "v3" || version === "v5") {
        uuid = uuidLib[version](optionsRaw.name!, optionsRaw.namespace!);
      } else if (version === "v1" || version === "v4" || version === "v6") {
        uuid = uuidLib[version]();
      } else {
        uuid = uuidLib[version]();
      }

      if (optionsRaw.uppercase) {
        uuid = uuid.toUpperCase();
      }

      if (!optionsRaw.hyphen) {
        uuid = uuid.replaceAll("-", "");
      }

      return uuid;
    });

    await generateSuccess.trigger(data);
  }

  return { generate, onError: generateError.on, onSuccess: generateSuccess.on };
}
