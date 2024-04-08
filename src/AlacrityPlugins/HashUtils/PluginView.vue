<script setup lang="ts">
import { writeText } from "@tauri-apps/api/clipboard";
import { open } from "@tauri-apps/api/dialog";
import { readBinaryFile } from "@tauri-apps/api/fs";
import CryptoJs, { lib } from "crypto-js";
import { computed, ref, watch } from "vue";
// I18n
import { useI18n } from "vue-i18n";

import messages from "./locale.json";

const { t } = useI18n({ messages });

const formInput = ref("");
const fileInput = ref<CryptoJs.lib.WordArray | null>(null);

watch(formInput, (_) => {
  fileInput.value = null;
});

// CryptoJs' hash algorithms share a type called "HashHelper", but it's not exported.
// We use MD5 as a default.
const hashAlg = ref<typeof CryptoJs.SHA1>(CryptoJs.MD5);
const hashAlgOptions = [
  { title: "MD5", value: CryptoJs.MD5 },
  { title: "SHA1", value: CryptoJs.SHA1 },
  { title: "SHA224", value: CryptoJs.SHA224 },
  { title: "SHA256", value: CryptoJs.SHA256 },
  { title: "SHA384", value: CryptoJs.SHA384 },
  { title: "SHA512", value: CryptoJs.SHA512 },
  { title: "SHA3", value: CryptoJs.SHA3 },
];

const uppercase = ref(true);

function hash(input: string | CryptoJs.lib.WordArray) {
  let result = hashAlg.value(input).toString(CryptoJs.enc.Hex);
  if (uppercase.value) {
    result = result.toUpperCase();
  }
  return result;
}

const result = computed(() => {
  return fileInput.value === null
    ? hash(formInput.value)
    : hash(fileInput.value);
});

function uint8ArrayToWordArray(uint8Array: Uint8Array): lib.WordArray {
  const words: number[] = [];
  for (let i = 0; i < uint8Array.length; i += 4) {
    const word =
      (uint8Array[i] << 24) |
      (uint8Array[i + 1] << 16) |
      (uint8Array[i + 2] << 8) |
      uint8Array[i + 3];
    words.push(word);
  }
  return lib.WordArray.create(words, uint8Array.length);
}

async function selectFile() {
  const file = await open({ multiple: false });

  if (file === null) {
    return;
  }

  const content = await readBinaryFile(file as string);
  fileInput.value = uint8ArrayToWordArray(content);
}

function clearInput() {
  formInput.value = "";
  fileInput.value = null;
}

const copied = ref(false);

async function copy() {
  await writeText(result.value);
  copied.value = true;
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-select v-model="hashAlg" :items="hashAlgOptions">
          <template #prepend> {{ t("algorithm") }} </template>
          <template #append>
            <v-checkbox-btn
              v-model="uppercase"
              :label="t('upper')"
            ></v-checkbox-btn>
          </template>
        </v-select>
      </v-col>
      <v-col cols="3">
        <v-btn class="mr-2" @click="selectFile"> {{ t("select") }} </v-btn>
        <v-btn class="mr-2" @click="copy"> {{ t("plugin.copy") }} </v-btn>
        <v-btn class="mr-2" @click="clearInput">
          {{ t("plugin.clear") }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea v-model="formInput"></v-textarea>
      </v-col>
    </v-row>

    <v-divider class="ma-6"></v-divider>

    <v-row>
      <v-col cols="12">
        <v-textarea v-model="result" rows="12" :readonly="true"></v-textarea>
      </v-col>
    </v-row>
  </v-container>

  <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
</template>

<style scoped></style>
