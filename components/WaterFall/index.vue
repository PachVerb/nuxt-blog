<!--
 * @LastEditTime: 2022-07-25 09:54:24
 * @Description: 
 * @Date: 2022-07-25 09:04:59
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="img-wrapper">
    <slot></slot>
  </div>
</template>
<script setup>
import WatefFall from "./utils/waterfall.js";

// method
const emit = defineEmits(["wscroll"]);
function handleScroll(e) {
  // 滚动距离刷新 > 10像素刷新
  if (document.body.scrollHeight - document.body.scrollTop > 10) {
    emit("wscroll", e);
  }
}

onMounted(() => {
  new WatefFall({
    $el: document.querySelector(".img-wrapper"),
    count: 4,
    gap: 10,
  });

  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {});
</script>
<style scoped>
.img-wrapper {
  position: relative;
  width: 100%;
}
</style>
