<script setup lang="ts">
import { useTimestamp } from "@vueuse/core";
import { computed, Ref, ref, watch } from "vue";
import dayjs from "dayjs";
import { useI18n } from "vue-i18n";

import messages from "./locale.json";

const { t, locale } = useI18n({ messages });

const { timestamp, pause, resume, isActive } = useTimestamp({ controls: true });
const timestampBySeconds = computed(() => {
  return Math.floor(timestamp.value / 1000);
});

function toggleUpdate() {
  const func = isActive.value ? pause : resume;
  func();
}

const input = ref(dayjs().valueOf());
const convertType: Ref<"second" | "millisecond"> = ref("millisecond");
const typeOptions = ref([
  { title: t("second"), value: "second" },
  { title: t("millisecond"), value: "millisecond" },
]);

const inputTimestamp = ref(dayjs().valueOf());
function convert() {
  inputTimestamp.value =
    convertType.value === "millisecond" ? input.value * 1 : input.value * 1000;
}

const labelFormats: Ref<Array<{ label: string; formats: Array<string> }>> = ref(
  [
    {
      label: t("develop"),
      formats: ["YYYY-MM-DD HH:mm:ss", "YYYY-MM-DD", "HH:mm:ss"],
    },
    {
      label: t("chinese"),
      formats: [
        "YYYY年MM月DD日 HH时mm分ss秒",
        "YYYY年MM月DD日",
        "HH时mm分ss秒",
      ],
    },
    {
      label: t("english"),
      formats: ["MMMM DD, YYYY, HH:mm:ss A", "MMMM DD, YYYY", "HH:mm:ss A"],
    },
    {
      label: t("america"),
      formats: ["MM/DD/YYYY hh:mm:ss A", "MM/DD/YYYY", "hh:mm:ss A"],
    },
    {
      label: t("europe"),
      formats: ["DD.MM.YYYY HH:mm:ss", "DD.MM.YYYY", "HH:mm:ss"],
    },
    {
      label: t("rfc2822"),
      formats: [
        "ddd, DD MMM YYYY HH:mm:ss ZZ",
        "ddd, DD MMM YYYY",
        "HH:mm:ss ZZ",
      ],
    },
  ],
);

watch(locale, () => {
  for (let [index, key] of ["second", "millisecond"].entries()) {
    typeOptions.value[index].title = t(key);
  }

  for (let [index, key] of [
    "develop",
    "chinese",
    "english",
    "america",
    "europe",
    "rfc2822",
  ].entries()) {
    labelFormats.value[index].label = t(key);
  }
});
</script>

<template>
  <v-container>
    <v-row>
      <v-text-field
        v-model="input"
        type="number"
        class="v-col-3"
      ></v-text-field>
      <v-select v-model="convertType" :items="typeOptions" class="v-col-3">
        <template v-slot:append>
          <v-btn @click="convert">{{ t("convert") }}</v-btn>
        </template>
      </v-select>

      <v-spacer></v-spacer>

      <v-text-field
        :model-value="timestamp"
        :clearable="false"
        class="v-col-2"
      ></v-text-field>
      <v-text-field
        :model-value="timestampBySeconds"
        :clearable="false"
        class="v-col-3"
      >
        <template v-slot:append>
          <v-btn @click="toggleUpdate">{{
            isActive ? t("pause") : t("resume")
          }}</v-btn>
        </template>
      </v-text-field>
    </v-row>

    <v-divider class="my-6"></v-divider>

    <v-row
      v-for="labelFormat in labelFormats"
      :key="labelFormat.label"
      class="my-0"
    >
      <template v-for="(format, index) in labelFormat.formats" :key="format">
        <v-text-field
          :model-value="dayjs(inputTimestamp).format(format)"
          :class="index === 0 ? 'v-col-6' : 'v-col-3'"
          :clearable="false"
        >
          <template v-slot:prepend v-if="index === 0">
            {{ labelFormat.label }}
          </template>
        </v-text-field>
      </template>
    </v-row>
  </v-container>
</template>

<style scoped></style>
