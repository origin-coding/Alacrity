<script setup lang="ts">
import { reactive, Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { emailRule, phoneRule, urlRule } from "@/AlacrityPlugins/QrCode/utils";

// I18n
import messages from "../locale.json";

const { t, locale } = useI18n({ messages });

const emit = defineEmits<{
  generate: [value: string];
}>();

const genderOptions: Ref<Array<{ title: string; value: string }>> = ref([
  { title: t("contact.male"), value: "M" },
  { title: t("contact.female"), value: "F" },
  { title: t("contact.unknown"), value: "U" },
]);

watch(locale, () => {
  for (const [index, key] of ["male", "female", "unknown"].entries()) {
    genderOptions.value[index].title = t(`contact.${key}`);
  }
});

const cardInfo = reactive<{
  name: string;
  gender: "U" | "M" | "F";
  phone: string;
  email: string;
  company: string;
  title: string;
  address: string;
  birthday: Date | string;
  website: string;
}>({
  name: "",
  gender: "U",
  phone: "",
  email: "",
  company: "",
  title: "",
  address: "",
  birthday: "",
  website: "",
});

function generateCard() {
  const cardItems: Array<string> = [
    `BEGIN:VCARD`,
    `VERSION:3.0`,
    `N:${cardInfo.name}`,
    `FN:${cardInfo.name}`,
    `GENDER:${cardInfo.gender}`,
    `TEL:${cardInfo.phone}`,
    `EMAIL:${cardInfo.email}`,
    `ORG:${cardInfo.company}`,
    `TITLE:${cardInfo.title}`,
    `ADR:${cardInfo.address}`,
    `BDAY:${cardInfo.birthday}`,
    `URL:${cardInfo.website}`,
    `END:VCARD`,
  ].map((item) => {
    return item.replaceAll("null", "");
  });
  const card = cardItems.join("\n");

  emit("generate", card);
}
</script>

<template>
  <v-text-field
    v-model="cardInfo.name"
    :label="t('contact.name')"
  ></v-text-field>

  <v-row>
    <v-col cols="6">
      <v-select
        v-model="cardInfo.gender"
        :items="genderOptions"
        item-title="title"
        item-value="value"
        :label="t('contact.gender')"
      ></v-select>
    </v-col>
    <v-col cols="6">
      <v-text-field
        v-model="cardInfo.birthday"
        :label="t('contact.birthday')"
        type="date"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-text-field
    v-model="cardInfo.phone"
    :label="t('contact.phone')"
    :rules="[phoneRule]"
    type="tel"
  ></v-text-field>
  <v-text-field
    v-model="cardInfo.email"
    :label="t('contact.email')"
    :rules="[emailRule]"
    type="email"
  ></v-text-field>
  <v-text-field
    v-model="cardInfo.company"
    :label="t('contact.company')"
  ></v-text-field>
  <v-text-field
    v-model="cardInfo.title"
    :label="t('contact.title')"
  ></v-text-field>
  <v-text-field
    v-model="cardInfo.address"
    :label="t('contact.address')"
  ></v-text-field>
  <v-text-field
    v-model="cardInfo.website"
    :label="t('contact.website')"
    :rules="[urlRule]"
  ></v-text-field>
  <v-btn @click="generateCard">{{ t("generate") }}</v-btn>
</template>

<style scoped></style>
