<script setup lang="ts">
import { Ref, ref, watch } from "vue";

import { CheatSheetData, CheatSheetHeaders } from "@/common";
import { CheatSheet } from "@/components";
import dataRaw from "./data.json";
import messages from "./locale.json";

const data = ref<CheatSheetData>(dataRaw);

const headers: Ref<CheatSheetHeaders> = ref([
  // { title: t("code"), key: "code", width: 110 },
  // { title: t("brief"), key: "brief", width: 200 },
  // { title: t("description"), key: "description" },
  // { title: t("category"), key: "category", width: 200 },
  {
    localizedHeader: true,
    localizedData: false,
    header: { key: "code", width: 110 },
  },
  {
    localizedHeader: true,
    localizedData: false,
    header: { key: "brief", width: 200 },
  },
  {
    localizedHeader: true,
    localizedData: true,
    header: { key: "description" },
  },
  {
    localizedHeader: true,
    localizedData: false,
    header: { key: "category", width: 200 },
  },
]);
</script>

<template>
  <cheat-sheet
    :data="data"
    :headers="headers"
    :messages="messages"
  ></cheat-sheet>
</template>

<style scoped></style>
