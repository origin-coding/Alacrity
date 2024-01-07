import { useI18n } from "vue-i18n";

function useValidateInt() {
  const { t } = useI18n();

  function validateInt(countString: string): boolean | string {
    const count = Number(countString);
    if (!Number.isInteger(count)) {
      return t("validate.int");
    }
    return true;
  }

  return validateInt;
}

export { useValidateInt };
