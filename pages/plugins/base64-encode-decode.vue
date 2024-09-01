<script setup lang="ts">
import { MessagePlugin } from "tdesign-vue-next";

import OptionLayout from "~/components/option-layout.vue";

const { t } = useI18n();

enum Base64Options {
  encode = "encode",
  decode = "decode",
}

const base64Option = ref<Base64Options>(Base64Options.encode);

const { ref: input, paste, clear } = useStringOperations();

const { ref: output, copy } = useStringOperations(
  computed(() => {
    if (base64Option.value === Base64Options.decode) {
      try {
        return atob(input.value);
      } catch (_) {
        MessagePlugin.error(t("error"));
        return "";
      }
    } else {
      return btoa(input.value);
    }
  }),
);
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
      <t-form-item :label="t('option')">
        <t-select v-model="base64Option">
          <t-option
            v-for="option in Base64Options"
            :key="option"
            :label="t(option)"
            :value="option"
          ></t-option>
        </t-select>
      </t-form-item>
    </option-layout>

    <t-divider></t-divider>

    <t-space direction="horizontal" w-full>
      <input-output-layout
        :paste="true"
        :clear="true"
        @clear="clear"
        @paste="paste"
      >
        <t-textarea
          v-model="input"
          :autosize="{ minRows: 10, maxRows: 20 }"
        ></t-textarea>
      </input-output-layout>
      <input-output-layout :copy="true" @copy="copy">
        <t-textarea
          v-model="output"
          :autosize="{ minRows: 10, maxRows: 20 }"
          :readonly="true"
        ></t-textarea>
      </input-output-layout>
    </t-space>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "option": "Option",
    "encode": "Encode",
    "decode": "Decode",
    "error": "Invalid Base64 value!"
  },
  "zhHans": {
    "option": "选项",
    "encode": "加密",
    "decode": "解密",
    "error": "无效的Base64值！"
  }
}
</i18n>
