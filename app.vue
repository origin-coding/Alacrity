<script setup>
import useSearchInfo from "~/stores/search-info";
import { LocaleMappings } from "~/types/alacrity-locale";
import useThemeConfig from "~/stores/theme-config";
import useLocaleConfig from "~/stores/locale-config";

const { initSearchInfo } = useSearchInfo();
initSearchInfo();

// Manually init theme so that it won't change after refreshing.
const { theme } = useThemeConfig();
console.log(theme);

const { locale } = storeToRefs(useLocaleConfig());
const globalConfig = computed(() => {
  return LocaleMappings[locale];
});
</script>

<template>
  <t-config-provider :globalConfig="globalConfig">
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </t-config-provider>
</template>

<style scoped lang="less"></style>
