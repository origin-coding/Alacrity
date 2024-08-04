<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

const name = computed(() => {
  // Separate into multiple statements for readability.
  const path = route.path;
  const id = pluginIdFromRoute(path);
  const key = tPluginName(id);
  return t(key);
});
</script>

<template>
  <div text-lg prose>{{ name }}</div>
</template>

<style scoped lang="less"></style>
