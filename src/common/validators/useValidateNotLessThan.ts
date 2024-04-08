import { MaybeRefOrGetter, toValue } from "vue";
import { useI18n } from "vue-i18n";

function useValidateNotLessThan(value: MaybeRefOrGetter<number>) {
  const { t } = useI18n();

  function validateNotLessThan(countString: string): boolean | string {
    const count = Number(countString);

    if (count < toValue(value)) {
      return t("validate.lessThan", [value]);
    }

    return true;
  }

  return validateNotLessThan;
}

export default useValidateNotLessThan;
