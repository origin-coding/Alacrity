<script setup lang="ts">
import { onMounted, PropType, Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import type {
  CheatSheetData,
  VuetifyHeaders,
  CheatSheetHeaders,
  LocalizedMessages,
} from "@/common";

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

const headers: Ref<VuetifyHeaders> = ref([]);

onMounted(() => {
  if (!props.headers) {
    return;
  }

  for (const headerItem of props.headers) {
    let title = headerItem.header.title;
    let key = headerItem.header.key;
    if (headerItem.localizedHeader) {
      title = t(key);
    }
    if (headerItem.localizedData) {
      key = `${key}.${locale.value}`;
    }

    headers.value.push({
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

  for (let [index, item] of headers.value.entries()) {
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
      :items="props.data"
      :headers="headers"
      :search="search"
      v-model:items-per-page="allPages"
      :fixed-header="true"
      height="73vh"
    ></v-data-table>
  </v-container>
</template>

<style scoped></style>
