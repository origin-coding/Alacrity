<script setup lang="ts">
import type { FormInstanceFunctions, FormProps } from "tdesign-vue-next";

import type { GenerateType } from "~/composables/use-generate-qrcode";

const props = defineProps<{
  type: GenerateType;
}>();

const emit = defineEmits<{
  generate: [value: string];
}>();

const { t } = useI18n();

const form = ref<FormInstanceFunctions | null>(null);

const rules = ref<FormProps["rules"]>({
  wifi: [{ required: true, trigger: "blur" }],
});

const wifiTypes = ["WPA", "No password", "WEP", "WPA2-EAP"] as const;
type WifiType = (typeof wifiTypes)[number];

const data = reactive<{
  wifi: string;
  type: WifiType;
  password: string;
  hidden: boolean;
}>({
  wifi: "",
  type: "WPA",
  password: "",
  hidden: false,
});

const { bus } = useGenerateQrcode();

bus.on(async (event) => {
  // If the event is not what we expect, return.
  if (event !== "wifi") {
    return;
  }

  // If form is not valid, return;
  const result = await form.value?.validate();
  if (!isDefined(result) || result !== true) {
    return;
  }

  // Construct data.
  const value = `WIFI:T:${data.type};S:${data.wifi};P:${data.password};H:${data.hidden};;`;

  // Emit data.
  emit("generate", value);
});
</script>

<template>
  <t-form
    v-if="props.type === 'wifi'"
    ref="form"
    :rules
    :data
    :colon="true"
    layout="inline"
  >
    <t-form-item label="WiFi" name="wifi">
      <t-input v-model="data.wifi"></t-input>
    </t-form-item>
    <t-form-item :label="t('data.type')" name="type">
      <t-select v-model="data.type">
        <t-option
          v-for="typeOption in wifiTypes"
          :key="typeOption"
          :value="typeOption"
          :label="typeOption"
        ></t-option>
      </t-select>
    </t-form-item>
    <t-form-item :label="t('data.password')" name="password">
      <t-input v-model="data.password"></t-input>
    </t-form-item>
    <t-form-item :label="t('data.hidden')" name="hidden">
      <t-checkbox v-model="data.hidden"></t-checkbox>
    </t-form-item>
  </t-form>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "data": {
      "type": "Type",
      "password": "Password",
      "hidden": "Hidden WiFi"
    }
  },
  "zhHans": {
    "data": {
      "type": "类型",
      "password": "密码",
      "hidden": "隐藏WiFi"
    }
  }
}
</i18n>
