<!--
 * @LastEditTime: 2022-07-22 22:50:39
 * @Description: 
 * @Date: 2022-07-22 00:42:52
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="btn-box">
    <button>
      <slot></slot>
    </button>
  </div>
</template>
<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 120,
  },
  height: {
    type: Number,
    default: 60,
  },
  size: {
    type: String, // small | normal | bigger
    default: "normal",
  },
  shape: {
    type: String,
    default: "normal", // normal | circle | ghost
  },
  theme: {
    type: String,
    default: "normal", // warn | gramy | success
  },
});
</script>
<style scoped>
.btn-box {
  width: 120px;
  height: 60px;
}
.p-btn {
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

/* 
  theme

  default: normal
*/            
.btn-box {
  background: rgb(6, 14, 131);
  background: linear-gradient(
    0deg,
    rgba(6, 14, 131, 1) 0%,
    rgba(12, 25, 180, 1) 100%
  );
  border: none;
}
.btn-box:hover {
  background: rgb(0, 3, 255);
  background: linear-gradient(
    0deg,
    rgba(0, 3, 255, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
}
</style>
