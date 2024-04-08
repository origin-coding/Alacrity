<script setup lang="ts">
import { LoremModule } from "@faker-js/faker";
import { faker } from "@faker-js/faker/locale/en_US";
import { writeText } from "@tauri-apps/api/clipboard";
import { Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import { useValidateCount } from "@/common";

import messages from "./locale.json";

const { t, locale } = useI18n({ messages });

const count: Ref<number> = ref(1);
const loremType: Ref<string> = ref("paragraphs");
const result = ref("");

const copied = ref(false);

// Lorem options for v-select
const loremOptions = ref([
  { value: "paragraphs", title: t("option.paragraphs") },
  { value: "paragraph", title: t("option.paragraph") },
  { value: "sentences", title: t("option.sentences") },
  { value: "sentence", title: t("option.sentence") },
  { value: "lines", title: t("option.lines") },
  { value: "words", title: t("option.words") },
  { value: "word", title: t("option.word") },
  { value: "slug", title: t("option.slug") },
]);

function generate() {
  count.value = Number(count.value);

  const generator = faker.lorem[loremType.value as keyof LoremModule] as (
    count: number,
  ) => string;

  result.value = generator(count.value);
}

async function copy() {
  await writeText(result.value);
  copied.value = true;
}

watch(locale, () => {
  for (const [index, key] of [
    "paragraphs",
    "paragraph",
    "sentences",
    "sentence",
    "lines",
    "words",
    "word",
    "slug",
  ].entries()) {
    loremOptions.value[index].title = t(`option.${key}`);
  }
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-select v-model="loremType" :items="loremOptions">
          <template #prepend>{{ t("generate.type") }}</template>
        </v-select>
      </v-col>

      <v-col cols="4">
        <v-text-field
          v-model="count"
          type="number"
          :clearable="false"
          :rules="[useValidateCount()]"
        >
          <template #prepend>
            {{ t("plugin.count") }}
          </template>

          <template #append>
            <v-btn class="mr-2" @click="generate">
              {{ t("plugin.generate") }}
            </v-btn>
            <v-btn @click="copy">{{ t("plugin.copy") }}</v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <v-row>
      <v-col cols="12">
        <v-textarea
          :model-value="result"
          :readonly="true"
          :clearable="false"
          rows="20"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>

  <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
</template>

<style scoped></style>
