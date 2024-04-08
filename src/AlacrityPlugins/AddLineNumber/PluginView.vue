<script setup lang="ts">
import { writeText } from "@tauri-apps/api/clipboard";
import { open, save } from "@tauri-apps/api/dialog";
import { readTextFile, writeTextFile } from "@tauri-apps/api/fs";
import { reactive, Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import messages from "./locale.json";

const { t, locale } = useI18n({ messages });

const input = ref("");
const output = ref("");

const showCustomize = ref(false);

function toggleShowCustomize() {
  showCustomize.value = !showCustomize.value;
}

interface LineNumberOptions {
  prefix: string;
  suffix: string;
  padding: boolean;
  skipEmptyLines: boolean;
  align: "beginning" | "end";
}

const alignOptions = ref([
  { value: "beginning", title: t("beginning") },
  { value: "end", title: t("end") },
]);

watch(locale, () => {
  for (const [index, key] of ["beginning", "end"].entries()) {
    alignOptions.value[index].title = t(key);
  }
});

const lineNumberOptions = reactive<LineNumberOptions>({
  prefix: "(",
  suffix: ")",
  padding: false,
  skipEmptyLines: true,
  align: "beginning",
});

const presetMap: Record<string, LineNumberOptions> = {
  parenthesis: {
    prefix: "(",
    suffix: ")",
    padding: false,
    skipEmptyLines: true,
    align: "beginning",
  },
  sharp: {
    prefix: "",
    suffix: "#",
    padding: false,
    skipEmptyLines: true,
    align: "beginning",
  },
  dash: {
    prefix: "",
    suffix: "-",
    padding: false,
    skipEmptyLines: true,
    align: "beginning",
  },
  dot: {
    prefix: "",
    suffix: ".",
    padding: false,
    skipEmptyLines: true,
    align: "beginning",
  },
};

const preset: Ref<keyof typeof presetMap> = ref("parenthesis");

const presetOptions = ref([
  { value: "parenthesis", title: "(n)" },
  { value: "sharp", title: "n#" },
  { value: "dash", title: "n-" },
  { value: "dot", title: "n." },
]);

watch(preset, (value) => {
  lineNumberOptions.prefix = presetMap[value].prefix;
  lineNumberOptions.suffix = presetMap[value].suffix;
  lineNumberOptions.padding = presetMap[value].padding;
  lineNumberOptions.skipEmptyLines = presetMap[value].skipEmptyLines;
  lineNumberOptions.align = presetMap[value].align;
});

function addLineNumber() {
  const lines = input.value.split("\n");

  const maxLineNumber = lines.length.toString().length;

  output.value = lines
    .map((line, index) => {
      if (line === "" && lineNumberOptions.skipEmptyLines) {
        return "";
      }

      let lineNumber = (index + 1).toString();

      if (lineNumberOptions.padding) {
        lineNumber = lineNumber.padStart(maxLineNumber, "0");
      }

      if (lineNumberOptions.align === "beginning") {
        return `${lineNumberOptions.prefix}${lineNumber}${lineNumberOptions.suffix}${line}`;
      }
      return `${line}${lineNumberOptions.prefix}${lineNumber}${lineNumberOptions.suffix}`;
    })
    .join("\n");
}

async function selectFile() {
  const file = await open({ multiple: false });
  if (file === null) {
    return;
  }

  input.value = await readTextFile(file as string);
}

async function saveFile() {
  const filepath = await save({
    filters: [{ name: "Text File", extensions: ["txt"] }],
  });

  if (filepath === null) {
    return;
  }

  await writeTextFile(filepath, output.value);
}

const copied = ref(false);

async function copy() {
  await writeText(output.value);
  copied.value = true;
}

function clear() {
  input.value = "";
  output.value = "";
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-select v-model="preset" :items="presetOptions">
          <template #prepend>{{ t("preset") }}</template>
        </v-select>
      </v-col>
      <v-col cols="10">
        <v-btn class="mr-2" @click="addLineNumber">
          {{ t("plugin.generate") }}
        </v-btn>
        <v-btn class="mr-2" @click="toggleShowCustomize">
          {{ t("customize") }}
        </v-btn>
        <v-btn class="mr-2" @click="selectFile">{{ t("selectFile") }}</v-btn>
        <v-btn class="mr-2" @click="saveFile">{{ t("plugin.download") }}</v-btn>
        <v-btn class="mr-2" @click="copy">{{ t("plugin.copy") }}</v-btn>
        <v-btn @click="clear">{{ t("plugin.clear") }}</v-btn>
      </v-col>
    </v-row>
    <v-row v-show="showCustomize">
      <v-col cols="2">
        <v-text-field v-model="lineNumberOptions.prefix" :clearable="false">
          <template #prepend>{{ t("prefix") }}</template>
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field v-model="lineNumberOptions.suffix" :clearable="false">
          <template #prepend>{{ t("suffix") }}</template>
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select v-model="lineNumberOptions.align" :items="alignOptions">
          <template #prepend>{{ t("position") }}</template>
        </v-select>
      </v-col>
      <v-col cols="2">
        <v-checkbox
          v-model="lineNumberOptions.padding"
          :label="t('padding')"
        ></v-checkbox>
      </v-col>
      <v-col cols="2">
        <v-checkbox
          v-model="lineNumberOptions.skipEmptyLines"
          :label="t('skipEmptyLines')"
        ></v-checkbox>
      </v-col>
    </v-row>

    <v-divider class="mb-8"></v-divider>

    <v-row>
      <v-col cols="6">
        <v-textarea v-model="input" :rows="20" :clearable="false"></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea
          :model-value="output"
          :rows="20"
          :readonly="true"
          :clearable="false"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-snackbar v-model="copied">{{ t("plugin.copied") }}</v-snackbar>
  </v-container>
</template>

<style scoped></style>
