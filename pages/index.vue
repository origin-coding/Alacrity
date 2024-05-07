<script setup lang="ts">
const route = useRoute();

const router = useRouter();

function onCLick() {
  alert("123123");
}
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
  </div>
</template>
