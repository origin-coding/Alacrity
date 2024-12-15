<script setup lang="ts">
import {
  arabicizeSafe,
  isValidArabicSafe,
  isValidRomanSafe,
  romanizeSafe,
} from "@dunkelhaiser/numeri-romani";
import { MessagePlugin } from "tdesign-vue-next";

const { t } = useI18n();

const input = ref("");
watch(input, async (value) => {
  if (value.length === 0) {
    return;
  }

  if (romanOption.value === RomanOptions.ARABIC_TO_ROMAN) {
    const arabicNumber = Number(value);
    if (!isValidArabicSafe(arabicNumber)) {
      await MessagePlugin.error(t("invalid.arabic"));
    } else {
      output.value = romanizeSafe(arabicNumber);
    }
  } else {
    if (!isValidRomanSafe(value)) {
      await MessagePlugin.error(t("invalid.roman"));
    } else {
      output.value = arabicizeSafe(value).toString();
    }
  }
});

enum RomanOptions {
  // noinspection JSUnusedGlobalSymbols
  ARABIC_TO_ROMAN = "a2r",
  ROMAN_TO_ARABIC = "r2a",
}

const romanOption = ref<RomanOptions>(RomanOptions.ARABIC_TO_ROMAN);
watch(romanOption, () => {
  input.value = "";
});

const output = ref("");
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
      <t-form-item :label="t('label.number')">
        <t-input v-model="input" :clearable="true"></t-input>
      </t-form-item>
      <t-form-item :label="t('label.conversion')">
        <t-select v-model="romanOption">
          <t-option
            v-for="option in RomanOptions"
            :key="option"
            :value="option"
            :label="t(`convert.${option}`)"
          >
          </t-option>
        </t-select>
      </t-form-item>
    </option-layout>

    <t-divider></t-divider>

    <input-output-layout :copy="true" :title="t('result')">
      <t-input :value="output" :readonly="true" placeholder=""></t-input>
    </input-output-layout>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "label": {
      "number": "Number",
      "conversion": "Conversion"
    },
    "convert": {
      "a2r": "Arabic to Roman",
      "r2a": "Roman to Arabic"
    },
    "invalid": {
      "arabic": "Invalid Arabic number! Only supports integer values from 1 to 3999.",
      "numeral": "Invalid Roman number!"
    },
    "result": "Result"
  },
  "zhHans": {
    "label": {
      "number": "数字",
      "conversion": "转换方式"
    },
    "convert": {
      "a2r": "阿拉伯数字转罗马数字",
      "r2a": "罗马数字转阿拉伯数字"
    },
    "invalid": {
      "arabic": "无效的阿拉伯数字！只支持1到3999之间的整数。",
      "roman": "无效的罗马数字！"
    },
    "result": "结果"
  }
}
</i18n>
