<script setup lang="ts">
import { writeText } from "@tauri-apps/plugin-clipboard-manager";
import { readFile } from "@tauri-apps/plugin-fs";
import { fileTypeFromBuffer } from "file-type";
import mime from "mime";

const { t } = useI18n();

const mimeType = ref("");

async function parseFromExtension(filename: string | string[] | null) {
  if (typeof filename !== "string") {
    return;
  }

  const mimeFromExt = mime.getType(filename);
  if (mimeFromExt) {
    mimeType.value = mimeFromExt;
    return;
  }

  const chunk = await readFile(filename);

  const type = await fileTypeFromBuffer(chunk);
  console.log(type);
  mimeType.value = type?.mime || t("unknown");
}

async function copy() {
  await writeText(mimeType.value);
}
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>

    <option-layout>
      <upload-button
        :options="{ multiple: false }"
        @confirmed="parseFromExtension"
      ></upload-button>
    </option-layout>

    <t-divider></t-divider>

    <input-output-layout :title="t('result')" :copy="true" @copy="copy">
      <t-descriptions :colon="true">
        <t-descriptions-item :label="t('mime')">
          {{ mimeType }}
        </t-descriptions-item>
      </t-descriptions>
    </input-output-layout>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "unknown": "Unknown file type",
    "result": "Result",
    "mime": "MIME Type"
  },
  "zhHans": {
    "unknown": "未知文件类型",
    "result": "结果",
    "mime": "MIME 类型"
  }
}
</i18n>
