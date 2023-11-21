// Basic config options.
const compact = { density: "compact" };
const clearable = { clearable: true };
const soloFilled = { variant: "solo-filled" };
const tonal = { variant: "tonal" };
const noResize = { noResize: true };
const validateOnLazyBlur = { validateOn: "lazy blur" };
const rows6 = { rows: "6" };
const inline = { inline: true };
const colorPrimary = { color: "primary" };
const colorDefault = { color: "" };

const defaults = {
  VTextarea: {
    ...compact,
    ...clearable,
    ...soloFilled,
    ...noResize,
    ...rows6,
  },
  VTextField: {
    ...compact,
    ...clearable,
    ...soloFilled,
    ...validateOnLazyBlur,
  },
  VCombobox: {
    ...compact,
    ...soloFilled,
  },
  VCheckbox: {
    ...compact,
    ...colorDefault,
  },
  VCheckboxBtn: {
    ...inline,
  },
  VBtn: {
    ...tonal,
  },
  VBtnGroup: {
    ...compact,
  },
  VSelect: {
    ...soloFilled,
    ...compact,
  },
  VSnackbar: {
    ...tonal,
    ...colorPrimary,
  },
};

export default defaults;
