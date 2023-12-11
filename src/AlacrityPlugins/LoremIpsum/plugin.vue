<script setup lang="ts">
import { faker } from "@faker-js/faker/locale/en_US";
import { Ref, ref, watch } from "vue";
import { LoremModule } from "@faker-js/faker";
import { useI18n } from "vue-i18n";

import messages from "./locale.json";
import { writeText } from "@tauri-apps/api/clipboard";

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
  for (let [index, key] of [
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
      <v-select
        v-model="loremType"
        :items="loremOptions"
        class="v-col-2"
        :label="t('generate.type')"
      ></v-select>
      <v-text-field
        type="number"
        v-model="count"
        class="v-col-4"
        :clearable="false"
        :label="t('generate.count')"
      >
        <template v-slot:append>
          <v-btn @click="generate" class="mr-2">
            {{ t("plugin.generate") }}
          </v-btn>
          <v-btn @click="copy">{{ t("plugin.copy") }}</v-btn>
        </template>
      </v-text-field>
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
