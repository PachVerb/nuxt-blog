<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  layout: "default",
  title: "app",
});
</script>

<style>
* {
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
