<script setup lang="ts">
const { contentRoute } = useContentRoute();
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <content-doc :path="contentRoute"></content-doc>
  </t-space>
</template>

<style scoped lang="less"></style>
