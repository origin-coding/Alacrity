<script setup lang="ts">
import useFavoriteStore from "~/stores/favorite";

const props = defineProps<{ id: string }>();

const { t } = useI18n();
const router = useRouter();
const favoriteStore = useFavoriteStore();

const addOrRemoveTooltip = computed(() => {
  if (favoriteStore.isFavorite(props.id)) {
    return t("remove");
  } else {
    return t("add");
  }
});
</script>

<template>
  <t-card
    :title="t(tPluginName(props.id))"
    h-40
    @click="router.push(getPluginRoute(props.id))"
  >
    <template #actions>
      <!-- Favorite -->
      <t-tooltip :content="addOrRemoveTooltip">
        <t-button
          variant="text"
          shape="circle"
          @click.stop="favoriteStore.toggleFavorite(props.id)"
        >
          <template #icon>
            <remove-icon
              v-show="favoriteStore.isFavorite(props.id)"
            ></remove-icon>
            <add-icon v-show="!favoriteStore.isFavorite(props.id)"></add-icon>
          </template>
        </t-button>
      </t-tooltip>
    </template>
    {{ t(tPluginDescription(props.id)) }}
  </t-card>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "add": "Add to favorite",
    "remove": "Remove from favorite"
  },
  "zhHans": {
    "add": "添加到收藏",
    "remove": "移出收藏"
  }
}
</i18n>
