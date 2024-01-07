<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { faker } from "@faker-js/faker";

import messages from "./locale.json";
import {
  useValidateCount,
  useValidateNotEmpty,
  useValidateNotLessThan,
  useValidateNotMoreThan,
} from "@/common";

const { t, locale } = useI18n({ messages });

const kindOptions = ref([
  { value: "int", title: t("int") },
  { value: "float", title: t("float") },
]);

const orderOptions = ref([
  { value: "unordered", title: t("unordered") },
  { value: "ascending", title: t("ascending") },
  { value: "descending", title: t("descending") },
]);

watch(locale, () => {
  for (let [index, key] of ["int", "float"].entries()) {
    kindOptions.value[index].title = t(key);
  }

  for (let [index, key] of ["unordered", "ascending", "descending"].entries()) {
    orderOptions.value[index].title = t(key);
  }
});

const precisionOptions = ref([
  { value: "0.1", title: "0.1" },
  { value: "0.01", title: "0.01" },
  { value: "0.001", title: "0.001" },
  { value: "0.0001", title: "0.0001" },
]);

const randomOptions = reactive({
  min: 10,
  max: 100,
  count: 10,
  unique: false,
  kind: "int",
  separator: " ",
  order: "unordered",
  precision: 0.01,
});

const result = ref("");

function generate() {
  if (
    randomOptions.kind === "int" &&
    randomOptions.max - randomOptions.min < 1
  ) {
    return;
  }

  const separator =
    randomOptions.separator === "" ? " " : randomOptions.separator;

  let numbers: Array<number>;

  if (randomOptions.unique) {
    numbers = faker.helpers.uniqueArray(
      () =>
        faker.number[randomOptions.kind as "int" | "float"]({
          min: randomOptions.min,
          max: randomOptions.max,
          precision: randomOptions.precision,
        }),
      randomOptions.count,
    );
  } else {
    numbers = Array.from({ length: randomOptions.count }).map((_) =>
      faker.number[randomOptions.kind as "int" | "float"]({
        min: randomOptions.min,
        max: randomOptions.max,
        precision: randomOptions.precision,
      }),
    );
  }

  switch (randomOptions.order) {
    case "ascending":
      numbers.sort();
      break;
    case "descending":
      numbers.sort().reverse();
      break;
    default:
      break;
  }

  result.value = numbers.join(separator);
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-text-field
          v-model="randomOptions.min"
          :clearable="false"
          type="number"
          :rules="[
            useValidateNotEmpty(),
            useValidateNotMoreThan(randomOptions.max),
          ]"
        >
          <template v-slot:prepend>{{ t("min") }}</template>
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="randomOptions.max"
          :clearable="false"
          type="number"
          :rules="[
            useValidateNotEmpty(),
            useValidateNotLessThan(randomOptions.min),
          ]"
        >
          <template v-slot:prepend>{{ t("max") }}</template>
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="randomOptions.count"
          :clearable="false"
          type="number"
          :rules="[useValidateCount()]"
        >
          <template v-slot:prepend>{{ t("count") }}</template>
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-checkbox
          v-model="randomOptions.unique"
          :label="t('unique')"
        ></v-checkbox>
      </v-col>
      <v-col cols="2">
        <v-btn @click="generate">{{ t("plugin.generate") }}</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-select v-model="randomOptions.kind" :items="kindOptions">
          <template v-slot:prepend>{{ t("type") }}</template>
        </v-select>
      </v-col>
      <v-col cols="3">
        <v-select v-model="randomOptions.order" :items="orderOptions">
          <template v-slot:prepend>{{ t("order") }}</template>
        </v-select>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="randomOptions.separator">
          <template v-slot:prepend>{{ t("separator") }}</template>
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select v-model="randomOptions.precision" :items="precisionOptions">
          <template v-slot:prepend>{{ t("precision") }}</template>
        </v-select>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <v-row>
      <v-col>
        <v-textarea
          :model-value="result"
          :readonly="true"
          :clearable="false"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
