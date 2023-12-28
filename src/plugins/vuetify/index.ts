//Styles
import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";
import { variants } from "@catppuccin/palette";

// Components and configs.
import { createVuetify, ThemeDefinition } from "vuetify";
import { md2 } from "vuetify/blueprints";
import defaults from "@/plugins/vuetify/config";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";

// I18n
import { useI18n } from "vue-i18n";
import i18n from "../i18n";

const lightTheme: typeof ThemeDefinition = {
  dark: false,
  colors: {
    background: variants.latte.base.hex,
    surface: variants.latte.base.hex,
    primary: variants.latte.blue.hex,
    secondary: variants.latte.green.hex,
    error: variants.latte.red.hex,
    info: variants.latte.sky.hex,
    success: variants.latte.mauve.hex,
    warning: variants.latte.peach.hex,
    custom_text: variants.latte.text.hex,
  },
};

const darkTheme: typeof ThemeDefinition = {
  dark: true,
  colors: {
    background: variants.mocha.base.hex,
    surface: variants.mocha.base.hex,
    primary: variants.mocha.blue.hex,
    secondary: variants.mocha.green.hex,
    error: variants.mocha.red.hex,
    info: variants.mocha.sky.hex,
    success: variants.mocha.mauve.hex,
    warning: variants.mocha.peach.hex,
    custom_text: variants.mocha.text.hex,
  },
};

export default createVuetify({
  blueprint: md2,
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
      darkTheme,
    },
  },
  defaults,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});
