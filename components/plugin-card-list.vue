<script setup lang="ts">
const props = defineProps<{ idList: Array<string> }>();
</script>

<template>
  <t-row :gutter="[12, 26]" w-full>
    <t-col v-for="id in props.idList" :key="id" :xs="12" :sm="6" :md="4" :lg="3">
      <plugin-card :id="id"></plugin-card>
    </t-col>
  </t-row>
</template>

<style scoped lang="less"></style>
