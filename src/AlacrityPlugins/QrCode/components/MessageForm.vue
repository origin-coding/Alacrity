<script setup lang="ts">
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

// I18n
import messages from "../locale.json";
import { phoneRule } from "../utils";

const { t } = useI18n({ messages });

const emit = defineEmits<{
  generate: [value: string];
}>();

const message = reactive<{
  phone: string;
  message: string;
}>({
  phone: "",
  message: "",
});

function generateMessage() {
  const generatedMessage = `SMSTO:${message.phone}:${message.message}`;
  emit("generate", generatedMessage);
}
</script>

<template>
  <v-text-field
    v-model="message.phone"
    :label="t('message.phone')"
    :rules="[phoneRule]"
    type="tel"
  ></v-text-field>
  <v-textarea
    v-model="message.message"
    :label="t('message.content')"
  ></v-textarea>
  <v-btn type="submit" @click="generateMessage">{{ t("generate") }}</v-btn>
</template>

<style scoped></style>
