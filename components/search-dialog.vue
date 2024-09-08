<script setup lang="ts">
import useSearchStore from "~/stores/search";

const showDialog = defineModel<boolean>({
  required: false,
  default: false,
});

const { t } = useI18n();
const router = useRouter();
const searchStore = useSearchStore();

function onResultClick(pluginId: string) {
  showDialog.value = false;
  router.push(getPluginRoute(pluginId));
}
</script>

<template>
  <t-dialog
    v-model:visible="showDialog"
    :header="false"
    :footer="false"
    :close-btn="false"
    @closed="searchStore.search = ''"
  >
    <t-input
      v-model="searchStore.search"
      :placeholder="t('placeholder')"
      :clearable="true"
    ></t-input>

    <!-- 332px is enough for title and three elements. -->
    <t-list
      v-show="searchStore.search !== ''"
      :split="true"
      :scroll="{ threshold: 3, type: 'lazy' }"
      size="small"
      style="max-height: 322px"
    >
      <template #header>
        <div text-lg font-bold prose>{{ t("plugins") }}</div>
      </template>

      <t-list-item
        v-for="result in searchStore.searchResults"
        :key="result"
        cursor-pointer
        text-ellipsis
        hover:bg-gray-100
        @click="onResultClick(result)"
      >
        <t-list-item-meta :description="t(tPluginDescription(result))">
          <template #title>
            <div text-base prose>{{ t(tPluginName(result)) }}</div>
          </template>
        </t-list-item-meta>
      </t-list-item>
    </t-list>
  </t-dialog>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "placeholder": "Type to search plugins",
    "plugins": "Plugins"
  },
  "zhHans": {
    "placeholder": "输入以搜索插件",
    "plugins": "插件列表"
  }
}
</i18n>
