<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { v4 as uuidV4, validate as uuidValidate } from "uuid";
import { save } from "@tauri-apps/api/dialog";
import { writeTextFile } from "@tauri-apps/api/fs";
import { writeText } from "@tauri-apps/api/clipboard";

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
  const uuidList: Array<string> = Array.from({ length: nums }, () => {})
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
function download() {
  save({
    filters: [{ name: "Text", extensions: ["txt"] }],
  }).then((filepath) => {
    if (filepath === null) {
      return;
    }
    writeTextFile(filepath, generated.value).then();
  });
}
function copy() {
  writeText(generated.value).then();
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
          <template v-slot:append>
            <v-btn class="mr-2" @click="generate(nums, upper)">
              {{ t("generate") }}
            </v-btn>
            <v-btn class="mr-2" @click="download" :disabled="btnDisabled">
              {{ t("plugin.download") }}
            </v-btn>
            <v-btn class="mr-2" @click="copy" :disabled="btnDisabled">
              {{ t("plugin.copy") }}
            </v-btn>
            <v-checkbox-btn
              v-model="upper"
              :label="t('upper')"
            ></v-checkbox-btn>
          </template>
        </v-text-field>
        <v-text-field
          class="v-col-5"
          v-model="toValidate"
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
