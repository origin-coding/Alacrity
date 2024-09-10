<script setup lang="ts">
import type { GuideProps } from "tdesign-vue-next";

import useGuideStore from "~/stores/guide";

const { t } = useI18n();
const guideStore = useGuideStore();

const current = ref(-1);

// If haven't showed guide, show it.
onMounted(() => {
  if (!guideStore.guide) {
    current.value = 0;
  }
});

const steps = computed<GuideProps["steps"]>(() => [
  {
    element: "aside",
    title: t("steps.sidebar.title"),
    body: t("steps.sidebar.body"),
    placement: "right",
  },
  {
    element: "#alacrity-main-navigation",
    title: t("steps.main-navigation.title"),
    body: t("steps.main-navigation.body"),
    placement: "right",
  },
  {
    element: "#alacrity-grouped-plugins",
    title: t("steps.grouped-plugins.title"),
    body: t("steps.grouped-plugins.body"),
    placement: "right",
  },
  {
    element: "#alacrity-search-plugins",
    title: t("steps.search-plugins.title"),
    body: t("steps.search-plugins.body"),
    placement: "right",
  },
  {
    element: "#alacrity-settings",
    title: t("steps.settings.title"),
    body: t("steps.settings.body"),
    placement: "right",
  },
  {
    element: "#alacrity-collapse",
    title: t("steps.collapse.title"),
    body: t("steps.collapse.body"),
    placement: "right",
  },
  {
    element: ".alacrity-initial-plugin",
    title: t("steps.initial-plugin.title"),
    body: t("steps.initial-plugin.body"),
    placement: "right",
  },
]);

function onFinishOrSkip() {
  guideStore.guide = true;
}
</script>

<template>
  <t-guide
    v-model="current"
    :steps
    @finish="onFinishOrSkip"
    @skip="onFinishOrSkip"
  ></t-guide>
</template>

<style scoped lang="less"></style>

<i18n>
{
  "en": {
    "steps": {
      "sidebar": {
        "title": "Application Sidebar",
        "body": "The sidebar displays common plugins and operations"
      },
      "main-navigation": {
        "title": "Main Navigation",
        "body": "The main navigation displays all and favorite plugins"
      },
      "grouped-plugins": {
        "title": "Grouped Plugins",
        "body": "All plugins are grouped by category and displayed here"
      },
      "search-plugins": {
        "title": "Search Plugins",
        "body": "Click here or use Ctrl/⌘ + K to search for plugins"
      },
      "settings": {
        "title": "Settings",
        "body": "Click here to set up the app or view basic information"
      },
      "collapse": {
        "title": "Collapse Button",
        "body": "Click this button to toggle the menu's collapsed state"
      },
      "initial-plugin": {
        "title": "Application Plugins",
        "body": "Application plugins are displayed in a card, which contains three parts: plugin's name in the upper left corner, a favorite/unfavorite button in the upper right corner, and a description below"
      }
    }
  },
  "zhHans": {
    "steps": {
      "sidebar": {
        "title": "应用侧边栏",
        "body": "侧边栏列出了常用插件和操作"
      },
      "main-navigation": {
        "title": "主导航",
        "body": "主导航展示全部和收藏的插件"
      },
      "grouped-plugins": {
        "title": "分组插件",
        "body": "全部的插件按照类别分组，展现在这里"
      },
      "search-plugins": {
        "title": "搜索插件",
        "body": "点击这里，或使用 Ctrl/⌘ + K 快捷键来搜索插件"
      },
      "settings": {
        "title": "设置",
        "body": "点击这里可以对应用进行设置，或查看基本信息"
      },
      "collapse": {
        "title": "折叠按钮",
        "body": "点击这个按钮切换菜单的折叠状态"
      },
      "initial-plugin": {
        "title": "应用插件",
        "body": "应用插件以卡片的形式进行展示，包含三个部分，分别是左上角的插件名称，右上角的收藏/取消收藏按钮，以及下方的插件描述"
      }
    }
  }
}
</i18n>
