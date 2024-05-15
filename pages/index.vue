<script setup lang="ts">
import useSearchInfo from "~/stores/search-info";

const route = useRoute();
const { t, setLocale } = useI18n();

const { searchResults } = storeToRefs(useSearchInfo());

watchEffect(() => {
  // searchPlugins(search);
  console.log(searchResults.value.length);
});
</script>

<template>
  <div>
    <p>Current route: {{ route.path }}</p>
    <t-button @click="setLocale('en')">English</t-button>
    <t-button @click="setLocale('zhHans')">中文</t-button>
    <div>{{ t("plugin-names.base64-encode-decode") }}</div>
  </div>
</template>

<i18n>

</i18n>
