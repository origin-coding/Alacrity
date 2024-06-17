<script setup lang="ts">
import {
  MD5,
  SHA3,
  SHA1,
  SHA224,
  SHA256,
  SHA384,
  SHA512,
  RIPEMD160,
  enc,
  lib,
} from "crypto-js";
import { readBinaryFile } from "@tauri-apps/api/fs";
import { uInt8ArrayToWordArray } from "#imports";
import { writeText } from "@tauri-apps/api/clipboard";

const { t } = useI18n();

const algorithms = {
  MD5,
  SHA1,
  SHA224,
  SHA256,
  SHA384,
  SHA512,
  SHA3,
  RIPEMD160,
} as const;

type Algorithms = keyof typeof algorithms;
const nameOptions = Object.keys(algorithms) as Algorithms[];
const algorithm = ref<Algorithms>("MD5");

const uppercase = ref(false);

const input = ref<lib.WordArray>(lib.WordArray.create());

async function hash(path: null | string | string[]) {
  if (path === null) {
    return;
  }

  const bytes = await readBinaryFile(path as string);
  input.value = uInt8ArrayToWordArray(bytes);
}

const output = computed(() => {
  const hash = algorithms[algorithm.value](input.value).toString(enc.Hex);
  return uppercase.value ? hash.toUpperCase() : hash;
});

async function copy() {
  await writeText(output.value);
}

function clear() {
  input.value = lib.WordArray.create();
}
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
      <t-form-item :label="t('select')">
        <upload-button
          @confirmed="hash"
          :options="{ multiple: false }"
        ></upload-button>
      </t-form-item>
      <t-form-item :label="t('algorithm')">
        <t-select v-model="algorithm">
          <t-option v-for="option in nameOptions" :key="option" :value="option">
            {{ option }}
          </t-option>
        </t-select>
      </t-form-item>
      <t-form-item :label="t('uppercase')">
        <t-checkbox v-model="uppercase"></t-checkbox>
      </t-form-item>
    </option-layout>

    <t-divider></t-divider>

    <input-output-layout :copy="true" :clear="true" @copy="copy" @clear="clear">
      <t-textarea :value="output" :readonly="true"></t-textarea>
    </input-output-layout>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "select": "Select",
    "algorithm": "Algorithm",
    "uppercase": "Uppercase"
  },
  "zhHans": {
    "select": "选择文件",
    "algorithm": "哈希算法",
    "uppercase": "是否大写"
  }
}
</i18n>
