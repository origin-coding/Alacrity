<script setup lang="ts">
import { open, type OpenDialogOptions } from "@tauri-apps/api/dialog";

const { t } = useI18n();

const props = defineProps<{ options?: OpenDialogOptions }>();
const emit = defineEmits<{ confirmed: [null | string | string[]] }>();

async function upload() {
  const path = await open(props.options);
  emit("confirmed", path);
}
</script>

<template>
  <t-button theme="primary" @click="upload">
    <template #icon>
      <cloud-upload-icon></cloud-upload-icon>
    </template>
    {{ t("upload") }}
  </t-button>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "upload": "Upload"
  },
  "zhHans": {
    "upload": "上传文件"
  }
}
</i18n>
