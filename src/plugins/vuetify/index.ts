//Styles
import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";
import { flavors } from "@catppuccin/palette";

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
    background: flavors.latte.colors.base.hex,
    surface: flavors.latte.colors.base.hex,
    primary: flavors.latte.colors.blue.hex,
    secondary: flavors.latte.colors.green.hex,
    error: flavors.latte.colors.red.hex,
    info: flavors.latte.colors.sky.hex,
    success: flavors.latte.colors.mauve.hex,
    warning: flavors.latte.colors.peach.hex,
    custom_text: flavors.latte.colors.text.hex,
  },
};

const darkTheme: typeof ThemeDefinition = {
  dark: true,
  colors: {
    background: flavors.mocha.colors.base.hex,
    surface: flavors.mocha.colors.base.hex,
    primary: flavors.mocha.colors.blue.hex,
    secondary: flavors.mocha.colors.green.hex,
    error: flavors.mocha.colors.red.hex,
    info: flavors.mocha.colors.sky.hex,
    success: flavors.mocha.colors.mauve.hex,
    warning: flavors.mocha.colors.peach.hex,
    custom_text: flavors.mocha.colors.text.hex,
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
