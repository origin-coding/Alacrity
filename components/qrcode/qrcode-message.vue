<script setup lang="ts">
import type { FormInstanceFunctions, FormProps } from "tdesign-vue-next";
import { type GenerateType } from "~/composables/use-generate-qrcode";

const props = defineProps<{
  type: GenerateType;
}>();

const emit = defineEmits<{
  generate: [value: string];
}>();

const { t } = useI18n();

const form = ref<FormInstanceFunctions | null>(null);

const rules = ref<FormProps["rules"]>({
  phone: [
    { required: true, trigger: "blur" },
    {
      pattern:
        /^(13[0-9]|14[579]|15[0-35-9]|166|17[01345678]|18[0-9]|19[89])\d{8}$/,
      trigger: "blur",
      message: t("warn.phone"),
    },
  ],
  message: [{ required: true, trigger: "blur" }],
});

const data = reactive({
  phone: "",
  message: "",
});

const { bus } = useGenerateQrcode();

bus.on(async (event) => {
  // If the event is not what we expect, return.
  if (event !== "message") {
    return;
  }

  // If form is not valid, return;
  const result = await form.value?.validate();
  if (!isDefined(result) || result !== true) {
    return;
  }

  // Construct data.
  const value = `SMSTO:${data.phone}:${data.message}`;

  // Emit data.
  emit("generate", value);
});
</script>

<template>
  <t-form
    v-if="props.type === 'message'"
    ref="form"
    :rules
    :data
    :colon="true"
    layout="inline"
  >
    <t-form-item :label="t('data.phone')" name="phone">
      <t-input v-model="data.phone"></t-input>
    </t-form-item>
    <t-form-item :label="t('data.message')" name="message" w-full>
      <t-textarea
        v-model="data.message"
        :clearable="true"
        :autosize="{ minRows: 3, maxRows: 3 }"
      ></t-textarea>
    </t-form-item>
  </t-form>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "data": {
      "phone": "Phone",
      "message": "Message"
    },
    "warn": {
      "phone": "The format must be phone"
    }
  },
  "zhHans": {
    "data": {
      "phone": "手机号码",
      "message": "消息"
    },
    "warn": {
      "phone": "格式必须为手机号码"
    }
  }
}
</i18n>
