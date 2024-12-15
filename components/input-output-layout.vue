<script setup lang="ts">
interface Props {
  copy?: boolean;
  paste?: boolean;
  clear?: boolean;
  download?: boolean;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  copy: false,
  paste: false,
  clear: false,
  download: false,
  title: "",
});

const emit = defineEmits<{
  copy: [];
  paste: [];
  clear: [];
  download: [];
}>();

const { t } = useI18n();
</script>

<template>
  <t-card :title>
    <template #actions>
      <t-space direction="horizontal">
        <t-button v-if="props.copy" @click="emit('copy')">
          {{ t("copy") }}
        </t-button>
        <t-button v-if="props.paste" @click="emit('paste')">
          {{ t("paste") }}
        </t-button>
        <t-button v-if="props.clear" @click="emit('clear')">
          {{ t("clear") }}
        </t-button>
        <t-button v-if="props.download" @click="emit('download')">
          {{ t("download") }}
        </t-button>
        <slot name="operations"></slot>
      </t-space>
    </template>
    <slot name="default"></slot>
  </t-card>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "copy": "Copy",
    "paste": "Paste",
    "clear": "Clear",
    "download": "Download"
  },
  "zhHans": {
    "copy": "复制",
    "paste": "粘贴",
    "clear": "清空",
    "download": "下载"
  }
}
</i18n>
