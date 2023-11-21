<script setup lang="ts">
import { computed, ref } from "vue";

import { useI18n } from "vue-i18n";
import messages from "./locale.json";
const { t } = useI18n({ messages });

const inputUrl = ref("");

// Static method: URL.canParse is not supported in Chrome-based browsers, so we write one.
function canParse(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

const url = computed(() => {
  return canParse(inputUrl.value)
    ? new URL(inputUrl.value)
    : {
        protocol: "",
        hostname: "",
        port: "",
        pathname: "",
        hash: "",
        search: "",
      };
});

const protocol = computed(() => url.value.protocol);
const hostname = computed(() => url.value.hostname);
const port = computed(() => url.value.port);
const host = computed(() => `${hostname.value}:${port.value}`);
const origin = computed(() => `${protocol.value}//${host.value}`);
const path = computed(() => url.value.pathname);
const search = computed(() => url.value.search);
const hash = computed(() => url.value.hash);
</script>

<template>
  <v-container>
    <v-row class="ma-0">
      <v-text-field v-model="inputUrl" class="v-col-10">
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("input") }}</div>
        </template>
      </v-text-field>
    </v-row>

    <v-divider class="mb-6"></v-divider>

    <v-row class="ma-0">
      <v-text-field
        :model-value="protocol"
        class="v-col-2"
        :clearable="false"
        :readonly="true"
      >
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("protocol") }}</div>
        </template>
      </v-text-field>
      <v-text-field
        :model-value="port"
        class="v-col-2"
        :clearable="false"
        :readonly="true"
      >
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("port") }}</div>
        </template>
      </v-text-field>
    </v-row>
    <v-row class="ma-0">
      <v-text-field
        :model-value="host"
        class="v-col-5"
        :clearable="false"
        :readonly="true"
      >
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("host") }}</div>
        </template>
      </v-text-field>
      <v-text-field
        :model-value="hostname"
        class="v-col-5"
        :clearable="false"
        :readonly="true"
      >
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("hostname") }}</div>
        </template>
      </v-text-field>
    </v-row>
    <v-row class="ma-0">
      <v-text-field
        :model-value="origin"
        class="v-col-6"
        :clearable="false"
        :readonly="true"
      >
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("origin") }}</div>
        </template>
      </v-text-field>
    </v-row>
    <v-row class="ma-0">
      <v-text-field
        :model-value="path"
        class="v-col-10"
        :clearable="false"
        :readonly="true"
      >
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("path") }}</div>
        </template>
      </v-text-field>
    </v-row>
    <v-row class="ma-0">
      <v-text-field
        :model-value="search"
        class="v-col-10"
        :clearable="false"
        :readonly="true"
      >
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("search") }}</div>
        </template>
      </v-text-field>
    </v-row>
    <v-row class="ma-0">
      <v-text-field
        :model-value="hash"
        class="v-col-10"
        :clearable="false"
        :readonly="true"
      >
        <template v-slot:prepend>
          <div class="font-weight-bold">{{ t("hash") }}</div>
        </template>
      </v-text-field>
    </v-row>
  </v-container>
</template>

<style scoped></style>
