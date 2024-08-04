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

const form = ref<FormInstanceFunctions | null>(null);

const rules = ref<FormProps["rules"]>({
  url: [
    { required: false, trigger: "blur" },
    { url: true, trigger: "blur", message: t("message.url") },
  ],
});

const data = reactive({
  url: "",
});

const { bus } = useGenerateQrcode();

bus.on(async (event) => {
  // If the event is not what we expect, return.
  if (event !== "url") {
    return;
  }

  // If form is not valid, return;
  const result = await form.value?.validate();
  if (!isDefined(result) || result !== true) {
    return;
  }

  // Construct data.
  const value = data.url;

  // Emit data.
  emit("generate", value);
});
</script>

<template>
  <t-form
    v-if="props.type === 'url'"
    ref="form"
    :rules
    :data
    :colon="true"
    layout="inline"
  >
    <t-form-item label="URL" name="url" w-full>
      <t-input v-model="data.url"></t-input>
    </t-form-item>
  </t-form>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "message": {
      "url": "The format must be URL"
    }
  },
  "zhHans": {
    "message": {
      "url": "格式必须为链接"
    }
  }
}
</i18n>
