<script setup lang="ts">
import { onMounted, PropType, Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import type {
  CheatSheetData,
  CheatSheetHeaders,
  LocalizedMessages,
  VuetifyHeaders,
} from "@/common";

// TODO 这里需要设置默认值
/* eslint-disable */
const props = defineProps({
  data: Array as PropType<CheatSheetData>,
  headers: Array as PropType<CheatSheetHeaders>,
  messages: Object as PropType<LocalizedMessages>,
});

const { t, locale } = useI18n({
  messages: props.messages,
  missingWarn: false,
  fallbackWarn: false,
});

const tableHeaders: Ref<VuetifyHeaders> = ref([]);

onMounted(() => {
  if (!props.headers) {
    return;
  }

  for (const headerItem of props.headers) {
    let { title } = headerItem.header;
    let { key } = headerItem.header;
    if (headerItem.localizedHeader) {
      title = t(key);
    }
    if (headerItem.localizedData) {
      key = `${key}.${locale.value}`;
    }

    tableHeaders.value.push({
      key,
      title,
      width: headerItem.header.width,
      align: headerItem.header.align,
    });
  }
});

watch(locale, () => {
  if (!props.headers) {
    return;
  }

  for (const [index, item] of tableHeaders.value.entries()) {
    if (props.headers[index].localizedHeader) {
      item.title = t(props.headers[index].header.key);
    }
    if (props.headers[index].localizedData) {
      item.key = `${props.headers[index].header.key}.${locale.value}`;
    }
  }
});

const search = ref("");
const allPages = ref(10);
</script>

<template>
  <v-container>
    <v-text-field
      v-model="search"
      :label="t('plugin.search')"
      append-icon="mdi-magnify"
    ></v-text-field>
    <v-data-table
      v-model:items-per-page="allPages"
      :items="props.data"
      :headers="tableHeaders"
      :search="search"
      :fixed-header="true"
      height="73vh"
    ></v-data-table>
  </v-container>
</template>

<style scoped></style>
