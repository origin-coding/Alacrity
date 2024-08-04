<script setup lang="ts">
import type { FormInstanceFunctions, FormProps } from "tdesign-vue-next";

import { type GenerateType } from "~/composables/use-generate-qrcode";

const { t } = useI18n();

const props = defineProps<{
  type: GenerateType;
}>();

const emit = defineEmits<{
  generate: [value: string];
}>();

const rules = ref<FormProps["rules"]>({
  address: [
    { required: true, trigger: "blur" },
    { email: true, trigger: "blur", message: t("warn.email") },
  ],
  subject: [{ required: true, trigger: "blur" }],
  message: [{ required: true, trigger: "blur" }],
});

const data = reactive({
  address: "",
  subject: "",
  message: "",
});

const form = ref<FormInstanceFunctions | null>(null);

const { bus } = useGenerateQrcode();

bus.on(async (event) => {
  // If the event is not what we expect, return.
  if (event !== "email") {
    return;
  }

  // If form is not valid, return;
  const result = await form.value?.validate();
  if (!isDefined(result) || result !== true) {
    return;
  }

  // Construct data.
  const value = `mailto:${data.address}?subject=${data.subject}&body=${data.message}`;

  // Emit data.
  emit("generate", value);
});
</script>

<template>
  <t-form
    v-if="props.type === 'email'"
    ref="form"
    :rules
    :data
    :colon="true"
    layout="inline"
  >
    <!-- Input for email address -->
    <t-form-item :label="t('data.address')" name="address" class="w-50%">
      <t-input v-model="data.address" :clearable="true"></t-input>
    </t-form-item>

    <!-- Input for email subject -->
    <t-form-item :label="t('data.subject')" name="subject" class="w-50%">
      <t-input v-model="data.subject" :clearable="true"></t-input>
    </t-form-item>

    <!-- Input for email message -->
    <t-form-item :label="t('data.message')" name="message" class="w-full">
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
      "address": "Address",
      "subject": "Subject",
      "message": "Message"
    },
    "warn": {
      "email": "The format must be email"
    }
  },
  "zhHans": {
    "data": {
      "address": "地址",
      "subject": "主题",
      "message": "消息"
    },
    "warn": {
      "email": "格式必须为邮箱"
    }
  }
}
</i18n>
