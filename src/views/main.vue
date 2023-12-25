<script setup lang="ts">
import { useRouter } from "vue-router";

import { Plugin } from "@/common";
import { useFavorites, usePluginFilter } from "@/plugins";

const router = useRouter();
const pluginFilter = usePluginFilter();
const favorites = useFavorites();

import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

async function toggleFavorite(plugin: Plugin) {
  if (favorites.inFavorites(plugin)) {
    await favorites.removeFromFavorites(plugin);
  } else {
    await favorites.addToFavorites(plugin);
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-card
        v-for="plugin of pluginFilter.filteredPlugins"
        @click="router.push(plugin.Route!.toString())"
        variant="outlined"
        class="v-col-3 my-4 mx-8"
        min-height="120"
      >
        <template v-slot:append>
          <!-- Stop event passing to parent. -->
          <v-icon
            :icon="
              favorites.inFavorites(plugin) ? 'mdi-star' : 'mdi-star-outline'
            "
            @click.stop="toggleFavorite(plugin)"
          ></v-icon>
        </template>
        <template v-slot:title>
          {{
            plugin.MultiLanguage && plugin.Locale?.Name[locale]
              ? plugin.Locale!.Name[locale]
              : plugin.Name
          }}
        </template>
        <v-locale-provider locale="zhHans">
          <v-card-text>
            {{
              // Check if plugin supports multi-language and if it has translation for corresponding language.
              plugin.MultiLanguage && plugin.Locale?.Description[locale]
                ? plugin.Locale!.Description[locale]
                : plugin.Description
            }}
          </v-card-text>
        </v-locale-provider>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped></style>
