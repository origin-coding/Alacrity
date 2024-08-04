<script setup lang="ts">
const { t } = useI18n();

const uuid = ref("");

const { valid, version } = useValidateUuid(uuid);
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
      <t-form-item label="UUID" w-full>
        <t-input v-model="uuid" :clearable="true"></t-input>
      </t-form-item>
    </option-layout>
    <t-divider></t-divider>
    <t-card>
      <t-descriptions :title="t('title')" :colon="true">
        <t-descriptions-item :label="t('valid')">
          {{ t(`${valid}`) }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('version')">
          {{ version || "-" }}
        </t-descriptions-item>
      </t-descriptions>
    </t-card>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "title": "Analyze result",
    "valid": "Is valid",
    "true": "Yes",
    "false": "No",
    "version": "Version"
  },
  "zhHans": {
    "title": "分析结果",
    "valid": "是否合法",
    "true": "是",
    "false": "否",
    "version": "版本"
  }
}
</i18n>
