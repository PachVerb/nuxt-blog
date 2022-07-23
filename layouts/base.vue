<!--
 * @LastEditTime: 2022-07-24 02:21:52
 * @Description: 
 * @Date: 2022-07-24 02:11:20
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 60px);
  background: -webkit-linear-gradient(top, white, lightblue, skyblue);
  padding: 24px;
}
</style>
