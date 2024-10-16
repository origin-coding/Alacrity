<script setup lang="ts">
import TConfigProvider from "tdesign-vue-next/esm/config-provider";

import useCollapsedStore from "~/stores/collapsed";
import useFavoriteStore from "~/stores/favorite";
import useGuideStore from "~/stores/guide";
import useLocaleStore from "~/stores/locale";
import useSearchStore from "~/stores/search";
import useThemeStore from "~/stores/theme";
import {
  type AlacrityLocaleTypeActual,
  LocaleMappings,
} from "~/types/alacrity-locale";

// Manually initialize config on startup.
useLocaleStore();
useCollapsedStore();
useGuideStore();
useFavoriteStore();
useThemeStore();

// Initialize search information.
const searchStore = useSearchStore();
searchStore.initSearchInfo();
</script>

<template>
  <color-scheme>
    <t-config-provider
      :global-config="
        LocaleMappings[locale as unknown as AlacrityLocaleTypeActual]
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
