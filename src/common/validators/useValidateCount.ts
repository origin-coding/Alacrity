import { MaybeRefOrGetter } from "vue";
import { useValidateNotEmpty } from "./useValidateNotEmpty";
import { useValidateNumberRange } from "./useValidateNumberRange";
import { useValidateInt } from "./useValidateInt";

function useValidateCount(
  min: MaybeRefOrGetter<number> = 1,
  max: MaybeRefOrGetter<number> = 100,
) {
  const validators = [
    useValidateNotEmpty(),
    useValidateInt(),
    useValidateNumberRange(min, max),
  ];

  function validateCount(value: string): boolean | string {
    for (const validator of validators) {
      const result = validator(value);
      if (result !== true) {
        return result;
      }
    }

    return true;
  }

  return validateCount;
}

export { useValidateCount };
