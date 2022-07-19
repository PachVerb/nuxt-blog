<!--
 * @LastEditTime: 2022-07-19 22:38:56
 * @Description: 
 * @Date: 2022-07-18 21:49:09
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
</script>
<template>
  <NuxtLayout name="custom">
    <template #nav>
      <h1>navigation</h1>
    </template>
    <template #container>
      <div>
        <h2>body</h2>
        <p>
          Layouts are placed in the layouts/ directory and will be automatically
          loaded via asynchronous import when used. Layouts are used by adding
          to your app.vue, and either setting a layout property as part of your
          page metadata (if you are using the ~/pages integration), or by
          manually specifying it as a prop to (Note: The layout name is
          normalized to kebab-case, so someLayout becomes some-layout.
        </p>
      </div>
    </template>
  </NuxtLayout>
</template>
