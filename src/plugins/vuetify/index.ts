//Styles
import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";

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
    background: "#FAFAFA" /* grey-lighten-5 */,
    surface: "#FAFAFA" /* grey-lighten-5 */,
    primary: "#2196F3" /* blue */,
    secondary: "#00BFA5" /* teal-accent-4 */,
    error: "#F44336" /* red */,
    info: "#00B0FF" /* light-blue-accent-3 */,
    success: "#4CAF50" /* green */,
    warning: "#FF6D00" /* orange-accent-4 */,
  },
};

const darkTheme: typeof ThemeDefinition = {
  dark: true,
  colors: {
    background: "#212121" /* grey-darken-4 */,
    surface: "#212121" /* grey-darken-4 */,
    primary: "#448AFF" /* blue-accent-2 */,
    secondary: "#26A69A" /* teal-lighten-1 */,
    error: "#EF5350" /* red-lighten-1 */,
    info: "#039BE5" /* light-blue-darken-1 */,
    success: "#66BB6A" /* green-lighten-1 */,
    warning: "#FF6E40" /* deep-orange-accent-2 */,
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
