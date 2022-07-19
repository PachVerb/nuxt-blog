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
  height: 60px;
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
</style>
