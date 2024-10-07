<script setup lang="ts">
import { open, type OpenDialogOptions } from "@tauri-apps/plugin-dialog";

const { t } = useI18n();

const props = defineProps<{ options?: OpenDialogOptions; compact?: boolean }>();
const emit = defineEmits<{ confirmed: [null | string | string[]] }>();

async function upload() {
  const path = await open(props.options);
  emit("confirmed", path);
}
</script>

<template>
  <t-button theme="primary" @click="upload">
    <template v-if="!props.compact" #icon>
      <cloud-upload-icon></cloud-upload-icon>
    </template>
    {{ t(!props.compact ? "upload" : "upload-compact") }}
  </t-button>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "upload": "Upload",
    "upload-compact": "Upload"
  },
  "zhHans": {
    "upload": "上传文件",
    "upload-compact": "上传"
  }
}
</i18n>
