import { useI18n } from "vue-i18n";
import { MaybeRefOrGetter, toValue } from "vue";

function useValidateCount(
  min: MaybeRefOrGetter<number> = 0,
  max: MaybeRefOrGetter<number> = 100,
) {
  const { t } = useI18n();

  function validateCount(countString: string): boolean | string {
    if (countString.length === 0) {
      return t("validate.empty");
    }

    const count = Number(countString);
    if (count < toValue(min)) {
      return t("validate.lessThan", [min]);
    }
    if (count > toValue(max)) {
      return t("validate.moreThan", [max]);
    }
    return true;
  }

  return validateCount;
}

export { useValidateCount };
