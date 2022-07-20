<!--
 * @LastEditTime: 2022-07-21 00:36:27
 * @Description: 
 * @Date: 2022-07-20 22:53:49
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div>
    <div class="content">
      <div class="meta-container">{{ artitle.title }}</div>
      <div class="content-wrapper">
        <div class="content-main">
          <div class="title-row">
            <a class="title" href="javascript: void(0)">{{
              artitle.blog.title
            }}</a>
            <a class="sub-title" href="javascript: void(0)">{{
              artitle.blog.subtitle
            }}</a>
          </div>

          <div class="abstract">{{ artitle.blog.abstract }}</div>

          <div class="action-list">
            <div class="views">{{ artitle.tools.views }}</div>
            <div class="zan">{{ artitle.tools.zans }}</div>
            <div class="comment">{{ artitle.tools.comment }}</div>
          </div>
        </div>

        <img src="~/assets/imgs/01.png" alt="alt" />
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
const a = defineProps({ artitle: Object });

console.log(a.artitle.title, a.artitle.blog, a.artitle.tools);

// @methods
</script>

<style scoped>
.content {
  padding: 12px 20px 0;
  cursor: pointer;
}
.meta-container {
  font-size: 13px;
  color: #555;
}
.content-wrapper {
  display: flex;
  padding-bottom: 12px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
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
  margin-bottom: 8px;
}

.content-wrapper .content-main .title-row .title {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1d2129;
  margin-bottom: 8px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.content-wrapper .content-main .title-row .sub-title {
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #86909c;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.content-wrapper .content-main .abstract {
  margin-bottom: 10px;
}

.content-wrapper .content-main .action-list {
  display: flex;
  align-items: center;
}
</style>
