<script setup lang="ts">
import { reactive } from "vue";
// I18n
import { useI18n } from "vue-i18n";

import messages from "../locale.json";

const { t } = useI18n({ messages });

const emit = defineEmits<{
  generate: [value: string];
}>();

const types = ["WPA", "No password", "WEP", "WPA2-EAP"] as const;
type wifiType = (typeof types)[number];

const wifi = reactive<{
  ssid: string;
  type: wifiType;
  password: string;
  hidden: boolean;
}>({
  ssid: "",
  type: "WPA",
  password: "",
  hidden: false,
});

function generateQRCode() {
  const type = wifi.type === "No password" ? "" : wifi.type;
  const password = type === "" ? "" : wifi.password;
  const connection = `WIFI:T:${type};S:${wifi.ssid};P:${password};H:${wifi.hidden};;`;
  emit("generate", connection);
}
</script>

<template>
  <v-text-field v-model="wifi.ssid" label="SSID"></v-text-field>
  <v-text-field
    v-model="wifi.password"
    :label="t('wifi.password')"
    :disabled="wifi.type === 'No password'"
  ></v-text-field>
  <v-row>
    <v-col cols="6">
      <v-select v-model="wifi.type" :label="t('wifi.encrypt')" :items="types">
      </v-select>
    </v-col>
    <v-col cols="6">
      <v-checkbox v-model="wifi.hidden" :label="t('wifi.hidden')">
        <v-tooltip activator="parent" location="bottom">
          {{ t("wifi.hiddenTip") }}
        </v-tooltip>
      </v-checkbox>
    </v-col>
  </v-row>
  <v-btn @click="generateQRCode">{{ t("generate") }}</v-btn>
</template>

<style scoped></style>
