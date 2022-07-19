<!--
 * @LastEditTime: 2022-07-20 01:01:51
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
  height: calc(100% - 60px);
}
</style>
