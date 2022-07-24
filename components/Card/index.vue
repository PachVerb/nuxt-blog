<!--
 * @LastEditTime: 2022-07-25 00:30:31
 * @Description:  卡片
 * @Date: 2022-07-24 23:59:53
 * @Author: wangshan
 * @LastEditors: wangshan
-->

<template>
  <div
    class="card-wrap"
    :style="{ width: width + 'px' }"
    :class="{ showb: bordered }"
  >
    <div class="card-head">
      <div class="card-head-wrap">
        <div class="card-title">
          <span>{{ title }}</span>
          <i v-if="icon" :class="['iconfont', icon]"></i>
        </div>

        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  width: {
    type: typeof Number;
  };
  icon: {
    type: typeof String;
  };
  title: typeof String;
  bordered: {
    type: typeof Boolean;
    default: boolean;
  };
}>({
  width: {
    type: Number,
  },
  icon: {
    type: String,
  },
  title: String,
  bordered: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.card-wrap {
  width: 100%;
  background-color: #fff;
}
.card-wrap .card-head {
  min-height: 48px;
  padding: 0 24px;
  background-color: transparent;
  border-radius: 2px 2px 0 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: -1px;
}
.card-wrap .card-head .card-head-wrap {
  display: flex;
  align-items: center;
}

.card-wrap .card-head .card-head-wrap .card-title {
  display: inline-block;
  flex: 1;
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card-wrap .card-head .card-head-wrap .extra {
  float: right;
  padding: 16px 0;
  margin-left: auto;
}
.card-wrap .card-body {
  padding: 24px;
}

/* bordered */
.showb {
  border: 1px solid #f0f0f0;
}
</style>
