import { MaybeRefOrGetter, toValue } from "vue";
import { useI18n } from "vue-i18n";

function useValidateNotMoreThan(value: MaybeRefOrGetter<number>) {
  const { t } = useI18n();

  function validateNotMoreThan(countString: string): boolean | string {
    const count = Number(countString);

    if (count > toValue(value)) {
      return t("validate.moreThan", [value]);
    }

    return true;
  }

  return validateNotMoreThan;
}

export default useValidateNotMoreThan;
