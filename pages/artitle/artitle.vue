<!--
 * @LastEditTime: 2022-07-20 23:47:36
 * @Description: 
 * @Date: 2022-07-18 21:41:20
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div>
    <!-- <Entry :blogs=""></Entry> -->
  </div>
</template>

<script setup lang="ts">
const blogs = ref(null);

onBeforeMount(() => {
  console.log(blogs);
});
</script>
