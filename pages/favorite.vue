<script setup lang="ts">
import useFavoriteStore from "~/stores/favorite";

const { t } = useI18n();

const favoriteStore = useFavoriteStore();
</script>

<template>
  <alacrity-page :title="t('favorite')">
    <plugin-card-list :id-list="favoriteStore.allFavorite"></plugin-card-list>
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
