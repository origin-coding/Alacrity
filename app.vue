<script setup>
import useSearchInfo from "~/stores/search-info";
import useAlacrityConfig from "~/stores/alacrity-config";

// These init functions are supposed to be called only once.
// They were supposed to be called on onMounted lifecycle, but not allowed by Nuxt.
const { initSearchInfo } = useSearchInfo();
initSearchInfo();

const { initConfig } = useAlacrityConfig();
await initConfig();
</script>

<template>
  <nuxt-layout>
    <nuxt-page></nuxt-page>
  </nuxt-layout>
</template>

<style scoped lang="less"></style>
