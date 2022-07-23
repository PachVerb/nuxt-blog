<!--
 * @LastEditTime: 2022-07-23 19:49:05
 * @Description: 
 * @Date: 2022-07-23 18:45:14
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="menu-item" @click="() => $emit('handleMenuItem', [111, 222])">
    <span v-if="icon.length != 0">
      <i :class="icon"></i>
    </span>
    <slot></slot>
  </div>
</template>
<script setup>
defineProps({
  icon: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped>
.menu-item {
  /* display: flex;
  align-items: center; */
  margin-top: 5px;
  margin-bottom: 8px;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
}
.menu-item:hover {
  background-color: #ccc;
}
span {
  vertical-align: -7%;
  margin-right: 8px;
}
</style>
