<script setup lang="ts">
import {
  uuidVersions,
  type UuidVersions,
} from "~/composables/use-generate-uuid";
import { MessagePlugin } from "tdesign-vue-next";

const count = ref(10);
const version = ref<UuidVersions>("v4");
const namespace = ref<string>("");
const name = ref<string>("");

const { ref: output, copy } = useStringOperations("");

const { generate } = useGenerateUuid({
  count,
  version,
  namespace,
  name,
  onSuccess(uuidArray) {
    output.value = uuidArray.join("\n");
  },
  async onError(status) {
    await MessagePlugin.error(t(`error.${status}`));
  },
});

const version3Or5 = computed(
  () => version.value === "v3" || version.value === "v5",
);

const { t } = useI18n();
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
      <t-form-item :label="t('options.count')">
        <t-input-number
          v-model="count"
          :step="1"
          :decimalPlaces="0"
          :min="1"
          :max="100"
        ></t-input-number>
      </t-form-item>
      <t-form-item :label="t('options.version')">
        <t-select v-model="version">
          <t-option
            v-for="option in uuidVersions"
            :key="option"
            :value="option"
          >
            {{ option.toUpperCase() }}
          </t-option>
          <template #value-display>
            {{ version.toUpperCase() }}
          </template>
        </t-select>
      </t-form-item>
      <t-button @click="generate">{{ t("generate") }}</t-button>
    </option-layout>
    <option-layout v-show="version3Or5">
      <t-form-item :label="t('options.namespace')">
        <t-input v-model="namespace"></t-input>
      </t-form-item>
      <t-form-item :label="t('options.name')">
        <t-input v-model="name"></t-input>
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
      "name": "Name"
    },
    "error": {
      "MISSING_NAMESPACE": "Missing namespace!",
      "INVALID_NAMESPACE": "Invalid namespace!",
      "MISSING_NAME": "Missing name!"
    }
  },
  "zhHans": {
    "generate": "生成",
    "options": {
      "count": "数量",
      "version": "版本",
      "namespace": "命名空间",
      "name": "名称"
    },
    "error": {
      "MISSING_NAMESPACE": "缺少命名空间！",
      "INVALID_NAMESPACE": "无效的命名空间！",
      "MISSING_NAME": "缺少名称！"
    }
  }
}
</i18n>
