<!--
 * @LastEditTime: 2022-07-25 10:37:31
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
import WatefFall, { throttle } from "./utils/waterfall.js";

// method
const emit = defineEmits(["wscroll"]);
function handleScroll(e) {
  console.log(document.querySelector(".img-wrapper").scrollTop);
  // 滚动距离刷新 > 10像素刷新
  const scrollEnd =
    window.innerHeight + window.scrollY >=
    document.querySelector(".img-wrapper").offsetHeight;
  if (scrollEnd) {
    emit("wscroll", e);
  }
}

onMounted(() => {
  new WatefFall({
    $el: document.querySelector(".img-wrapper"),
    count: 4,
    gap: 10,
  });

  window.addEventListener("scroll", throttle(handleScroll, 300));
});
onBeforeUnmount(() => {});
</script>
<style scoped>
.img-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
</style>
