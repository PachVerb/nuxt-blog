<!--
 * @LastEditTime: 2022-07-24 02:04:45
 * @Description: 
 * @Date: 2022-07-18 21:37:28
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="container">
    <div class="main-content">
      <slot></slot>
    </div>
    <aside>
      <slot name="aside"></slot>
    </aside>
  </div>
</template>

<style scoped>
/* .main {
  min-height: calc(100vh - 60px);
  background: -webkit-linear-gradient(top, white, lightblue, skyblue);
  padding: 24px;
} */
@media screen and (min-width: 1200px) {
  .container {
    position: relative;
    max-width: 960px;
    /* width: 700px; */
    height: 100%;
    margin: 12px auto 0 auto;
  }
  .container {
    font-size: 20px;
  }
  .container .main-content {
    width: 700px;
  }

  .container aside {
    position: absolute;
    width: 240px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
