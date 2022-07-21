<!--
 * @LastEditTime: 2022-07-21 22:50:34
 * @Description: 
 * @Date: 2022-07-21 01:41:44
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div>{{ router.query }}</div>
</template>

<script setup>
const router = useRoute();
console.log(router, router.params, router.query);
</script>
