<!--
 * @LastEditTime: 2022-07-21 21:56:42
 * @Description: 
 * @Date: 2022-07-19 23:56:46
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="container">
    <div class="content">
      <NuxtPage></NuxtPage>
    </div>

    <!-- 这里的数据通过emit触发更新 -->
    <aside>
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
    </aside>
  </div>
</template>

<script setup></script>

<style scoped>
.bg {
  background-color: #fff;
}
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
  .container .content {
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
