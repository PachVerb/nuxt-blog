<!--
 * @LastEditTime: 2022-07-21 22:50:58
 * @Description: 
 * @Date: 2022-07-18 21:41:25
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="entry-list">
    <Entry
      @click="handleViewDetail(item)"
      v-for="(item, idx) in blogs"
      :key="idx"
      :artitle="item"
    ></Entry>
  </div>
</template>
<script setup lang="ts">
const blogs = ref(null);

// @methods
function handleViewDetail(item) {
  return navigateTo({
    path: "/post/detail",
    query: {
      key: "23",
    },
    // replace: true, // 替换history历史站的最后一次记录
  });
}

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
