import { MaybeRefOrGetter } from "vue";
import { useValidateNotLessThan } from "./useValidateNotLessThan";
import { useValidateNotMoreThan } from "./useValidateNotMoreThan";

function useValidateNumberRange(
  min: MaybeRefOrGetter<number>,
  max: MaybeRefOrGetter<number>,
) {
  const validators = [useValidateNotLessThan(min), useValidateNotMoreThan(max)];

  function validateNumberRange(countString: string): boolean | string {
    for (const validator of validators) {
      const result = validator(countString);
      if (result !== true) {
        return result;
      }
    }

    return true;
  }

  return validateNumberRange;
}

export { useValidateNumberRange };
