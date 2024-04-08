<script setup lang="ts">
import { Ref, ref } from "vue";

import { CheatSheetData, CheatSheetHeaders } from "@/common";
import CheatSheet from "@/components";

import dataRaw from "./data.json";
import messages from "./locale.json";

const data: Ref<CheatSheetData> = ref(dataRaw);

const headers: Ref<CheatSheetHeaders> = ref([
  { localizedHeader: true, localizedData: false, header: { key: "bin" } },
  { localizedHeader: true, localizedData: false, header: { key: "dec" } },
  { localizedHeader: true, localizedData: false, header: { key: "hex" } },
  { localizedHeader: true, localizedData: false, header: { key: "abbr" } },
  { localizedHeader: true, localizedData: false, header: { key: "caret" } },
  { localizedHeader: true, localizedData: false, header: { key: "meaning" } },
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
