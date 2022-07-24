<!--
 * @LastEditTime: 2022-07-25 01:04:29
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
      <Card title="相关文章" :bordered="true" style="margin-bottom: 12px">
        <template #extra>more</template>
        <ul>
          <li>apple</li>
          <li>apple</li>
          <li>apple</li>
        </ul>
      </Card>
      <Card title="目录" :bordered="true" style="margin-bottom: 12px">
        <template #extra>more</template>
        <ul>
          <li>apple</li>
          <li>apple</li>
          <li>apple</li>
        </ul>
      </Card>
      <Card title="语言" :bordered="true" style="margin-bottom: 12px">
        <template #extra>more</template>
        <ul>
          <li>html ----- 25%</li>
          <li>JS ---- 35%</li>
          <li>Ruby --- 25</li>
          <li>Rust --- 14</li>
          <li>Golang -----16%</li>
          <li>C ----- 39%</li>
        </ul>
      </Card>
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
