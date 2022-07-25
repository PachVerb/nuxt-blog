<!--
 * @LastEditTime: 2022-07-26 02:05:27
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
<script setup lang="ts">
import { nextTick } from "vue";
import WatefFall, { throttle } from "./utils/waterfall.js";

// data
const initTop = ref<number>(0);

// method
const emit = defineEmits(["wscroll"]);
function handleScroll(e) {
  //   console.log(document.body.scrollTop);
  // 滚动距离刷新 > 10像素刷新
  const scrollEnd =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;
  if (scrollEnd) {
    emit("wscroll", e);
  }
  initTop.value = window.screenTop;
}

function regisScollhanler(e) {
  throttle(handleScroll)(e);
}

onMounted(() => {
  const wrapper = document.querySelector(".img-wrapper");
  if (!wrapper.children.length) {
    return;
  }
  nextTick(() => {
    setTimeout(() => {
      new WatefFall({
        $el: document.querySelector(".img-wrapper"),
        count: 4,
        gap: 10,
      });
    }, 100);
  });

  window.addEventListener("scroll", throttle(handleScroll, 300));
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", throttle(handleScroll, 300));
});
</script>
<style scoped>
.img-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
</style>
