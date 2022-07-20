<!--
 * @LastEditTime: 2022-07-21 01:05:32
 * @Description: 
 * @Date: 2022-07-18 21:41:25
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="entry-list">
    <Entry v-for="(item, idx) in blogs" :key="idx" :artitle="item"></Entry>
  </div>
</template>
<script setup lang="ts">
const blogs = ref(null);

onMounted(async () => {
  const res = await $fetch("/api/artitles");
  blogs.value = res.blogs;
  //   console.log(blogs.value);
});
</script>
<style scoped>
.entry-list {
  background-color: #fff;
}
</style>
