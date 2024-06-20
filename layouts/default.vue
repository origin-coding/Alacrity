<script setup lang="ts">
import useMenuGroupStore from "~/stores/menu-group";
import { TypeLogos } from "~/types/alacrity-plugin";
import usePluginsStore from "~/stores/plugins";
import useSearchStore from "~/stores/search";
import type { Component, ShallowRef } from "vue";

const { t } = useI18n();
const menuGroupStore = useMenuGroupStore();
const pluginsStore = usePluginsStore();
const { search } = storeToRefs(useSearchStore());

function makeIcon(icon: ShallowRef<Component>) {
  return icon.value;
}
</script>

<template>
  <t-layout id="main-layout">
    <t-aside>
      <t-menu theme="light" :value="undefined" :expand-mutex="true">
        <!-- Menu headers and a divider. -->
        <t-input :placeholder="t('search')" v-model="search" :clearable="true">
          <template #prefix-icon>
            <search-icon></search-icon>
          </template>
        </t-input>
        <t-menu-item value="resource" :to="{ path: '/' }">
          <template #icon> <list-icon /> </template>
          {{ t("allPlugins") }}
        </t-menu-item>
        <t-divider></t-divider>

        <!-- Iterate over all groups, and show them as submenus -->
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

        <!-- Menu item for settings. -->
        <template #operations>
          <t-menu-item value="resource" :to="{ path: '/favorite' }">
            <template #icon> <star-icon /> </template>
            {{ t("favorite") }}
          </t-menu-item>
          <t-menu-item value="resource" :to="{ path: '/disabled' }">
            <template #icon> <lock-on-icon /> </template>
            {{ t("disabled") }}
          </t-menu-item>
          <t-menu-item value="edit1" :to="{ path: '/settings' }">
            <template #icon> <setting-icon /> </template>
            {{ t("settings") }}
          </t-menu-item>
        </template>
      </t-menu>
    </t-aside>

    <!-- Main content. -->
    <t-layout overflow-x-hidden>
      <t-content m-3>
        <slot></slot>
      </t-content>
    </t-layout>
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
    "disabled": "禁用插件"
  },
  "en": {
    "search": "Search plugins",
    "allPlugins": "All plugins",
    "settings": "Settings",
    "favorite": "Favorite",
    "disabled": "Disabled"
  }
}
</i18n>
