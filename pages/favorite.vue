<script setup lang="ts">
import useFavoriteStore from "~/stores/favorite";
import useSearchStore from "~/stores/search";

const { t } = useI18n();

const searchStore = useSearchStore();
const favoriteStore = useFavoriteStore();

const idList = computed(() =>
  searchStore.searchResults.filter((id) => favoriteStore.isFavorite(id)),
);
</script>

<template>
  <alacrity-page :title="t('favorite')">
    <plugin-card-list :id-list="idList"></plugin-card-list>
  </alacrity-page>
</template>

<i18n>
{
  "en": {
    "favorite": "Favorite list"
  },
  "zhHans": {
    "favorite": "收藏插件"
  }
}
</i18n>
