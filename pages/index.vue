<script setup lang="ts">
import useSearchStore from "~/stores/search";
import useDisabledStore from "~/stores/disabled";

const { t } = useI18n();

const searchStore = useSearchStore();
const disabledStore = useDisabledStore();

const idList = computed(() =>
  searchStore.searchResults.filter((id) => !disabledStore.isDisabled(id)),
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
