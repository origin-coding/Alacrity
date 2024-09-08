<script setup lang="ts">
import usePluginsStore from "~/stores/plugins";

const { t } = useI18n();

const pluginsStore = usePluginsStore();

const idList = computed(() =>
  pluginsStore.allPlugins.map((plugin) => plugin.id),
);
</script>

<template>
  <alacrity-page :title="t('all')">
    <plugin-card-list :id-list="idList"></plugin-card-list>
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
