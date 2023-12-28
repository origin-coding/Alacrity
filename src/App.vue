<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";
import { open } from "@tauri-apps/api/shell";
import { Store } from "tauri-plugin-store-api";
import { useRouter } from "vue-router";

import { usePlugins, usePluginFilter } from "@/plugins";
import { categories, CONFIG_FILE_PATH, KEY_LOCALE, KEY_THEME } from "@/common";

const router = useRouter();
const theme = useTheme();

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
    const currentPlugin = plugins.currentPlugin;
    items.push({
      title: currentPlugin.Name.toString(),
      to: currentPlugin.Route!.toString(),
      disabled: false,
    });
  }

  return items;
});

async function toggleTheme() {
  theme.global.name.value =
    theme.global.name.value === "darkTheme" ? "lightTheme" : "darkTheme";

  await store.value.set(KEY_THEME, theme.global.name.value);
  await store.value.save();
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

  // Init theme.
  const themeConfig = await store.value.get<string>(KEY_THEME);
  theme.global.name.value = themeConfig || "lightTheme";

  await store.value.save();
});
</script>

<template>
  <v-app class="text-custom_text">
    <v-navigation-drawer
      :expand-on-hover="true"
      :rail="!expandDrawer"
      class="rounded-lg border-b"
    >
      <v-list>
        <v-list-item
          v-for="(category, key) in categories"
          @click="
            router.push('/');
            pluginFilter.setCategory(key);
          "
          :prepend-icon="category.icon"
          :title="t(`category.${category.locale}`)"
          class="border-b rounded"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :flat="true" class="rounded-lg border-b">
      <v-app-bar-nav-icon @click="expandDrawer = !expandDrawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        <v-breadcrumbs
          :items="breadcrumbItems"
          @click="pluginFilter.setCategory('All')"
        ></v-breadcrumbs>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-text-field
        :hide-details="true"
        v-model="search"
        variant="outlined"
        :placeholder="t('search')"
      ></v-text-field>

      <v-btn prepend-icon="mdi-translate" append-icon="mdi-menu-down">
        {{ localeMapping[locale as keyof typeof localeMapping] }}
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(value, key) of localeMapping"
              @click="setLocale(key)"
            >
              {{ value }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <v-btn :icon="true" @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn :icon="true" @click="openRepository">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>
