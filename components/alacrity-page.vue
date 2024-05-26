<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <t-space direction="vertical" w-full>
    <div text-lg>{{ props.title }}</div>
    <slot></slot>
  </t-space>
</template>

<style scoped lang="less"></style>
