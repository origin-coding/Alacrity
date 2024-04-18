<script setup lang="ts">
import { open } from "@tauri-apps/api/shell";
import { Store } from "tauri-plugin-store-api";
import { computed, onMounted, ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import { categories, CONFIG_FILE_PATH, KEY_LOCALE } from "@/common";
import { usePluginFilter, usePlugins } from "@/plugins";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";

const router = useRouter();

const plugins = usePlugins();
const pluginFilter = usePluginFilter();

const store = ref(new Store(CONFIG_FILE_PATH));
const search = ref("");
const expandDrawer = ref(true);

watchEffect(() => {
  pluginFilter.setSearch(search.value);
});

const breadcrumbItems = computed(() => {
  const items = [{ title: "Alacrity", to: "/", disabled: false }];
  if (plugins.currentPlugin !== null) {
    const { currentPlugin } = plugins;
    items.push({
      title: currentPlugin.Name.toString(),
      to: currentPlugin.Route!.toString(),
      disabled: false,
    });
  }

  return items;
});

async function toggleTheme() {
  // theme.global.name.value =
  //   theme.global.name.value === "darkTheme" ? "lightTheme" : "darkTheme";
  //
  // await store.value.set(KEY_THEME, theme.global.name.value);
  // await store.value.save();
}

async function openRepository() {
  await open("https://github.com/origin-coding/Alacrity");
}

const { t, locale } = useI18n({ useScope: "global" });
const localeMapping = { en: "English", zhHans: "简体中文" };

async function setLocale(newLocale: string) {
  locale.value = newLocale;
  await store.value.set(KEY_LOCALE, locale.value);
  await store.value.save();
}

onMounted(async () => {
  // Init locale configuration.
  const localeConfig = await store.value.get<string>(KEY_LOCALE);
  locale.value = localeConfig || "zhHans";

  // // Init theme.
  // const themeConfig = await store.value.get<string>(KEY_THEME);
  // theme.global.name.value = themeConfig || "lightTheme";

  await store.value.save();
});

const collapse = ref(false);
</script>

<template>
  <t-layout>
    <t-aside>
      <t-menu theme="light" value="dashboard">
        <template #logo>
          <img
            width="136"
            class="logo"
            src="https://www.tencent.com/img/index/menu_logo_hover.png"
            alt="logo"
          />
        </template>
        <t-menu-item value="user-circle">
          <template #icon>
            <t-icon name="home" />
          </template>
          全部插件
        </t-menu-item>
        <t-divider></t-divider>
        <t-menu-item value="play-circle">
          <template #icon>
            <t-icon name="play-circle" />
          </template>
          视频区
        </t-menu-item>
        <t-divider></t-divider>
        <t-menu-item value="edit1">
          <template #icon>
            <t-icon name="setting" />
          </template>
          设置
        </t-menu-item>
      </t-menu>
    </t-aside>
    <t-layout h-100vh>
      <t-content>
        <div>Content</div>
      </t-content>
      <t-footer
        >Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights
        Reserved</t-footer
      >
    </t-layout>
  </t-layout>
</template>

<style scoped></style>
