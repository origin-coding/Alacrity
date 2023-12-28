<script setup lang="ts">
import { ref, watch } from "vue";
import { faker } from "@faker-js/faker";
import { useI18n } from "vue-i18n";

import messages from "./locale.json";
import { writeText } from "@tauri-apps/api/clipboard";
import { useValidateCount } from "@/common";

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
          type="number"
          v-model="count"
          :rules="[useValidateCount()]"
        >
          <template v-slot:prepend> {{ t("count") }} </template>
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select v-model="separator" :items="separatorOptions">
          <template v-slot:prepend> {{ t("separator") }} </template>
        </v-select>
      </v-col>
      <v-col cols="4">
        <v-checkbox label="Uppercase" v-model="uppercase">
          <template v-slot:append>
            <v-btn @click="generate" class="mr-2">
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
