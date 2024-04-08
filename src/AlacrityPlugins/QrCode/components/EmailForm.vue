<script setup lang="ts">
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

// I18n
import messages from "../locale.json";
import { emailRule } from "../utils";

const { t } = useI18n({ messages });

const emit = defineEmits<{
  generate: [value: string];
}>();

const email = reactive<{
  address: string;
  subject: string;
  message: string;
}>({
  address: "",
  subject: "",
  message: "",
});

function generateEmail() {
  const generatedEmail = `MATMSG:TO:${email.address};SUB:${email.subject};BODY:${email.message};;`;
  emit("generate", generatedEmail);
}
</script>

<template>
  <v-text-field
    v-model="email.address"
    :label="t('email.address')"
    :rules="[emailRule]"
    type="email"
  ></v-text-field>
  <v-text-field
    v-model="email.subject"
    :label="t('email.subject')"
  ></v-text-field>
  <v-textarea v-model="email.message" :label="t('email.content')"></v-textarea>
  <v-btn @click="generateEmail">{{ t("generate") }}</v-btn>
</template>

<style scoped></style>
