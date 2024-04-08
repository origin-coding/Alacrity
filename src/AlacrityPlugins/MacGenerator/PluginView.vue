<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { writeText } from "@tauri-apps/api/clipboard";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { useValidateCount } from "@/common";

import messages from "./locale.json";

const { t, locale } = useI18n({ messages });

const count = ref(1);
const separator = ref(":");
const uppercase = ref(true);

const result = ref("");

const separatorOptions = ref([
  { value: "-", title: "-" },
  { value: ":", title: ":" },
  { value: " ", title: t("whitespace") },
]);

const copied = ref(false);

function generate() {
  result.value = Array.from({ length: count.value })
    .map((_) => faker.internet.mac({ separator: separator.value }))
    .map((mac) => (uppercase.value ? mac.toUpperCase() : mac))
    .join("\n");
}

async function copy() {
  await writeText(result.value);
  copied.value = true;
}

watch(locale, () => {
  separatorOptions.value[2].title = t("whitespace");
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-text-field
          v-model="count"
          type="number"
          :rules="[useValidateCount()]"
        >
          <template #prepend> {{ t("count") }} </template>
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select v-model="separator" :items="separatorOptions">
          <template #prepend> {{ t("separator") }} </template>
        </v-select>
      </v-col>
      <v-col cols="4">
        <v-checkbox v-model="uppercase" label="Uppercase">
          <template #append>
            <v-btn class="mr-2" @click="generate">
              {{ t("plugin.generate") }}
            </v-btn>
            <v-btn @click="copy"> {{ t("plugin.copy") }} </v-btn>
          </template>
        </v-checkbox>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <v-row>
      <v-textarea
        :model-value="result"
        :readonly="true"
        :clearable="false"
        rows="20"
      ></v-textarea>
    </v-row>
  </v-container>

  <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
</template>

<style scoped></style>
