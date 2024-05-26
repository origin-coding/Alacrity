<script setup lang="ts">
const props = defineProps<{ idList: Array<string> }>();
</script>

<template>
  <t-row :gutter="[12, 26]" w-full>
    <t-col :span="3" v-for="id in props.idList" :key="id">
      <plugin-card :id="id"></plugin-card>
    </t-col>
  </t-row>
</template>

<style scoped lang="less"></style>
