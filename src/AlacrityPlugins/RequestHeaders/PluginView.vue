<script setup lang="ts">
import { invoke } from "@tauri-apps/api";
import { writeText } from "@tauri-apps/api/clipboard";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

// I18n
import messages from "./locale.json";
import { urlRule } from "./utils";

const { t } = useI18n({ messages });

const url = ref("");
const method = ref("GET");
const headers = ref("");
const showError = ref(false);

const methods = [
  "GET",
  "POST",
  "DELETE",
  "PUT",
  "OPTIONS",
  "HEAD",
  "TRACE",
  "PATCH",
  "CONNECT",
];

function getHeaders() {
  invoke("get_headers", { url: url.value, method: method.value })
    .then((res) => {
      headers.value = res as string;
    })
    .catch((_) => {
      showError.value = true;
    });
}

const copied = ref(false);

async function copy() {
  await writeText(headers.value);
  copied.value = true;
}
</script>

<template>
  <v-container>
    <v-row>
      <v-text-field
        v-model="url"
        :rules="[urlRule]"
        :label="t('url')"
        class="v-col-5"
      ></v-text-field>
      <v-select v-model="method" :items="methods" class="v-col-5">
        <template #append>
          <v-btn :disabled="url === ''" class="mr-2" @click="getHeaders">
            {{ t("getHeaders") }}
          </v-btn>
          <v-btn @click="copy">{{ t("plugin.copy") }}</v-btn>
        </template>
      </v-select>
    </v-row>
    <v-textarea
      :model-value="headers"
      :readonly="true"
      rows="20"
      :clearable="false"
    ></v-textarea>
  </v-container>
  <v-snackbar v-model="showError" color="error">
    {{ t("networkError") }}
  </v-snackbar>
  <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
</template>

<style scoped></style>
