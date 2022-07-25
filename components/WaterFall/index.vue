<!--
 * @LastEditTime: 2022-07-25 20:01:00
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
import { nextTick } from "vue";
import WatefFall, { throttle } from "./utils/waterfall.js";

// method
const emit = defineEmits(["wscroll"]);
function handleScroll(e) {
  // 滚动距离刷新 > 10像素刷新
  const scrollEnd =
    window.innerHeight + window.scrollY == document.body.offsetHeight;
  if (scrollEnd) {
    emit("wscroll", e);
  }
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      new WatefFall({
        $el: document.querySelector(".img-wrapper"),
        count: 4,
        gap: 10,
      });
    }, 100);
  });

  window.addEventListener("scroll", throttle(handleScroll, 500));
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", throttle(handleScroll));
});
</script>
<style scoped>
.img-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
</style>
