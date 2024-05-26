<script setup lang="ts">
import useFavoriteStore from "~/stores/favorite";
import useDisabledStore from "~/stores/disabled";

const props = defineProps<{ id: string }>();

const { t } = useI18n();
const router = useRouter();
const favoriteStore = useFavoriteStore();
const disabledStore = useDisabledStore();
</script>

<template>
  <t-card
    @click="router.push(getPluginRoute(props.id))"
    :title="t(tPluginName(props.id))"
    h-40
  >
    <template #actions>
      <!-- Favorite -->
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
      <!-- Disabled -->
      <t-button
        @click.stop="disabledStore.toggleDisabled(props.id)"
        variant="text"
        shape="circle"
      >
        <template #icon>
          <lock-on-icon
            v-show="disabledStore.isDisabled(props.id)"
          ></lock-on-icon>
          <lock-off-icon
            v-show="!disabledStore.isDisabled(props.id)"
          ></lock-off-icon>
        </template>
      </t-button>
    </template>
    {{ t(tPluginDescription(props.id)) }}
  </t-card>
</template>

<style scoped lang="less"></style>
