<!--
 * @LastEditTime: 2022-07-24 00:53:37
 * @Description: 
 * @Date: 2022-07-21 01:41:44
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div id="detail" class="editor-content-view">{{ router.query }}</div>
</template>

<script setup>
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
</style>
