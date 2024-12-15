<script setup lang="ts">
import { faker } from "@faker-js/faker";

const { t } = useI18n();

const port = ref(1024);

async function generate() {
  port.value = faker.internet.port();
}
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>

    <option-layout>
      <t-button @click="generate">{{ t("generate") }}</t-button>
    </option-layout>

    <t-divider></t-divider>

    <input-output-layout :title="t('port')">
      <t-descriptions :colon="true">
        <t-descriptions-item :label="t('port')">
          {{ port }}
        </t-descriptions-item>
      </t-descriptions>
    </input-output-layout>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "generate": "Generate Port Number",
    "error": "Unable to get available port!",
    "port": "Port number"
  },
  "zhHans": {
    "generate": "生成端口号",
    "error": "无法获取可用端口！",
    "port": "端口号"
  }
}
</i18n>
