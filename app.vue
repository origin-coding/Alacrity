<script setup lang="ts">
import TConfigProvider from "tdesign-vue-next/esm/config-provider";

import useLocaleStore from "~/stores/locale";
import useSearchStore from "~/stores/search";
import useThemeStore from "~/stores/theme";
import { LocaleMappings } from "~/types/alacrity-locale";

// Manually init search info.
const searchStore = useSearchStore();
searchStore.initSearchInfo();

// Use this store to force update theme.
useThemeStore();
</script>

<template>
  <t-config-provider :global-config="LocaleMappings[useLocaleStore().locale]">
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
    <introduction-guide></introduction-guide>
  </t-config-provider>
</template>

<style scoped lang="less"></style>
