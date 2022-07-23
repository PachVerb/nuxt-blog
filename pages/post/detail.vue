<!--
 * @LastEditTime: 2022-07-23 16:09:15
 * @Description: 
 * @Date: 2022-07-21 01:41:44
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div id="detail">{{ router.query }}</div>
</template>

<script setup>
const router = useRoute();
console.log(router, router.params, router.query);

onMounted(async () => {
  const res = await $fetch("/api/detail");
  //   console.log(document.getElementById("detail"));
  document.getElementById("detail").innerHTML = res.content;
});
</script>
