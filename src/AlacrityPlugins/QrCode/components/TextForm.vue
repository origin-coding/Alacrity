<script setup lang="ts">
import { ref } from "vue";

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
  <v-textarea v-model="content"></v-textarea>
  <v-btn @click="emit('generate', content)">{{ t("generate") }}</v-btn>
</template>

<style scoped></style>
