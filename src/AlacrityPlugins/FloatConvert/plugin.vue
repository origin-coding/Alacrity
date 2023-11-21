<script setup lang="ts">
import { computed, Ref, ref, watchEffect } from "vue";

// I18n
import { useI18n } from "vue-i18n";
import messages from "./locale.json";
const { t } = useI18n({ messages });

const BYTE_OFFSET: number = 0;

// User input and buffers.
const inputNum: Ref<number> = ref(0.0);
const view32 = ref(new DataView(new ArrayBuffer(4)));
const view64 = ref(new DataView(new ArrayBuffer(8)));

// Binary arrays.
const bin32 = ref("");
const bin64 = ref("");
// Hexadecimal arrays.
const hex32 = ref("");
const hex64 = ref("");

// Binary components.
const bin32Sign = computed(() => bin32.value.slice(0, 1));
const bin32Exp = computed(() => bin32.value.slice(1, 9));
const bin32Man = computed(() => bin32.value.slice(9, 32));
const bin64Sign = computed(() => bin64.value.slice(0, 1));
const bin64Exp = computed(() => bin64.value.slice(1, 12));
const bin64Man = computed(() => bin64.value.slice(12, 64));

// Update buffers, and all reactive variables.
watchEffect(() => {
  view32.value.setFloat32(BYTE_OFFSET, inputNum.value);

  hex32.value = "";
  new Uint8Array(view32.value.buffer).forEach((value) => {
    hex32.value += value.toString(16).toUpperCase().padStart(2, "0");
  });

  bin32.value = "";
  for (let char of hex32.value) {
    bin32.value += parseInt(char, 16).toString(2).padStart(4, "0");
  }
});

watchEffect(() => {
  view64.value.setFloat64(BYTE_OFFSET, inputNum.value);

  hex64.value = "";
  new Uint8Array(view64.value.buffer).forEach((value) => {
    hex64.value += value.toString(16).toUpperCase().padStart(2, "0");
  });

  bin64.value = "";
  for (let char of hex64.value) {
    bin64.value += parseInt(char, 16).toString(2).padStart(4, "0");
  }
});
</script>

<template>
  <v-container>
    <div class="text-h6 mb-4">{{ t("original") }}</div>
    <v-row>
      <v-text-field
        v-model="inputNum"
        type="number"
        step="1e-100"
        class="v-col-6"
        :hide-details="true"
      >
        <template v-slot:prepend>{{ t("dec") }}</template>
      </v-text-field>
    </v-row>

    <v-divider class="my-6"></v-divider>
    <div class="text-h6 my-4">{{ t("single") }}</div>
    <v-row>
      <v-text-field :model-value="hex32" class="v-col-3" :clearable="false">
        <template v-slot:prepend>{{ t("hex") }}</template>
      </v-text-field>
      <v-text-field :model-value="bin32" class="v-col-5" :clearable="false">
        <template v-slot:prepend>{{ t("bin") }}</template>
      </v-text-field>
    </v-row>
    <v-row>
      <v-text-field :model-value="bin32Sign" class="v-col-2" :clearable="false">
        <template v-slot:prepend>{{ t("sign") }}</template>
      </v-text-field>
      <v-text-field :model-value="bin32Exp" class="v-col-2" :clearable="false">
        <template v-slot:prepend>{{ t("exp") }}</template>
      </v-text-field>
      <v-text-field :model-value="bin32Man" class="v-col-4" :clearable="false">
        <template v-slot:prepend>{{ t("man") }}</template>
      </v-text-field>
    </v-row>

    <v-divider class="my-6"></v-divider>
    <div class="text-h6 my-4">{{ t("double") }}</div>
    <v-row>
      <v-text-field :model-value="hex64" class="v-col-4" :clearable="false">
        <template v-slot:prepend>{{ t("hex") }}</template>
      </v-text-field>
      <v-text-field :model-value="bin64" class="v-col-8" :clearable="false">
        <template v-slot:prepend>{{ t("bin") }}</template>
      </v-text-field>
    </v-row>
    <v-row>
      <v-text-field :model-value="bin64Sign" class="v-col-2" :clearable="false">
        <template v-slot:prepend>{{ t("sign") }}</template>
      </v-text-field>
      <v-text-field :model-value="bin64Exp" class="v-col-3" :clearable="false">
        <template v-slot:prepend>{{ t("exp") }}</template>
      </v-text-field>
      <v-text-field :model-value="bin64Man" class="v-col-7" :clearable="false">
        <template v-slot:prepend>{{ t("man") }}</template>
      </v-text-field>
    </v-row>
  </v-container>
</template>

<style scoped></style>
