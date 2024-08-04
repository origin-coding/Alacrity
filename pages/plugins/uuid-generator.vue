<script setup lang="ts">
import { MessagePlugin } from "tdesign-vue-next";

import {
  type UseGenerateUuidOptions,
  uuidVersions,
} from "~/composables/use-generate-uuid";

// const count = ref(10);
// const version = ref<UuidVersions>("v4");
// const namespace = ref("");
// const name = ref("");
// const hyphen = ref(true);
// const uppercase = ref(false);

const options = ref<UseGenerateUuidOptions>({
  count: 10,
  version: "v4",
  namespace: "",
  name: "",
  hyphen: true,
  uppercase: false,
});

const { ref: output, copy } = useStringOperations("");

const { generate, onSuccess, onError } = useGenerateUuid(options.value);

onSuccess((uuidArray: string[]) => {
  output.value = uuidArray.join("\n");
});

onError(async (status) => {
  await MessagePlugin.error(t(`error.${status}`));
});

const version3Or5 = computed(
  () => options.value.version === "v3" || options.value.version === "v5",
);

const { t } = useI18n();
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
      <t-form-item :label="t('options.count')">
        <t-input-number
          v-model="options.count"
          :step="1"
          :decimal-places="0"
          :min="1"
          :max="100"
        ></t-input-number>
      </t-form-item>
      <t-form-item :label="t('options.version')">
        <t-select v-model="options.version">
          <t-option
            v-for="option in uuidVersions"
            :key="option"
            :value="option"
          >
            {{ option.toUpperCase() }}
          </t-option>
          <template #value-display>
            {{ options.version.toUpperCase() }}
          </template>
        </t-select>
      </t-form-item>
      <t-form-item :label="t('options.hyphen')">
        <t-checkbox v-model="options.hyphen"></t-checkbox>
      </t-form-item>
      <t-form-item :label="t('options.uppercase')">
        <t-checkbox v-model="options.uppercase"></t-checkbox>
      </t-form-item>
      <t-button @click="generate">{{ t("generate") }}</t-button>
    </option-layout>
    <t-divider></t-divider>
    <option-layout v-show="version3Or5">
      <t-form-item :label="t('options.namespace')">
        <t-input v-model="options.namespace"></t-input>
      </t-form-item>
      <t-form-item :label="t('options.name')">
        <t-input v-model="options.name"></t-input>
      </t-form-item>
    </option-layout>
    <input-output-layout :copy="true" @copy="copy">
      <t-textarea
        v-model="output"
        :readonly="true"
        :autosize="{ minRows: 20, maxRows: 20 }"
      ></t-textarea>
    </input-output-layout>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "generate": "Generate",
    "options": {
      "count": "Count",
      "version": "Version",
      "namespace": "Namespace",
      "name": "Name",
      "hyphen": "Hyphen",
      "uppercase": "Uppercase"
    },
    "error": {
      "MISSING_NAMESPACE": "Missing namespace!",
      "INVALID_NAMESPACE": "Invalid namespace!"
    }
  },
  "zhHans": {
    "generate": "生成",
    "options": {
      "count": "数量",
      "version": "版本",
      "namespace": "命名空间",
      "name": "名称",
      "hyphen": "连字符",
      "uppercase": "大写"
    },
    "error": {
      "MISSING_NAMESPACE": "缺少命名空间！",
      "INVALID_NAMESPACE": "无效的命名空间！"
    }
  }
}
</i18n>
