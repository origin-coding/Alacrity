<script setup lang="ts">
import { ref } from "vue";
import { urlRule } from "../utils";

// I18n
import { useI18n } from "vue-i18n";
import messages from "../locale.json";
const { t } = useI18n({ messages });

const emit = defineEmits<{
  generate: [value: string];
}>();

const content = ref("");
</script>

<template>
  <v-text-field
    v-model="content"
    placeholder="https://www.example.com"
    :rules="[urlRule]"
    type="url"
  ></v-text-field>
  <v-btn @click="emit('generate', content)">{{ t("generate") }}</v-btn>
</template>

<style scoped></style>
