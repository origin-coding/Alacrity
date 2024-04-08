<script setup lang="ts">
import { UAParser } from "ua-parser-js";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import messages from "./locale.json";

const { t } = useI18n({ messages });

const userAgent = ref("");

const parser = computed(() => {
  const uaParser = new UAParser();
  uaParser.setUA(userAgent.value);
  return uaParser;
});
</script>

<template>
  <v-container>
    <div class="text-h6 mb-4">{{ t("ua") }}</div>
    <v-text-field v-model="userAgent"></v-text-field>

    <div class="text-h6 mb-4">{{ t("browser") }}</div>
    <v-row>
      <v-text-field :model-value="parser.getBrowser().name" class="v-col-3">
        <template #prepend>{{ t("name") }}</template>
      </v-text-field>
      <v-text-field :model-value="parser.getBrowser().version" class="v-col-3">
        <template #prepend>{{ t("version") }}</template>
      </v-text-field>
    </v-row>

    <div class="text-h6 mb-4">{{ t("engine") }}</div>
    <v-row>
      <v-text-field :model-value="parser.getEngine().name" class="v-col-3">
        <template #prepend>{{ t("name") }}</template>
      </v-text-field>
      <v-text-field :model-value="parser.getEngine().version" class="v-col-3">
        <template #prepend>{{ t("version") }}</template>
      </v-text-field>
    </v-row>

    <div class="text-h6 mb-4">{{ t("os") }}</div>
    <v-row>
      <v-text-field :model-value="parser.getOS().name" class="v-col-3">
        <template #prepend>{{ t("name") }}</template>
      </v-text-field>
      <v-text-field :model-value="parser.getOS().version" class="v-col-3">
        <template #prepend>{{ t("version") }}</template>
      </v-text-field>
      <v-text-field :model-value="parser.getCPU().architecture" class="v-col-3">
        <template #prepend>{{ t("arch") }}</template>
      </v-text-field>
    </v-row>

    <div class="text-h6 mb-4">{{ t("device") }}</div>
    <v-row>
      <v-text-field :model-value="parser.getDevice().type" class="v-col-3">
        <template #prepend>{{ t("type") }}</template>
      </v-text-field>
      <v-text-field :model-value="parser.getDevice().vendor" class="v-col-3">
        <template #prepend>{{ t("name") }}</template>
      </v-text-field>
      <v-text-field :model-value="parser.getDevice().model" class="v-col-3">
        <template #prepend>{{ t("model") }}</template>
      </v-text-field>
    </v-row>
  </v-container>
</template>

<style scoped></style>
