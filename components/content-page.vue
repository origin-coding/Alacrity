<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();

const path = computed(() => {
  // Separate into multiple statements for readability.
  const path = route.path;
  const id = pluginIdFromRoute(path);
  return `/${locale.value}/${id}`;
});
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <content-doc :path></content-doc>
  </t-space>
</template>

<style scoped lang="less"></style>
