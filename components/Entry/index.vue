<!--
 * @LastEditTime: 2022-07-20 23:37:39
 * @Description: 
 * @Date: 2022-07-20 22:53:49
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div>
    <div class="content">
      <div class="meta-container">{{ blogs.title }}</div>
      <div class="content-wrapper">
        <div class="content-main">
          <div class="title-row">
            <div class="title">{{ blogs.blog.title }}</div>
            <div class="sub-title">{{ blogs.blog.subtitle }}</div>
          </div>

          <div class="abstract">{{ blogs.blog.abstract }}</div>

          <div class="action-list">
            <div class="views">{{ props.blogs.views }}</div>
            <div class="zan">{{ props.blogs.zans }}</div>
            <div class="comment">{{ props.blogs.comment }}</div>
          </div>
        </div>

        <img
          src="	https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/…d8~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
          alt="alt"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @props
interface Posts {
  title: string;
  blog: { title: string; subtitle: string; abstract };
  tools: {
    views: number;
    zans: number;
    comment: number;
  };
}
const props = defineProps({ blogs: Object });

// @methods
</script>

<style scoped>
.content {
  padding: 12px 20px 0;
  cursor: pointer;
}
.content-wrapper {
  display: flex;
  padding-bottom: 12px;
  margin-top: 10px;
  border: 1px solid rgba(228, 230, 235, 0.5);
}
.content-wrapper img {
  flex: 0 0 auto;
  width: 120px;
  height: 80px;
  margin-left: 24px;
  background-color: #fff;
  border-radius: 2px;
}
.content-wrapper .content-main .title-row {
  display: flex;
  margin-bottom: 8px;
}

.content-wrapper .content-main .abstract {
  margin-bottom: 10px;
}

.content-wrapper .content-main .action-list {
  display: flex;
  align-items: center;
}
</style>
