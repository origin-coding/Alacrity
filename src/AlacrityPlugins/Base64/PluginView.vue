<script setup lang="ts">
import { writeText } from "@tauri-apps/api/clipboard";
import { open } from "@tauri-apps/api/dialog";
import { readBinaryFile, readTextFile } from "@tauri-apps/api/fs";
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { base64Decode, base64Encode } from "@/AlacrityPlugins/Base64/util";

// I18n
import messages from "./locale.json";

const { t } = useI18n({ messages });

const textContent = ref<string>("");
const textEncoded = ref<string>("");
const binaryContent = ref<Uint8Array | null>(null);
const encoded = computed(() => {
  if (binaryContent.value !== null) {
    return base64Encode(binaryContent.value);
  }
  return textEncoded.value;
});

// Whether successfully copied result.
const copied = ref(false);

async function copy() {
  await writeText(encoded.value);
  copied.value = true;
}

watch(textContent, async (newValue: string) => {
  binaryContent.value = null;

  textEncoded.value = base64Encode(newValue);
});

// Whether an error occurred when trying to decode from text.
const errorAlert = ref(false);

watch(textEncoded, (newValue: string) => {
  try {
    textContent.value = base64Decode(newValue);
  } catch (_) {
    errorAlert.value = true;
  }
});

// Open a file and encode its content.
async function selectTextFile() {
  const file = await open({ multiple: false });

  if (file === null) {
    return;
  }

  textContent.value = await readTextFile(file as string);
}

async function selectBinaryFile() {
  const file = await open({ multiple: false });

  if (file === null) {
    return;
  }

  binaryContent.value = await readBinaryFile(file as string);
}

function clearInput() {
  textContent.value = "";
  binaryContent.value = null;
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <v-btn class="mr-2" @click="selectTextFile">
          {{ t("selectFile") }}
        </v-btn>
        <v-btn class="mr-2" @click="selectBinaryFile">
          {{ t("selectImage") }}
        </v-btn>
        <v-btn class="mr-2" @click="clearInput">
          {{ t("plugin.clear") }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea v-model="textContent"></v-textarea>
      </v-col>
    </v-row>

    <v-divider class="ma-6"></v-divider>

    <v-row>
      <v-col cols="2">
        <v-btn class="mr-2" @click="copy"> {{ t("plugin.copy") }} </v-btn>
        <v-btn class="mr-2" @click="clearInput">
          {{ t("plugin.clear") }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          :model-value="encoded"
          rows="12"
          @update:model-value="(value) => (textEncoded = value)"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>

  <v-snackbar v-model="errorAlert" color="error">{{ t("invalid") }}</v-snackbar>
  <v-snackbar v-model="copied"> {{ t("plugin.copied") }} </v-snackbar>
</template>

<style scoped></style>
