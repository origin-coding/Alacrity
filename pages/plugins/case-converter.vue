<script setup lang="ts">
import { readText, writeText } from "@tauri-apps/plugin-clipboard-manager";
import {
  camelCase,
  flatCase,
  kebabCase,
  lowerFirst,
  pascalCase,
  snakeCase,
  titleCase,
  trainCase,
  upperFirst,
} from "scule";

const { t } = useI18n();

const FunctionMapping: { [key: string]: (val: string) => string } = {
  pascalCase,
  camelCase,
  kebabCase,
  snakeCase,
  flatCase,
  trainCase,
  titleCase,
  upperFirst,
  lowerFirst,
};

const caseFunction = ref<keyof typeof FunctionMapping>("pascalCase");
const input = ref("");
const output = ref("");

function convert() {
  output.value = FunctionMapping[caseFunction.value](input.value);
}

async function copy() {
  await writeText(output.value);
}

function clear() {
  input.value = "";
}

async function paste() {
  input.value = (await readText()) || "";
}
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>

    <option-layout>
      <t-form-item :label="t('case')">
        <t-select v-model="caseFunction">
          <t-option
            v-for="func in Object.keys(FunctionMapping)"
            :key="func"
            :value="func"
            :label="t(`func.${func}`)"
          ></t-option>
        </t-select>
      </t-form-item>
      <t-button @click="convert">{{ t("convert") }}</t-button>
    </option-layout>

    <t-divider></t-divider>

    <t-space direction="horizontal" w-full>
      <input-output-layout
        :paste="true"
        :clear="true"
        :title="t('title.input')"
        @paste="paste"
        @clear="clear"
      >
        <t-textarea
          v-model="input"
          :autosize="{ minRows: 15, maxRows: 20 }"
        ></t-textarea>
      </input-output-layout>
      <input-output-layout :copy="true" :title="t('title.output')" @copy="copy">
        <t-textarea
          v-model="output"
          :readonly="true"
          :autosize="{ minRows: 15, maxRows: 20 }"
        ></t-textarea>
      </input-output-layout>
    </t-space>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "func": {
      "pascalCase": "Pascal Case",
      "camelCase": "Camel Case",
      "kebabCase": "Kebab Case",
      "snakeCase": "Snake Case",
      "flatCase": "Flat Case",
      "trainCase": "Train Case",
      "titleCase": "Title Case",
      "upperFirst": "Upper First",
      "lowerFirst": "Lower First"
    },
    "case": "Case",
    "convert": "Convert",
    "title": {
      "input": "Original Text",
      "output": "Result"
    }
  },
  "zhHans": {
    "func": {
      "pascalCase": "大写驼峰",
      "camelCase": "小写驼峰",
      "kebabCase": "短横线",
      "snakeCase": "下划线",
      "flatCase": "扁平化",
      "trainCase": "火车式",
      "titleCase": "标题式",
      "upperFirst": "首字母大写",
      "lowerFirst": "首字母小写"
    },
    "case": "格式",
    "convert": "转换",
    "title": {
      "input": "原文",
      "output": "结果"
    }
  }
}
</i18n>
