<script setup lang="ts">
import { computed, ComputedRef, reactive, ref, watch } from "vue";
import { Faker, SexType } from "@faker-js/faker";
import { faker as fakerEN_US } from "@faker-js/faker/locale/en_US";
import { faker as fakerZH_CN } from "@faker-js/faker/locale/zh_CN";
import dayjs from "dayjs";
import { writeText } from "@tauri-apps/api/clipboard";

// I18n
import { useI18n } from "vue-i18n";
import messages from "./locale.json";
import { save } from "@tauri-apps/api/dialog";
import { writeTextFile } from "@tauri-apps/api/fs";
import { useValidateCount } from "@/common";
const { t, locale } = useI18n({ messages });

const faker: ComputedRef<Faker> = computed(() => {
  return { zhHans: fakerZH_CN, en: fakerEN_US }[locale.value] || fakerEN_US;
});

const result = ref("");

const config = reactive({
  title: false, // With title.
  lines: 1, // Lines, default 1.
  // Columns
  columns: {
    name: false, // Male, female or both.
    date: false, // Past, future or both.
    account: false,
    sex: false,
    email: false,
    phone: false,
    avatar: false,
    description: false, // Lorem sentence.
  },
  name: "all",
  date: "all",
});

function generate() {
  const title = Object.keys(config.columns).filter(
    (k) => config.columns[k as keyof typeof config.columns],
  );
  result.value = config.title ? title.join(",") + "\n" : "";

  result.value += Array.from({ length: config.lines })
    .map((_) =>
      [
        config.columns.name
          ? config.name === "all"
            ? faker.value.person.fullName()
            : config.name === "male"
              ? faker.value.person.fullName({ sex: "male" as SexType })
              : faker.value.person.fullName({ sex: "female" as SexType })
          : "",
        config.columns.date
          ? dayjs(
              config.date === "all"
                ? faker.value.date.anytime()
                : config.date === "past"
                  ? faker.value.date.past()
                  : faker.value.date.future(),
            ).format("YYYY-MM-DD")
          : "",
        config.columns.account ? faker.value.internet.userName() : "",
        config.columns.sex ? faker.value.person.sex() : "",
        config.columns.email ? faker.value.internet.email() : "",
        config.columns.phone ? faker.value.phone.number() : "",
        config.columns.avatar ? faker.value.image.avatar() : "",
        config.columns.description ? faker.value.lorem.sentence() : "",
      ]
        .filter((value) => value !== "")
        .join(","),
    )
    .filter((line) => line !== "") // Exclude empty lines.
    .join("\n");
}

const copied = ref(false);
async function copy() {
  await writeText(result.value);
  copied.value = true;
}

async function download() {
  const filepath = await save({
    filters: [{ name: "CSV Files", extensions: ["csv"] }],
  });

  if (filepath !== null) {
    await writeTextFile(filepath, result.value);
  }
}

const labels = reactive({
  account: t("account"),
  name: t("name"),
  date: t("date"),
  sex: t("sex"),
  email: t("email"),
  phone: t("phone"),
  avatar: t("avatar"),
  description: t("description"),
});

watch(locale, () => {
  Object.keys(labels).forEach((key) => {
    labels[key as keyof typeof labels] = t(key);
  });

  for (let [index, key] of ["all", "male", "female"].entries()) {
    options.name[index].title = t(key);
  }
  for (let [index, key] of ["all", "past", "future"].entries()) {
    options.date[index].title = t(key);
  }
});

const options = reactive({
  name: [
    { title: t("all"), value: "all" },
    { title: t("male"), value: "male" },
    { title: t("female"), value: "female" },
  ],
  date: [
    { title: t("all"), value: "all" },
    { title: t("past"), value: "past" },
    { title: t("future"), value: "future" },
  ],
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-text-field
          v-model="config.lines"
          type="number"
          :rules="[useValidateCount()]"
          :clearable="false"
        >
          <template v-slot:prepend>{{ t("plugin.count") }}</template>
        </v-text-field>
      </v-col>

      <v-col cols="5">
        <v-checkbox :label="t('title')" v-model="config.title">
          <template v-slot:append>
            <v-btn @click="generate" class="mr-2">
              {{ t("plugin.generate") }}
            </v-btn>
            <v-btn @click="copy" class="mr-2">{{ t("plugin.copy") }}</v-btn>
            <v-btn @click="download">{{ t("plugin.download") }}</v-btn>
          </template>
        </v-checkbox>
      </v-col>
    </v-row>

    <v-row>
      <!--suppress JSUnusedLocalSymbols -->
      <template v-for="(_, key) in config.columns" :key="key">
        <v-select
          v-if="key === 'name' || key === 'date'"
          :items="options[key]"
          v-model="config[key]"
        >
          <template v-slot:prepend>
            <v-checkbox-btn
              :label="labels[key]"
              v-model="config.columns[key]"
            ></v-checkbox-btn>
          </template>
        </v-select>
        <v-checkbox
          v-else
          :label="labels[key]"
          v-model="config.columns[key]"
        ></v-checkbox>
      </template>
    </v-row>

    <v-textarea
      :model-value="result"
      :readonly="true"
      :clearable="false"
      rows="20"
    ></v-textarea>

    <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
  </v-container>
</template>

<style scoped></style>
