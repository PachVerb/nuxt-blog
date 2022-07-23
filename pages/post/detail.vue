<!--
 * @LastEditTime: 2022-07-24 02:05:24
 * @Description: 
 * @Date: 2022-07-21 01:41:44
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <NuxtLayout name="custom">
    <template #default>
      <div id="detail" class="editor-content-view">{{ router.query }}</div>
    </template>
    <template #aside>
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

<script setup>
definePageMeta({
  layout: "custom",
});

const router = useRoute();
console.log(router, router.params, router.query);

onMounted(async () => {
  const res = await $fetch("/api/detail");
  console.log(res);
  //   console.log(document.getElementById("detail"));
  document.getElementById("detail").innerHTML = res.content;
});
</script>

<style scoped>
@import url(../../assets/style/editor.css);
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
