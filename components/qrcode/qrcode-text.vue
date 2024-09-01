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
  text: [{ required: false }],
});

const data = reactive({
  text: "",
});

const { bus } = useGenerateQrcode();

bus.on(async (event) => {
  // If the event is not what we expect, return.
  if (event !== "text") {
    return;
  }

  // If form is not valid, return;
  const result = await form.value?.validate();
  if (!isDefined(result) || result !== true) {
    return;
  }

  // Construct data.
  const value = data.text;

  // Emit data.
  emit("generate", value);
});
</script>

<template>
  <t-form
    v-if="props.type === 'text'"
    ref="form"
    :rules
    :data
    :colon="true"
    layout="inline"
  >
    <t-form-item :label="t('data.text')" name="text" w-full>
      <t-input v-model="data.text"></t-input>
    </t-form-item>
  </t-form>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "data": {
      "text": "Text"
    }
  },
  "zhHans": {
    "data": {
      "text": "文本"
    }
  }
}
</i18n>
