<!--
 * @LastEditTime: 2022-07-25 00:41:22
 * @Description: 
 * @Date: 2022-07-18 21:41:25
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <NuxtLayout name="custom">
    <template #default>
      <div class="entry-list">
        <Entry
          @click="handleViewDetail(item)"
          v-for="(item, idx) in blogs"
          :key="idx"
          :artitle="item"
        ></Entry>
      </div>
    </template>
    <template #aside>
      <Card :title="('good' as String)"></Card>
      <div class="ranking-list bg">
        <h5>文章排行</h5>
      </div>
      <div class="ranking-topic bg">
        <h5>最近话题</h5>

        <ul>
          <li>前端</li>
          <li>后端</li>
          <li>摄影</li>
          <li>旅游</li>
        </ul>
      </div>
      <div class="ranking-skills bg">
        <h5>语言</h5>
        <ul>
          <li>html ----- 25%</li>
          <li>JS ---- 35%</li>
          <li>Ruby --- 25</li>
          <li>Rust --- 14</li>
          <li>Golang -----16%</li>
          <li>C ----- 39%</li>
        </ul>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

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
.bg {
  background-color: #fff;
}
.entry-list {
  background-color: #fff;
}
.ranking-list {
  width: 100%;
  margin-bottom: 12px;
  padding: 12px;
  box-sizing: border-box;
}
.ranking-topic {
  width: 100%;
  margin-bottom: 12px;
  padding: 12px;
  box-sizing: border-box;
}
.ranking-skills {
  width: 100%;
  margin-bottom: 12px;
  padding: 12px;
  box-sizing: border-box;
}
</style>
