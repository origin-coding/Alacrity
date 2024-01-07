<script setup lang="ts">
import { ref, Ref } from "vue";
import { writeText } from "@tauri-apps/api/clipboard";
import { useI18n } from "vue-i18n";
import { pki } from "node-forge";

import messages from "./locale.json";

const { t, locale } = useI18n({ messages });

const length: Ref<512 | 1024 | 2048 | 4096> = ref(1024);
const lengthOptions = ref([
  { value: 512, title: "512" },
  { value: 1024, title: "1024" },
  { value: 2048, title: "2048" },
  { value: 4096, title: "4096" },
]);

const publicKey = ref("");
const privateKey = ref("");

async function generate() {
  pki.rsa.generateKeyPair({ bits: length.value }, (_, keypair) => {
    publicKey.value = pki.publicKeyToPem(keypair.publicKey);
    privateKey.value = pki.privateKeyToPem(keypair.privateKey);
  });
}

const copied = ref(false);

async function copyPublic() {
  await writeText(publicKey.value);
  copied.value = true;
}

async function copyPrivate() {
  await writeText(privateKey.value);
  copied.value = true;
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col :cols="locale === 'en' ? 8 : 6">
        <v-select v-model="length" :items="lengthOptions">
          <template v-slot:prepend>{{ t("length") }}</template>

          <template v-slot:append>
            <v-btn @click="generate" class="mr-2">
              {{ t("plugin.generate") }}
            </v-btn>
            <v-btn @click="copyPublic" class="mr-2">
              {{ t("copyPublic") }}
            </v-btn>
            <v-btn @click="copyPrivate">{{ t("copyPrivate") }}</v-btn>
          </template>
        </v-select>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <v-row>
      <v-col cols="6">
        <v-textarea
          :model-value="publicKey"
          label="Public Key"
          :readonly="true"
          :clearable="false"
          :rows="20"
        ></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea
          :model-value="privateKey"
          label="Private Key"
          :readonly="true"
          :clearable="false"
          :rows="20"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
</template>

<style scoped></style>
