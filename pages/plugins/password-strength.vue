<script setup lang="ts">
import { zxcvbnAsync, type ZxcvbnResult } from "@zxcvbn-ts/core";

const { t } = useI18n();

const result = ref<ZxcvbnResult | null>(null);
const password = ref("");

const useZxcvbn = async () => {
  if (password.value.length !== 0) {
    result.value = await zxcvbnAsync(password.value);
  } else {
    result.value = null;
  }
};

const useZxcvbnDebounced = useDebounceFn(async () => {
  await useZxcvbn();
  console.log(result.value);
}, 300);

watch(password, useZxcvbnDebounced);
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>
    <option-layout>
      <t-form-item :label="t('password')" w-full>
        <t-input v-model="password" :clearable="true"></t-input>
      </t-form-item>
    </option-layout>
    <t-divider></t-divider>
    <t-card w-full>
      <t-descriptions :title="t('analyze.title')" :colon="true" :column="2">
        <t-descriptions-item :label="t('analyze.score')">
          {{ result?.score || 0 }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('analyze.count')">
          {{ result?.guesses || 0 }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('analyze.onlineThrottling')">
          {{
            t(
              `result.${result?.crackTimesDisplay.onlineThrottling100PerHour || "ltSecond"}`,
            )
          }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('analyze.onlineNoThrottling')">
          {{
            t(
              `result.${result?.crackTimesDisplay.onlineNoThrottling10PerSecond || "ltSecond"}`,
            )
          }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('analyze.offlineSlow')">
          {{
            t(
              `result.${result?.crackTimesDisplay.offlineSlowHashing1e4PerSecond || "ltSecond"}`,
            )
          }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('analyze.offlineFast')">
          {{
            t(
              `result.${result?.crackTimesDisplay.offlineFastHashing1e10PerSecond || "ltSecond"}`,
            )
          }}
        </t-descriptions-item>
      </t-descriptions>
    </t-card>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "password": "Password",
    "analyze": {
      "title": "Analyze result",
      "score": "Score(0-4)",
      "count": "Estimated crack attempts",
      "onlineThrottling": "Online cracking, with rate limit",
      "onlineNoThrottling": "Online cracking, without rate limit",
      "offlineSlow": "Offline cracking with slow hash function",
      "offlineFast": "Offline cracking with fast hash function"
    },
    "result": {
      "ltSecond": "Less than a second",
      "second": "One second",
      "seconds": "Several seconds",
      "minute": "One minute",
      "minutes": "Several minutes",
      "hour": "One hour",
      "hours": "Several hours",
      "day": "One day",
      "days": "Several days",
      "month": "One month",
      "months": "Several months",
      "year": "One year",
      "years": "Several years",
      "centuries": "Several centuries"
    }
  },
  "zhHans": {
    "password": "密码",
    "analyze": {
      "title": "分析结果",
      "score": "密码分数（0-4）",
      "count": "预计破解次数",
      "onlineThrottling": "在线破解，有速率限制",
      "onlineNoThrottling": "在线破解，没有速率限制",
      "offlineSlow": "离线破解，使用慢速哈希函数",
      "offlineFast": "离线破解，使用快速哈希函数"
    },
    "result": {
      "ltSecond": "不到一秒",
      "second": "一秒",
      "seconds": "几秒",
      "minute": "一分钟",
      "minutes": "几分钟",
      "hour": "一小时",
      "hours": "几小时",
      "day": "一天",
      "days": "几天",
      "month": "一个月",
      "months": "几个月",
      "year": "一年",
      "years": "几年",
      "centuries": "几个世纪"
    }
  }
}
</i18n>
