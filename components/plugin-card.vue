<script setup lang="ts">
import useFavoriteStore from "~/stores/favorite";
import useDisabledStore from "~/stores/disabled";

const props = defineProps<{ id: string }>();

const { t } = useI18n();
const router = useRouter();
const favoriteStore = useFavoriteStore();
const disabledStore = useDisabledStore();

const disableOrEnableTooltip = computed(() => {
  if (disabledStore.isDisabled(props.id)) {
    return t("enable");
  } else {
    return t("disable");
  }
});

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
    @click="router.push(getPluginRoute(props.id))"
    :title="t(tPluginName(props.id))"
    h-40
  >
    <template #actions>
      <!-- Favorite -->
      <t-tooltip :content="addOrRemoveTooltip">
        <t-button
          @click.stop="favoriteStore.toggleFavorite(props.id)"
          variant="text"
          shape="circle"
        >
          <template #icon>
            <remove-icon
              v-show="favoriteStore.isFavorite(props.id)"
            ></remove-icon>
            <add-icon v-show="!favoriteStore.isFavorite(props.id)"></add-icon>
          </template>
        </t-button>
      </t-tooltip>
      <!-- Disabled -->
      <t-tooltip :content="disableOrEnableTooltip">
        <t-button
          @click.stop="disabledStore.toggleDisabled(props.id)"
          variant="text"
          shape="circle"
        >
          <template #icon>
            <check-icon v-show="disabledStore.isDisabled(props.id)"></check-icon>
            <close-icon v-show="!disabledStore.isDisabled(props.id)"></close-icon>
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
    "remove": "Remove from favorite",
    "disable": "Disable",
    "enable": "Enable"
  },
  "zhHans": {
    "add": "添加到收藏",
    "remove": "移出收藏",
    "disable": "禁用",
    "enable": "启用"
  }
}
</i18n>
