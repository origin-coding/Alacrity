<script setup lang="ts">
const props = defineProps<{ idList: Array<string> }>();

const { t } = useI18n();
</script>

<template>
  <t-row v-if="props.idList.length !== 0" :gutter="[12, 26]" w-full>
    <t-col
      v-for="id in props.idList"
      :key="id"
      :xs="12"
      :sm="6"
      :md="4"
      :lg="3"
    >
      <plugin-card :id="id"></plugin-card>
    </t-col>
  </t-row>

  <!-- When list is empty, show this prompt -->
  <div v-else class="result-success">
    <filter-clear-icon class="result-success-icon"></filter-clear-icon>
    <div class="result-success-title">{{ t("empty") }}</div>
  </div>
</template>

<style scoped lang="less">
.result-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;

  &-icon {
    font-size: var(--td-comp-size-xxxxl);
    color: var(--td-text-color-secondary);
  }

  &-title {
    margin-top: var(--td-comp-margin-xxl);
    font: var(--td-font-title-large);
    color: var(--td-text-color-primary);
    text-align: center;
  }
}
</style>

<i18n>
{
  "en": {
    "empty": "No matching plugins found"
  },
  "zhHans": {
    "empty": "没有符合条件的插件"
  }
}
</i18n>
