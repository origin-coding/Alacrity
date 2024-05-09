<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <t-layout id="main-layout">
    <t-aside>
      <t-menu theme="light" :value="undefined">
        <t-menu-item value="dashboard">
          <t-input :placeholder="t('search')"></t-input>
        </t-menu-item>
        <t-menu-item value="resource">
          <template #icon>
            <t-icon name="list" />
          </template>
          {{ t("allPlugins") }}
        </t-menu-item>
        <t-divider></t-divider>
        <t-menu-item value="root">
          <template #icon>
            <t-icon name="root-list" />
          </template>
          根目录
        </t-menu-item>
        <t-menu-item value="control-platform">
          <template #icon>
            <t-icon name="control-platform" />
          </template>
          调度平台
        </t-menu-item>
        <t-menu-item value="precise-monitor">
          <template #icon>
            <t-icon name="precise-monitor" />
          </template>
          调度平台
        </t-menu-item>
        <t-menu-item value="mail">
          <template #icon>
            <t-icon name="mail" />
          </template>
          消息区
        </t-menu-item>
        <t-menu-item value="user-circle">
          <template #icon>
            <t-icon name="user-circle" />
          </template>
          个人中心
        </t-menu-item>
        <t-menu-item value="play-circle">
          <template #icon>
            <t-icon name="play-circle" />
          </template>
          视频区
        </t-menu-item>
        <t-menu-item value="edit1">
          <template #icon>
            <t-icon name="edit-1" />
          </template>
          资源编辑
        </t-menu-item>
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
