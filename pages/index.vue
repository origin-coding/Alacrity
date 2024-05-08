<script setup lang="ts">
const route = useRoute();

const router = useRouter();

function onCLick() {
  alert("123123");
}

const { t, setLocale } = useI18n();
</script>

<template>
  <div>
    <t-button @click="router.push('/')">Hello, world!</t-button>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">
      Learn more about Nuxt Routing
    </a>
    <t-button @click="onCLick">Click me!</t-button>
    <t-button @click="setLocale('en')">English</t-button>
    <t-button @click="setLocale('zhHans')">中文</t-button>
    <div>{{ t("a") }}</div>
  </div>
</template>

<i18n>
{
  "en": {
    "something": "This is something"
  },
  "zhHans": {
    "something": "这是个东西"
  }
}
</i18n>
