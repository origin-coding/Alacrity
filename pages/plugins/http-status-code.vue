<script setup lang="ts">
import queryTableData from "~/composables/query-table-data";
import type { TableProps } from "tdesign-vue-next";

const { t } = useI18n();

const { data: rawData } = queryTableData<{
  code: number;
  brief: string;
  description: string;
  category: string;
}>();

const data = computed(() => {
  if (rawData.value === null) {
    return [];
  }
  return rawData.value;
});

const rowKey = "code";

const columns = computed<TableProps["columns"]>(() => {
  return [
    { title: t("code"), colKey: "code", width: 100, align: "center" },
    { title: t("brief"), colKey: "brief", width: 300, align: "center" },
    { title: t("description"), colKey: "description", ellipsis: true },
    { title: t("category"), colKey: "category", width: 200, align: "center" },
  ];
});

const pagination: TableProps["pagination"] = {
  defaultCurrent: 1,
  defaultPageSize: 10,
  // pageSizeOptions: [10],
  total: data.value.length,
};
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <t-table :data :rowKey :columns :pagination></t-table>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "code": "Code",
    "brief": "Brief",
    "description": "Description",
    "category": "Category"
  },
  "zhHans": {
    "code": "状态码",
    "brief": "简述",
    "description": "描述",
    "category": "类别"
  }
}
</i18n>
