<!--
 * @LastEditTime: 2022-07-19 23:03:30
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
  <div style="height: 100%">
    <div class="nav">
      <slot name="nav" />
    </div>
    <div class="container">
      <slot name="container" />
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 1200px) {
  .container {
    width: 1200px;
    height: 100%;
    margin: auto;
  }
  .container {
    font-size: 20px;
  }
  .nav {
    margin: 0 120px;
  }
}
</style>
