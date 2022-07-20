<!--
 * @LastEditTime: 2022-07-20 22:11:54
 * @Description: 
 * @Date: 2022-07-18 21:37:28
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<!-- <script setup>
definePageMeta({
  layout: "custom",
});
</script> -->
<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 60px);
  background: -webkit-linear-gradient(top, white, lightblue, skyblue);
  padding: 24px;
}
</style>
