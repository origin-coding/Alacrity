<script setup lang="ts">
import { onMounted, Ref, ref, toRaw } from "vue";
import * as monaco from "monaco-editor";
import { minify } from "terser";
import * as prettier from "prettier/standalone";
import * as parserBabel from "prettier/plugins/babel";
import * as parserEstree from "prettier/plugins/estree";
import { open } from "@tauri-apps/api/dialog";

import "@/common";
import { writeText } from "@tauri-apps/api/clipboard";
import { readTextFile } from "@tauri-apps/api/fs";

const inputEditor: Ref<monaco.editor.IStandaloneCodeEditor | null> = ref(null);
const outputEditor: Ref<monaco.editor.IStandaloneCodeEditor | null> = ref(null);

onMounted(() => {
  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");
  if (!inputEl || !outputEl) {
    return;
  }

  inputEditor.value = monaco.editor.create(inputEl, {
    value: "",
    lineNumbers: "on",
    fontSize: 15,
    language: "javascript",
    minimap: {
      enabled: false,
    },
  });

  outputEditor.value = monaco.editor.create(outputEl, {
    value: "",
    lineNumbers: "on",
    fontSize: 15,
    language: "javascript",
    minimap: {
      enabled: false,
    },
  });
});

async function compress(mangle: boolean = false) {
  if (!inputEditor.value || !outputEditor.value) {
    return;
  }

  const input = toRaw(inputEditor.value)?.getValue();
  const output = await minify(input, {
    compress: true,
    mangle,
    module: true,
    keep_fnames: true,
    keep_classnames: true,
  });
  toRaw(outputEditor.value)?.setValue(output.code || "");
}

async function format() {
  if (!inputEditor.value || !outputEditor.value) {
    return;
  }

  const input = toRaw(inputEditor.value)?.getValue();
  const output = await prettier.format(input, {
    parser: "babel",
    plugins: [parserBabel, parserEstree],
  });
  toRaw(outputEditor.value)?.setValue(output);
}

const copied = ref(false);

async function copy() {
  if (!outputEditor.value) {
    return;
  }

  const output = toRaw(outputEditor.value)?.getValue();
  await writeText(output);

  copied.value = true;
}

function clear() {
  if (!inputEditor.value || !outputEditor.value) {
    return;
  }

  toRaw(inputEditor.value)?.setValue("");
  toRaw(outputEditor.value)?.setValue("");
}

async function selectFile() {
  const selected = await open({
    multiple: false,
    filters: [{ name: "JavaScript", extensions: ["js"] }],
  });

  if (selected === null || Array.isArray(selected)) {
    return;
  }

  const content = await readTextFile(selected);
  toRaw(inputEditor.value)?.setValue(content);
}
</script>

<template>
  <v-container>
    <v-row>
      <v-btn class="mr-2" @click="compress(false)">压缩</v-btn>
      <v-btn class="mr-2" @click="compress(true)">混淆</v-btn>
      <v-btn class="mr-2" @click="format">格式化</v-btn>
      <v-btn class="mr-2" @click="copy">复制</v-btn>
      <v-btn class="mr-2" @click="clear">清空</v-btn>
      <v-btn @click="selectFile">选择文件</v-btn>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-sheet class="editor-wrapper">
          <div id="input" class="editor"></div>
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="editor-wrapper">
          <div id="output" class="editor"></div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="copied">123123</v-snackbar>
</template>

<style scoped>
.editor-wrapper {
  height: 80vh;
}

.editor {
  height: 100%;
}
</style>
