<!--
 * @LastEditTime: 2022-07-20 00:36:19
 * @Description: 
 * @Date: 2022-07-19 22:22:24
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div id="app">
    <slot name="nav"></slot>
    <slot></slot>
  </div>
</template>
<style scoped>
#app {
  height: 100vh;
}
@media screen and (min-width: 1200px) {
  .container {
    width: 1200px;
    height: 100%;
    margin: auto;
  }
  .container {
    font-size: 20px;
  }
}
.nav {
  padding: 12px 120px;
  box-shadow: 0px 0px 12px -5px #777;
}
.h-nav {
  display: flex;
  justify-content: space-between;
}

.h-nav .logo {
  display: flex;
  align-items: center;
  width: 120px;
  height: 50px;
}
.h-nav .logo img {
  width: 100%;
  height: 100%;
}
</style>
