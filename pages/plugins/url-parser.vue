<script setup lang="ts">
const { t } = useI18n();

const url = ref("");

const { parsed } = useParseUrl(url);
</script>

<template>
  <t-space direction="vertical" w-full>
    <plugin-name></plugin-name>

    <option-layout>
      <t-form-item label="URL" w-full>
        <t-input v-model="url" :clearable="true"></t-input>
      </t-form-item>
    </option-layout>

    <t-divider></t-divider>

    <t-card>
      <t-descriptions
        :title="t('title')"
        :column="2"
        :colon="true"
        class="truncate"
      >
        <t-descriptions-item :label="t('parse.username')">
          {{ parsed?.username }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('parse.password')">
          {{ parsed?.password }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('parse.protocol')">
          {{ parsed?.protocol }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('parse.host')">
          {{ parsed?.hostname }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('parse.port')">
          {{ parsed?.port }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('parse.path')">
          {{ parsed?.pathname }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('parse.search')">
          {{ parsed?.search }}
        </t-descriptions-item>
        <t-descriptions-item :label="t('parse.hash')">
          {{ parsed?.hash }}
        </t-descriptions-item>
      </t-descriptions>
    </t-card>
  </t-space>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "title": "Parse result",
    "parse": {
      "username": "Username",
      "password": "Password",
      "protocol": "Protocol",
      "host": "Host",
      "port": "Port",
      "path": "Path",
      "search": "Search",
      "hash": "Hash"
    }
  },
  "zhHans": {
    "title": "解析结果",
    "parse": {
      "username": "用户名",
      "password": "密码",
      "protocol": "协议",
      "host": "主机",
      "port": "端口",
      "path": "路径",
      "search": "查询",
      "hash": "哈希"
    }
  }
}
</i18n>
