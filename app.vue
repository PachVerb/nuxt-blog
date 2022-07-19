<template>
  <NuxtLayout name="default">
    <template #nav>
      <div class="nav h-nav">
        <div class="logo">
          <img src="~/assets/imgs/logo.svg" alt="" />
        </div>
        <div class="menus">
          <RouterLink to="/"><span>首页</span></RouterLink>
          <RouterLink to="/post/artitles"><span>日志</span></RouterLink>
          <RouterLink to="going"><span>旅游</span></RouterLink>
          <RouterLink to="photo"><span>摄影</span></RouterLink>
        </div>
      </div>
    </template>

    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  layout: "default",
  title: "app",
});
</script>

<style>
* {
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.nav {
  height: 80px;
  box-sizing: border-box;
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
.menus a {
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  padding: 12px;
  text-align: center;
  text-decoration: none;
}

/* 文字下划线效果 */
.menus a {
  position: relative;
  text-decoration: none;
  font-size: 20px;
  color: #333;
}
.menus a:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 100%;
  background: #4285f4;
  transform: scale(0);
  transition: all 0.3s;
}
.menus a:hover:before {
  transform: scale(1);
}
</style>
