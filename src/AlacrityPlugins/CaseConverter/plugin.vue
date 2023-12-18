<script setup lang="ts">
import { ref } from "vue";
import * as changeCase from "change-case";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const input = ref("");
const output = ref("");

const selectedCase = ref("camelCase");
const caseOptions = ref([
  { value: "camelCase", title: "Camel Case" },
  { value: "capitalCase", title: "Capital Case" },
  { value: "constantCase", title: "Constant Case" },
  { value: "dotCase", title: "Dot Case" },
  { value: "kebabCase", title: "Kebab Case" },
  { value: "noCase", title: "No Case" },
  { value: "pascalCase", title: "Pascal Case" },
  { value: "pascalSnakeCase", title: "Pascal Snake Case" },
  { value: "pathCase", title: "Path Case" },
  { value: "sentenceCase", title: "Sentence Case" },
  { value: "snakeCase", title: "Snake Case" },
  { value: "trainCase", title: "Train Case" },
]);

function convertCase() {
  const converter = changeCase[
    selectedCase.value as keyof typeof changeCase
  ] as (input: string) => string;

  output.value = converter(input.value);
}
</script>

<template>
  <v-container>
    <v-row>
      <v-select :items="caseOptions" v-model="selectedCase" class="v-col-3">
        <template v-slot:append>
          <v-btn @click="convertCase">{{ t("plugin.convert") }}</v-btn>
        </template>
      </v-select>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea v-model="input" :rows="10" height="320vh"> </v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea v-model="output" :rows="10"> </v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
