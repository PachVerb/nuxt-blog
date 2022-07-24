<!--
 * @LastEditTime: 2022-07-24 23:56:29
 * @Description: 
 * @Date: 2022-07-24 17:50:50
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<script lang="ts">
// interface Props {
//   size: number;
//
export default defineComponent({
  setup(props) {
    console.log(props);
  },
  props: {
    tab: {
      type: String,
      required: true,
    },
    key: {
      type: Number,
    },
  },
});
</script>
<template>
  <div class="item-wrap" :class="{ tablpanel: key }">
    <slot></slot>
  </div>
</template>
