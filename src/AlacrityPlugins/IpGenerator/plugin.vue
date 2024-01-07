<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { Ref, ref } from "vue";
import { writeText } from "@tauri-apps/api/clipboard";
import { useValidateCount } from "@/common";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const count = ref(1);
const version: Ref<"ip" | "ipv4" | "ipv6"> = ref("ip");
const versionOptions = ref([
  { value: "ip", title: "IPv4/v6" },
  { value: "ipv4", title: "IPv4" },
  { value: "ipv6", title: "IPV6" },
]);

const result = ref("");

function generate() {
  result.value = Array.from({ length: count.value })
    .map((_) => faker.internet[version.value]())
    .join("\n");
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
      <v-col cols="3">
        <v-text-field
          type="number"
          v-model="count"
          :rules="[useValidateCount()]"
        >
          <template v-slot:prepend> {{ t("count") }} </template>
        </v-text-field>
      </v-col>

      <v-col cols="4">
        <v-select v-model="version" :items="versionOptions">
          <template v-slot:append>
            <v-btn @click="generate" class="mr-2">
              {{ t("plugin.generate") }}
            </v-btn>
            <v-btn @click="copy"> {{ t("plugin.copy") }} </v-btn>
          </template>
        </v-select>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <v-row>
      <v-textarea
        :model-value="result"
        :readonly="true"
        :clearable="false"
        rows="20"
      ></v-textarea>
    </v-row>
  </v-container>

  <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
</template>

<style scoped></style>
