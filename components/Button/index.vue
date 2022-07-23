<!--
 * @LastEditTime: 2022-07-23 18:57:15
 * @Description: 
 * @Date: 2022-07-22 00:42:52
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div
    class="btn-box"
    :class="{
      small: size === 'small',
      bigger: size === 'bigger',
      circle: shape === 'circle',
      success: theme == 'success',
      warn: theme === 'warn',
    }"
    :style="customStyle"
  >
    <button v-if="shape !== 'circle'" class="p-btn">
      <slot></slot>
    </button>
    <slot name="icon">
      <span class="icon-wrap" style="marginleft: '12px'">
        <i style="color: #fff" :class="icon"></i>
      </span>
    </slot>
  </div>
</template>
<script setup lang="ts">
defineProps({
  customStyle: {
    type: Object,
    default: {},
  },
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
    default: "normal", // normal | circle
  },
  theme: {
    type: String,
    default: "normal", // warn | gramy | success
  },
  icon: {
    type: Array,
  },
});
</script>
<style scoped>
.btn-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 40px;
  border-radius: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1); */
}
.btn-box {
  background: rgb(6, 14, 131);
  /* background: linear-gradient(
    0deg,
    rgba(6, 14, 131, 1) 0%,
    rgba(12, 25, 180, 1) 100%
  ); */
  background: #007fff;
}
.btn-box:hover {
  background: rgb(0, 3, 255);
  background: linear-gradient(
    0deg,
    rgba(0, 3, 255, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
}

button {
  /* width: 100%; */
  height: 100%;
  appearance: none;
  background-color: inherit;
  outline: none;
  border: none;
  white-space: nowrap;
}
.p-btn {
  color: #fff;
  border-radius: 0;
  padding: 0px 12px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* size */
.small {
  width: 100px;
  height: 20px;
}
.bigger {
  width: 200px;
  height: 100px;
}

/* shape */
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

/* theme */
.primary {
  background: #007fff;
}

.success {
  background-color: #c9d60b;
}

.warn {
  background: rgb(255, 27, 0);
}
.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-left: 1px solid rgb(199, 171, 171);
}
</style>
