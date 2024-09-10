<script setup lang="ts">
import useMenuGroupStore from "~/stores/menu-group";
import usePluginsStore from "~/stores/plugins";
import { TypeLogos } from "~/types/alacrity-plugin";

const { t } = useI18n();
const menuGroupStore = useMenuGroupStore();
const pluginsStore = usePluginsStore();

const collapsed = ref(false);
const showSearchDialog = ref(false);

const { ctrl_k, meta_k } = useMagicKeys();

watch([ctrl_k, meta_k], ([ctrl, meta]) => {
  if (ctrl || meta) {
    showSearchDialog.value = true;
  }
});
</script>

<template>
  <t-layout id="main-layout">
    <t-aside>
      <t-menu :value="undefined" :expand-mutex="true" :collapsed>
        <!-- All plugins and favorite plugins. -->
        <t-menu-group
          id="alacrity-main-navigation"
          :title="t('navigation.main')"
        >
          <t-menu-item value="plugins" :to="{ path: '/' }">
            <template #icon> <list-icon /> </template>
            {{ t("allPlugins") }}
          </t-menu-item>

          <t-menu-item value="favorite" :to="{ path: '/favorite' }">
            <template #icon> <star-icon /> </template>
            {{ t("favorite") }}
          </t-menu-item>
        </t-menu-group>

        <!-- Iterate over all groups, and show them as submenus -->
        <t-menu-group
          id="alacrity-grouped-plugins"
          :title="t('navigation.grouped')"
        >
          <t-submenu
            v-for="group in menuGroupStore.groups"
            :key="group"
            :value="group"
          >
            <template #icon>
              <component :is="TypeLogos[group].value"></component>
            </template>
            <template #title>
              {{ t(tGroupName(group)) }}
            </template>

            <!-- Iterate over plugins in group. -->
            <t-menu-item
              v-for="plugin in pluginsStore.groupedPlugins[group]"
              :key="plugin.id"
              :value="plugin.id"
              :to="{ path: getPluginRoute(plugin.id) }"
            >
              {{ t(tPluginName(plugin.id)) }}
            </t-menu-item>
          </t-submenu>
        </t-menu-group>

        <!-- Searching plugins and settings page. -->
        <t-menu-group :title="t('navigation.more')">
          <t-menu-item
            id="alacrity-search-plugins"
            value="search"
            @click="showSearchDialog = true"
          >
            <template #icon> <search-icon /> </template>
            {{ t("search") }}
          </t-menu-item>

          <t-menu-item
            id="alacrity-settings"
            value="settings"
            :to="{ path: '/settings' }"
          >
            <template #icon> <setting-icon /> </template>
            {{ t("settings") }}
          </t-menu-item>
        </t-menu-group>

        <!-- Collapse side menu. -->
        <template #operations>
          <t-button
            id="alacrity-collapse"
            variant="text"
            shape="square"
            @click="collapsed = !collapsed"
          >
            <template #icon> <view-list-icon /> </template>
          </t-button>
        </template>
      </t-menu>
    </t-aside>

    <!-- Main content. -->
    <t-layout overflow-x-hidden>
      <t-content m-3>
        <slot></slot>
      </t-content>
    </t-layout>

    <search-dialog v-model="showSearchDialog"></search-dialog>
  </t-layout>
</template>

<style scoped lang="less">
// Fill height and avoid scrolling.
#main-layout {
  // Found on stackoverflow, in case height can't be correctly calculated.
  // height: calc(~"100vh - 16px");
  height: calc(100vh - 16px);
}
</style>

<i18n>
{
  "zhHans": {
    "search": "搜索插件",
    "allPlugins": "全部插件",
    "settings": "应用设置",
    "favorite": "收藏插件",
    "navigation": {
      "main": "主导航",
      "grouped": "分组插件",
      "more": "更多"
    }
  },
  "en": {
    "search": "Search plugins",
    "allPlugins": "All plugins",
    "settings": "Settings",
    "favorite": "Favorite",
    "navigation": {
      "main": "Main navigation",
      "grouped": "Grouped plugins",
      "more": "More"
    }
  }
}
</i18n>
