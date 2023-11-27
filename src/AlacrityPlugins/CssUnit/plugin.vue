<script setup lang="ts">
import { Ref, ref } from "vue";

import { CheatSheet } from "@/components";
import { CheatSheetData, CheatSheetHeaders } from "@/common";
import dataRaw from "./data.json";
import messages from "./locale.json";

const data: Ref<CheatSheetData> = ref(dataRaw);

const headers: Ref<CheatSheetHeaders> = ref([
  { localizedHeader: true, localizedData: false, header: { key: "unit" } },
  { localizedHeader: true, localizedData: true, header: { key: "name" } },
  { localizedHeader: true, localizedData: false, header: { key: "to" } },
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
