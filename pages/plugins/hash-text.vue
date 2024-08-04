<script setup lang="ts">
import {
  enc,
  MD5,
  RIPEMD160,
  SHA1,
  SHA3,
  SHA224,
  SHA256,
  SHA384,
  SHA512,
} from "crypto-js";

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

const { ref: input, clear, paste } = useStringOperations();

const { ref: output, copy } = useStringOperations(
  computed(() => {
    const hash = algorithms[algorithm.value](input.value).toString(enc.Hex);
    return uppercase.value ? hash.toUpperCase() : hash;
  }),
);
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
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

    <t-space direction="horizontal" w-full>
      <input-output-layout
        :clear="true"
        :paste="true"
        @clear="clear"
        @paste="paste"
      >
        <t-textarea
          v-model="input"
          :clearable="true"
          :autosize="{ minRows: 10, maxRows: 20 }"
        ></t-textarea>
      </input-output-layout>
      <input-output-layout :copy="true" @copy="copy">
        <t-textarea :value="output" :readonly="true"></t-textarea>
      </input-output-layout>
    </t-space>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "algorithm": "Algorithm",
    "uppercase": "Uppercase"
  },
  "zhHans": {
    "algorithm": "哈希算法",
    "uppercase": "是否大写"
  }
}
</i18n>
