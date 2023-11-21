<script setup lang="ts">
import { Ref, ref } from "vue";

import { CheatSheet } from "@/components";
import { CheatSheetData, CheatSheetHeaders } from "@/common";
import dataRaw from "./data.json";
import messages from "./locale.json";

const data: Ref<CheatSheetData> = ref(dataRaw);

const headers: Ref<CheatSheetHeaders> = ref([
  { localizedHeader: true, localizedData: true, header: { key: "component" } },
  {
    localizedHeader: false,
    localizedData: false,
    header: { title: "ISO 8601", key: "iso8601", align: "center" },
  },
  {
    localizedHeader: false,
    localizedData: false,
    header: { title: "Golang", key: "golang", align: "center" },
  },
  {
    localizedHeader: false,
    localizedData: false,
    header: { title: "Python", key: "python", align: "center" },
  },
  {
    localizedHeader: false,
    localizedData: false,
    header: { title: "Day.js", key: "dayjs", align: "center" },
  },
  { localizedHeader: true, localizedData: true, header: { key: "note" } },
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
