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
    <v-row>
      <v-col>
        <div class="text-h6">{{ t("inputBase") }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-radio-group v-model="inputBase" :inline="true">
          <v-radio
            v-for="option in baseOptions"
            :key="option.key"
            :value="option.value"
            :label="t(option.key)"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-text-field v-model="input"></v-text-field>
      </v-col>
    </v-row>

    <v-divider class="ma-6"></v-divider>

    <v-row>
      <v-col>
        <div class="text-h6">{{ t("outputBase") }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-radio-group v-model="outputBase" :inline="true">
          <v-radio
            v-for="option in baseOptions"
            :key="option.key"
            :value="option.value"
            :label="t(option.key)"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-text-field :model-value="output"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
