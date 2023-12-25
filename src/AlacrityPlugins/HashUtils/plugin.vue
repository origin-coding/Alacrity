<script setup lang="ts">
import CryptoJs, { lib } from "crypto-js";
import { computed, ref, watch } from "vue";
import { open } from "@tauri-apps/api/dialog";
import { readBinaryFile } from "@tauri-apps/api/fs";
import { writeText } from "@tauri-apps/api/clipboard";

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
  { title: "MD5", alg: CryptoJs.MD5 },
  { title: "SHA1", alg: CryptoJs.SHA1 },
  { title: "SHA224", alg: CryptoJs.SHA224 },
  { title: "SHA256", alg: CryptoJs.SHA256 },
  { title: "SHA384", alg: CryptoJs.SHA384 },
  { title: "SHA512", alg: CryptoJs.SHA512 },
  { title: "SHA3", alg: CryptoJs.SHA3 },
];

const uppercase = ref(true);

const hashResult = computed(() => {
  return fileInput.value === null
    ? hash(formInput.value)
    : hash(fileInput.value);
});

function hash(input: string | CryptoJs.lib.WordArray) {
  let result = hashAlg.value(input).toString(CryptoJs.enc.Hex);
  if (uppercase.value) {
    result = result.toUpperCase();
  }
  return result;
}

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
  await writeText(hashResult.value);
  copied.value = true;
}
</script>

<template>
  <v-container>
    <v-container class="mb-3">
      <v-row>
        <v-btn class="mr-2" @click="selectFile"> {{ t("select") }} </v-btn>
        <v-btn class="mr-2" @click="clearInput">
          {{ t("plugin.clear") }}
        </v-btn>
        <v-menu :open-on-hover="true">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" append-icon="mdi-chevron-down">
              {{ t("algorithm") }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(option, index) in hashAlgOptions"
              :key="index"
              :value="option.alg"
            >
              <v-list-item-title @click="hashAlg = option.alg">
                {{ option.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-checkbox-btn
          :label="t('upper')"
          v-model="uppercase"
        ></v-checkbox-btn>
      </v-row>
    </v-container>
    <v-textarea v-model="formInput"></v-textarea>

    <v-divider class="ma-6"></v-divider>

    <v-container class="mb-3">
      <v-row>
        <v-btn class="mr-2" @click="copy"> {{ t("plugin.copy") }} </v-btn>
        <v-btn class="mr-2" @click="clearInput">
          {{ t("plugin.clear") }}
        </v-btn>
      </v-row>
    </v-container>
    <v-textarea v-model="hashResult" rows="12" :readonly="true"></v-textarea>
  </v-container>
  <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
</template>

<style scoped></style>
