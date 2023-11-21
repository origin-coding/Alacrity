<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { writeText } from "@tauri-apps/api/clipboard";
import { open } from "@tauri-apps/api/dialog";
import { readBinaryFile, readTextFile } from "@tauri-apps/api/fs";

import { base64Decode, base64Encode } from "@/AlacrityPlugins/Base64/util";

// I18n
import { useI18n } from "vue-i18n";
import messages from "./locale.json";
const { t } = useI18n({ messages });

const textContent = ref<string>("");
const textEncoded = ref<string>("");
const binaryContent = ref<Uint8Array | null>(null);
const encoded = computed(() => {
  if (binaryContent.value !== null) {
    return base64Encode(binaryContent.value);
  } else {
    return textEncoded.value;
  }
});

// Whether successfully copied result.
const copied = ref(false);
function copy() {
  writeText(encoded.value).then();
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
  } catch (e) {
    errorAlert.value = true;
  }
});

// Open a file and encode its content.
function selectTextFile() {
  open({ multiple: false }).then((selected) => {
    if (selected !== null) {
      readTextFile(selected as string)
        .then((content) => {
          textContent.value = content;
        })
        .catch(() => {
          errorAlert.value = true;
        });
    }
  });
}

function selectBinaryFile() {
  open({ multiple: false }).then((selected) => {
    if (selected === null) {
      return;
    }
    readBinaryFile(selected as string).then((content) => {
      binaryContent.value = content;
    });
  });
}

function clearInput() {
  textContent.value = "";
  binaryContent.value = null;
}
</script>

<template>
  <v-container>
    <v-container class="mb-3">
      <v-row>
        <v-btn class="mr-2" @click="selectTextFile">
          {{ t("selectFile") }}
        </v-btn>
        <v-btn class="mr-2" @click="selectBinaryFile">
          {{ t("selectImage") }}
        </v-btn>
        <v-btn class="mr-2" @click="clearInput"> {{ t("plugin.clear") }} </v-btn>
      </v-row>
    </v-container>
    <v-textarea v-model="textContent"></v-textarea>

    <v-divider class="ma-6"></v-divider>

    <v-container class="mb-3">
      <v-row>
        <v-btn class="mr-2" @click="copy"> {{ t("plugin.copy") }} </v-btn>
        <v-btn class="mr-2" @click="clearInput"> {{ t("plugin.clear") }} </v-btn>
      </v-row>
    </v-container>
    <v-textarea
      :model-value="encoded"
      @update:modelValue="(value) => (textEncoded = value)"
      rows="12"
    ></v-textarea>
  </v-container>
  <v-snackbar v-model="errorAlert" color="error">{{ t("invalid") }}</v-snackbar>
  <v-snackbar v-model="copied"> {{ t("plugin.copied") }} </v-snackbar>
</template>

<style scoped></style>
