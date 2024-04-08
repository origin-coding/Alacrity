<script setup lang="ts">
import { writeText } from "@tauri-apps/api/clipboard";
import { save } from "@tauri-apps/api/dialog";
import { writeTextFile } from "@tauri-apps/api/fs";
import { v4 as uuidV4, validate as uuidValidate } from "uuid";
import { computed, ref, watch } from "vue";
// I18n
import { useI18n } from "vue-i18n";

import messages from "./locale.json";

const { t } = useI18n({ messages });

const nums = ref(1);
const upper = ref(true);

const generated = ref("");
const toValidate = ref("");

const displayResult = ref(false);
const validateResult = ref(true);
// Whether result is copied to clipboard.
const copied = ref(false);

// Validate a UUID.
watch(toValidate, (newValue) => {
  validateResult.value = uuidValidate(newValue);
  displayResult.value = true;
});

// Generate UUIDs.
function generate(nums: number, upper: boolean) {
  const uuidList: Array<string> = Array.from({ length: nums })
    .map((_) => uuidV4())
    .map((uuid) => (upper ? uuid.toUpperCase() : uuid));
  generated.value = uuidList.join("\n");
}

// Predicate whether these download or copy buttons are disabled.
// Set them to disabled when there is nothing to download/copy.
const btnDisabled = computed(() => {
  return generated.value === "";
});

// Download functions.
async function download() {
  const filepath = await save({
    filters: [{ name: "Text", extensions: ["txt"] }],
  });

  if (filepath !== null) {
    await writeTextFile(filepath, generated.value);
  }
}

async function copy() {
  await writeText(generated.value);
  copied.value = true;
}
</script>

<template>
  <v-container>
    <v-container>
      <v-row>
        <v-text-field
          v-model="nums"
          type="number"
          :label="t('count')"
          class="v-col-7"
        >
          <template #append>
            <v-btn class="mr-2" @click="generate(nums, upper)">
              {{ t("generate") }}
            </v-btn>
            <v-btn class="mr-2" :disabled="btnDisabled" @click="download">
              {{ t("plugin.download") }}
            </v-btn>
            <v-btn class="mr-2" :disabled="btnDisabled" @click="copy">
              {{ t("plugin.copy") }}
            </v-btn>
            <v-checkbox-btn
              v-model="upper"
              :label="t('upper')"
            ></v-checkbox-btn>
          </template>
        </v-text-field>
        <v-text-field
          v-model="toValidate"
          class="v-col-5"
          :label="t('validate')"
        ></v-text-field>
      </v-row>
      <v-textarea v-model="generated" rows="20"></v-textarea>
    </v-container>
  </v-container>
  <v-snackbar
    v-model="displayResult"
    variant="tonal"
    :color="validateResult ? 'primary' : 'error'"
  >
    输入的UUID{{ validateResult ? "" : "不" }}是合法的UUID
    {{ validateResult ? "" : "！" }}
  </v-snackbar>
  <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
</template>

<style scoped></style>
