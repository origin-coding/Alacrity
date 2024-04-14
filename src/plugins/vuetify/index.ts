// Styles
import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";
// I18n
import { useI18n } from "vue-i18n";
// Components and configs.
import { createVuetify } from "vuetify";
import { md2 } from "vuetify/blueprints";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";

import defaults from "@/plugins/vuetify/config";

import i18n from "../i18n";

export default createVuetify({
  blueprint: md2,
  defaults,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});
