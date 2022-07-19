<template>
  <NuxtLayout name="default">
    <template #nav>
      <div class="nav h-nav line">
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
      <div class="c-nav h-nav column">
        <button class="menu-trigger" @click="toggleMenu"></button>
        <div class="logo">
          <img src="~/assets/imgs/logo.svg" alt="" />
        </div>
        <div
          class="c-menus animate__animated"
          :class="{
            animate__lightSpeedInLeft: iShow,
            animate__lightSpeedOutLeft: !iShow,
          }"
        >
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
const iShow = ref(false);

// togglle-menu
function toggleMenu() {
  iShow.value = !iShow.value;
  nextTick(() => {
    let menu = document.querySelector(".c-menus");
    iShow.value
      ? (menu.style.display = "block")
      : (menu.style.display = "none");
  });
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Oxygen:400,700);

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
.c-nav {
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.c-nav .logo {
  padding: 12px;
  margin: auto !important;
}
.c-nav .c-menus {
  display: none;
  width: 100%;
}
.c-nav .c-menus a {
  display: block;
  text-decoration: none;
  width: 100% !important;
  text-align: center;
  margin: 24px 0;
}
.column {
  display: none;
}

@media screen and (max-width: 725px) {
  .line {
    display: none !important;
  }
  .column {
    display: block !important;
  }
  .c-menus {
    display: none;
  }
}

div.menu-trigger {
  position: fixed;
  top: 10px;
  left: 10px;
  width: 36px;
  height: 36px;
  background: #dfe5eb;
  cursor: pointer;
  border-radius: 5px;

  -moz-transition: all 300ms;
  -webkit-transition: all 300ms;
  transition: all 300ms;
}
.menu-trigger:hover {
  background: #556270;
}
.menu-trigger:before {
  color: #fcfeff;
}
.menu-trigger:before {
  content: "\e801";
  display: inline-block;
  width: 36px;
  height: 36px;
  color: black;
  font-family: "ico";
  font-style: normal;
  font-size: 1.2em;
  font-weight: normal;
  font-variant: normal;
  text-align: center;
  text-transform: none;
  line-height: 36px;
}
</style>
<!-- <style scoped>
@media screen and(max-width: 725px) {
  .nav {
    display: flex !important;
    flex-direction: column !important;
  }
}
</style> -->
