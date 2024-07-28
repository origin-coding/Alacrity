<script setup lang="ts">
import {
  type AlacrityThemeType,
  AlacrityThemeList,
} from "~/types/alacrity-theme";
import useThemeStore from "~/stores/theme";
import useLocaleStore from "~/stores/locale";
import {
  AlacrityLocaleList,
  type AlacrityLocaleType,
} from "~/types/alacrity-locale";
import { getVersion } from "@tauri-apps/api/app";
import { open } from "@tauri-apps/api/shell";

const { t } = useI18n();
const { theme, setTheme } = toRefs(useThemeStore());
const { locale, setLocale } = toRefs(useLocaleStore());

const appVersion = await getVersion();
async function clickRepository() {
  await open("https://github.com/origin-coding/Alacrity");
}
</script>

<template>
  <t-space direction="vertical" w-full>
    <div prose text-lg>{{ t("alacrity-config.settings") }}</div>
    <t-card w-full :title="t('basic')">
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
    <t-divider></t-divider>
    <t-card :title="t('about')">
      <t-descriptions :colon="true" :column="6">
        <t-descriptions-item :label="t('version')">
          {{ appVersion }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('repository')">
          <t-link @click="clickRepository">GitHub</t-link>
        </t-descriptions-item>
      </t-descriptions>
    </t-card>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "basic": "Basic settings",
    "about": "About Alacrity",
    "version": "Version",
    "repository": "Repository"
  },
  "zhHans": {
    "basic": "基础设置",
    "about": "关于Alacrity",
    "version": "版本",
    "repository": "代码仓库"
  }
}
</i18n>
