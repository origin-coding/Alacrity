<script setup lang="ts">
import useSideMenuGroups from "~/stores/side-menu-groups";
import { TypeLogos } from "~/types/alacrity-plugin";
import useAlacrityPlugins from "~/stores/alacrity-plugins";
import useSearchInfo from "~/stores/search-info";

const { t } = useI18n();
const { groups } = useSideMenuGroups();
const { groupedPlugins } = useAlacrityPlugins();
const { search } = storeToRefs(useSearchInfo());
</script>

<template>
  <t-layout id="main-layout">
    <t-aside>
      <t-menu theme="light" :value="undefined" :expand-mutex="true">
        <!-- Menu headers and a divider. -->
        <t-input :placeholder="t('search')" v-model="search" :clearable="true">
          <template #prefix-icon>
            <t-icon name="search"></t-icon>
          </template>
        </t-input>
        <t-menu-item value="resource" :to="{ path: '/' }">
          <template #icon>
            <t-icon name="list" />
          </template>
          {{ t("allPlugins") }}
        </t-menu-item>
        <t-divider></t-divider>

        <!-- Iterate over all groups, and show them as submenus -->
        <t-submenu v-for="group in groups" :key="group" :value="group">
          <template #icon>
            <t-icon :name="TypeLogos[group]" />
          </template>
          <template #title>
            {{ t(tGroupName(group)) }}
          </template>

          <!-- Iterate over plugins in group. -->
          <t-menu-item
            v-for="plugin in groupedPlugins[group]"
            :key="plugin.id"
            :value="plugin.id"
            :to="{ path: getPluginRoute(plugin.id) }"
          >
            <template #icon>
              <t-icon :name="plugin.icon" />
            </template>
            {{ t(tPluginName(plugin.id)) }}
          </t-menu-item>
        </t-submenu>

        <!-- Menu item for settings. -->
        <template #operations>
          <t-menu-item value="edit1">
            <template #icon>
              <t-icon name="setting" />
            </template>
            {{ t("settings") }}
          </t-menu-item>
        </template>
      </t-menu>
    </t-aside>

    <!-- Main content. -->
    <t-layout>
      <t-content>
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
    "settings": "应用设置"
  },
  "en": {
    "search": "Search plugins",
    "allPlugins": "All plugins",
    "settings": "Settings"
  }
}
</i18n>
