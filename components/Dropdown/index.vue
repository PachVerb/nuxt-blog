<!--
 * @LastEditTime: 2022-07-23 19:41:11
 * @Description: 
 * @Date: 2022-07-22 00:42:05
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="dropdown-wrap" @click="handleToggle">
    <Button :icon="icon">
      <slot></slot>
    </Button>
    <div
      class="dropdown-overlay animate__animated"
      :class="visible ? ['animate__fadeIn'] : ['animate__slideOutUp']"
      v-show="visible"
    >
      <slot name="overlay"></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Button from "../Button/index.vue";
// prop
defineProps({
  icon: {
    type: Array,
    default: [],
  },
});

// data
const visible = ref(false);

//method
function handleToggle() {
  visible.value = !visible.value;
}
</script>
<style scoped>
.dropdown-wrap {
  position: relative;
  cursor: pointer;
}
.dropdown-wrap .dropdown-overlay {
  position: absolute;
  background-color: #fff;
  width: 100%;
  margin-top: 5px;
  box-shadow: 0 0 30px 0px #ccc;
}
</style>
