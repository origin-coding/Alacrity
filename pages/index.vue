<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <alacrity-page :title="t('all')">
    <plugin-card-list :id-list="['base64-encode-decode']"></plugin-card-list>
  </alacrity-page>
</template>

<i18n>
{
  "en": {
    "all": "All plugins"
  },
  "zhHans": {
    "all": "全部插件"
  }
}
</i18n>
