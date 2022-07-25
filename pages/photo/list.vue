<!--
 * @LastEditTime: 2022-07-26 00:30:20
 * @Description: 
 * @Date: 2022-07-25 07:32:51
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<template>
  <div class="photo-list">
    <WaterFall @wscroll="handleScroll">
      <Card size="small" class="control">
        <div class="item">
          <img
            src="https://images.unsplash.com/photo-1637917972588-9925c58e5a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <div class="menu-card">
          <div class="menu-inner">
            <p>
              我们已经说完了这三种方案，其实绝大部分的商业级都是js实现的瀑布流，比如isotope等插件。本质实现起来并不麻烦，我们有时间可以自己封装一套，在vue上怎么用，在react上怎么用，怎么过滤，怎么通过用关键词去排序改变顺序等等，都可以考虑进去。算是比较常见功能所以自己试试看也没坏处，自己动手丰衣足食么~
              作者
            </p>
            <Button class="view">查看</Button>
          </div>
        </div>
      </Card>

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
  max-width: 1030px;
  margin: 0 auto;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
}
.photo-list .item {
  position: relative;
  width: 100%;
}
.photo-list img {
  width: 100%;
}
.control {
  position: relative;
}
.menu-card {
  position: absolute;
  left: 0;
  bottom: 0;
  display: none;
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  /* -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both; */
  -webkit-animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.menu-card .menu-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.menu-card .menu-inner p {
  color: #f2f3f3;
  text-align: center;
}
.menu-card .menu-inner .view {
  margin-top: 24px;
}
.control:hover .menu-card {
  background: rgba(9, 186, 230, 0.757);
  display: block;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
