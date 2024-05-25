<script setup lang="ts">
import {
  type AlacrityThemeType,
  AlacrityThemeList,
} from "~/types/alacrity-theme";
import useThemeConfig from "~/stores/theme-config";
import useLocaleConfig from "~/stores/locale-config";
import {
  AlacrityLocaleList,
  type AlacrityLocaleType,
} from "~/types/alacrity-locale";

const { t } = useI18n();
const { theme, setTheme } = toRefs(useThemeConfig());
const { locale, setLocale } = toRefs(useLocaleConfig());
</script>

<template>
  <t-space direction="vertical" w-full>
    <div prose text-lg>{{ t("alacrity-config.settings") }}</div>
    <t-card w-full>
      <t-form :colon="true" layout="inline">
        <t-form-item :label="t('alacrity-config.theme')">
          <t-select
            v-model="theme"
            @change="(val) => setTheme(val as AlacrityThemeType)"
          >
            <t-option
              v-for="theme in AlacrityThemeList"
              :value="theme"
              :key="theme"
              :label="t(`alacrity-config.themes.${theme}`)"
            >
              {{ t(`alacrity-config.themes.${theme}`) }}
            </t-option>
          </t-select>
        </t-form-item>
      </t-form>
    </t-card>
    <t-card>
      <t-form :colon="true" layout="inline">
        <t-form-item :label="t('alacrity-config.locale')">
          <t-select
            v-model="locale"
            @change="(val) => setLocale(val as AlacrityLocaleType)"
          >
            <t-option
              v-for="locale in AlacrityLocaleList"
              :value="locale"
              :key="locale"
              :label="t(`alacrity-config.locales.${locale}`)"
            >
              {{ t(`alacrity-config.locales.${locale}`) }}
            </t-option>
          </t-select>
        </t-form-item>
      </t-form>
    </t-card>
  </t-space>
</template>

<style scoped lang="less"></style>
