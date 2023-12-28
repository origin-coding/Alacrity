import { useI18n } from "vue-i18n";

function useValidateCount(min: number = 0, max: number = 100) {
  const { t } = useI18n();

  function validateCount(countString: string): boolean | string {
    if (countString.length === 0) {
      return t("validate.empty");
    }

    const count = Number(countString);
    if (count < min) {
      return t("validate.lessThan", [min]);
    }
    if (count > max) {
      return t("validate.moreThan", [max]);
    }
    return true;
  }

  return validateCount;
}

export { useValidateCount };
