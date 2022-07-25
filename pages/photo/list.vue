<!--
 * @LastEditTime: 2022-07-25 18:43:08
 * @Description: 
 * @Date: 2022-07-25 07:32:51
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="photo-list">
    <WaterFall @wscroll="handleScroll">
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637917972588-9925c58e5a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637930563495-fafd99a5d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637921883373-cd8807a6bf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637917972588-9925c58e5a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://img0.baidu.com/it/u=486075898,4151694835&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313"
          alt="1111"
        />
      </div>
      <div class="item">
        <img
          src="https://img1.baidu.com/it/u=4243898418,2159441620&fm=253&fmt=auto&app=120&f=PNG?w=583&h=386"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://img2.baidu.com/it/u=1045391632,3885691369&fm=253&fmt=auto&app=138&f=JPG?w=500&h=889"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://img0.baidu.com/it/u=310302116,81759093&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637928114342-05b15ee4034e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637928148681-f187292003a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637930563495-fafd99a5d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637921883373-cd8807a6bf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637883705440-217a7790028a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637928114342-05b15ee4034e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637928148681-f187292003a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637930563495-fafd99a5d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637921883373-cd8807a6bf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637883705440-217a7790028a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637928114342-05b15ee4034e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637928148681-f187292003a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637930563495-fafd99a5d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637921883373-cd8807a6bf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637883705440-217a7790028a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637928114342-05b15ee4034e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div class="item">
        <img
          src="https://images.unsplash.com/photo-1637928148681-f187292003a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </WaterFall>
  </div>
</template>
<script setup>
function handleScroll(e) {
  console.log("滚动到底了", e);
}
</script>
<style scoped>
.photo-list {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
}
.photo-list .queue {
  display: flex;
  flex-direction: column;
  margin: 0 0.5vw;
  flex-basis: calc(100% / 4);
}
.photo-list .item {
  position: relative;
  width: 100%;
  margin: 0.5vw 0;
}
.photo-list img {
  width: 100%;
}
</style>
