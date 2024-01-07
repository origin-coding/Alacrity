import { useI18n } from "vue-i18n";

function useValidateNotEmpty() {
  const { t } = useI18n();

  function validateNotEmpty(value: string): boolean | string {
    if (value.length === 0) {
      return t("validate.empty");
    }
    return true;
  }
  return validateNotEmpty;
}

export { useValidateNotEmpty };
