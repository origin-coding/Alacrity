<script setup lang="ts">
import TConfigProvider from "tdesign-vue-next/esm/config-provider";

import useSearchStore from "~/stores/search";
import useThemeStore from "~/stores/theme";
import {
  type AlacrityLocaleTypeActual,
  LocaleMappings,
} from "~/types/alacrity-locale";

// Manually init search info.
const searchStore = useSearchStore();
searchStore.initSearchInfo();

// Use this store to force update theme.
useThemeStore();
</script>

<template>
  <color-scheme>
    <t-config-provider
      :global-config="
        LocaleMappings[useI18n().locale as unknown as AlacrityLocaleTypeActual]
      "
    >
      <nuxt-layout>
        <nuxt-page></nuxt-page>
      </nuxt-layout>
      <introduction-guide></introduction-guide>
    </t-config-provider>
  </color-scheme>
</template>

<style scoped lang="less"></style>
