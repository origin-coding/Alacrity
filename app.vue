<script setup lang="ts">
import useSearchStore from "~/stores/search";
import useThemeStore from "~/stores/theme";
import TConfigProvider from "tdesign-vue-next/esm/config-provider";
import { LocaleMappings } from "~/types/alacrity-locale";
import useLocaleStore from "~/stores/locale";

// Manually init search info.
const searchStore = useSearchStore();
searchStore.initSearchInfo();

// Use this store to force update theme.
useThemeStore();

// Disable refreshing to prevent TDesign's global config missing.
const disableRefresh = () => {
  document.addEventListener("keydown", function (event) {
    // Prevent F5 or Ctrl+R (Windows/Linux) and Command+R (Mac) from refreshing the page
    // Also, Ctrl+Shift+R is included.
    if (
      event.key === "F5" ||
      (event.ctrlKey && event.key === "r") ||
      (event.metaKey && event.key === "r") ||
      (event.ctrlKey && event.key === "R")
    ) {
      event.preventDefault();
    }
  });

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
};

if (import.meta.env.PROD) {
  disableRefresh();
}
</script>

<template>
  <t-config-provider :global-config="LocaleMappings[useLocaleStore().locale]">
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </t-config-provider>
</template>

<style scoped lang="less"></style>
