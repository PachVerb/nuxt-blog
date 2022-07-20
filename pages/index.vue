<!--
 * @LastEditTime: 2022-07-20 22:07:09
 * @Description: 
 * @Date: 2022-07-18 21:49:09
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
</script>
<template>
  <NuxtLayout name="custom">
    <div class="bg">
      <h1>WelCome website of PachVerb</h1>

      <div class="box">
        <p>
          React 使创建交互式 UI
          变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React
          能高效更新并渲染合适的组件。
        </p>

        <button class="custom-btn btn-3"><span>Read More</span></button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.bg {
  height: 100%;
}
/* .bg {
  background: -webkit-linear-gradient(top, white, lightblue, skyblue);
} */
.bg h1 {
  padding: 60px 0 0 0;
  font-size: 60px;
  font-weight: bolder;
  box-sizing: border-box;
  text-align: center;
}
.bg > .box {
  width: 30%;
  /* height: 200px; */
  /* padding: 60px 120px 40px 120px; */
  margin: 450px auto 0 auto;
  border: 2px solid rgb(99, 136, 79);
  border-radius: 24px;
  text-align: center;
  min-width: 300px;
}
.bg > .box p {
  font-size: 18px;
  font-weight: lighter;
  color: #6a5e5e;
  line-height: 30px;
}
button {
  margin: 20px;
}
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}
.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.3s ease;
}
.btn-3:before {
  height: 0%;
  width: 2px;
}
.btn-3:after {
  width: 0%;
  height: 2px;
}
.btn-3:hover {
  background: transparent;
  box-shadow: none;
}
.btn-3:hover:before {
  height: 100%;
}
.btn-3:hover:after {
  width: 100%;
}
.btn-3 span:hover {
  color: rgba(2, 126, 251, 1);
}
.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.3s ease;
}
.btn-3 span:before {
  width: 2px;
  height: 0%;
}
.btn-3 span:after {
  width: 0%;
  height: 2px;
}
.btn-3 span:hover:before {
  height: 100%;
}
.btn-3 span:hover:after {
  width: 100%;
}
</style>
