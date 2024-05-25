<script setup lang="ts">
import useSearchStore from "~/stores/search-store";
import useThemeStore from "~/stores/theme-store";
import TConfigProvider from "tdesign-vue-next/esm/config-provider";
import { LocaleMappings } from "~/types/alacrity-locale";
import useLocaleStore from "~/stores/locale-store";

// Manually init theme so that it won't change after refreshing.
const searchStore = useSearchStore();
searchStore.initSearchInfo();
console.log(useThemeStore().theme);

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
