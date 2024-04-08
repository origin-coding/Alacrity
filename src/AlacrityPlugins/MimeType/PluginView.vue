<script setup lang="ts">
import { Ref, ref } from "vue";

import { CheatSheetData, CheatSheetHeaders } from "@/common";
import CheatSheet from "@/components";

import dataRaw from "./data.json";
import messages from "./locale.json";

const data = ref<CheatSheetData>(dataRaw);

const headers: Ref<CheatSheetHeaders> = ref([
  { localizedHeader: true, localizedData: false, header: { key: "extension" } },
  {
    localizedHeader: true,
    localizedData: false,
    header: { key: "description" },
  },
  { localizedHeader: true, localizedData: false, header: { key: "mime" } },
  { localizedHeader: true, localizedData: false, header: { key: "category" } },
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
