<script setup lang="ts">
import { computed, ref } from "vue";

// I18n
import { useI18n } from "vue-i18n";
import messages from "./locale.json";
const { t } = useI18n({ messages });

const input = ref("0");

const inputBase = ref(10);
const outputBase = ref(16);
const baseOptions = [
  { key: "bin", value: 2 },
  { key: "oct", value: 8 },
  { key: "dec", value: 10 },
  { key: "hex", value: 16 },
];

const output = computed(() =>
  parseInt(input.value, inputBase.value).toString(outputBase.value),
);
</script>

<template>
  <v-container>
    <v-radio-group v-model="inputBase" :inline="true" :label="t('inputBase')">
      <v-radio
        v-for="option in baseOptions"
        :key="option.key"
        :value="option.value"
        :label="t(option.key)"
      ></v-radio>
    </v-radio-group>
    <v-text-field v-model="input" class="v-col-6"></v-text-field>

    <div class="v-col-6">
      <v-divider class="ma-4"></v-divider>
    </div>

    <v-radio-group v-model="outputBase" :inline="true" :label="t('outputBase')">
      <v-radio
        v-for="option in baseOptions"
        :key="option.key"
        :value="option.value"
        :label="t(option.key)"
      ></v-radio>
    </v-radio-group>
    <v-text-field :model-value="output" class="v-col-6"></v-text-field>
  </v-container>
</template>

<style scoped></style>
