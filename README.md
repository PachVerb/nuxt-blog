# Nuxt 3 Blog

> nuxt 博客

## 特性

## FAQ

#### CSS 特性相关

- box-sizing 原理
- 行省略号特效细节
- display: flex 与 box 区别

  > 同作用于弹性盒模型，却别是两个版本的不同，前者是现在的写法，把部分浏览器已经兼容；box 是早期浏览器版本

- vertical-align
  > 该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值

#### js

1. 编程式导航，路由跳转 query,params 传递区别

> query 类似 get 的参数传递，注意跳转路由，需要使用 path；而 params 传递需要使用命名路由

2. 关于瀑布流滚动刷新问题
   > 目前已经处理了节流处理，对于滚动底部距离的误差。所导致页面再回滚时，也会触发刷星的问题。这里基于的方案是，正常情况，如果数据存在。就会一致在底部追加数据，倒是不会触发误差问题，因此暂时忽略此误差

#### vite 构建相关

> web Compoents 是新的复用代码标准，自定义元素标准。区别 Vue 组件。两种模式在编译时处理方式不同。在 vue 项目中，构建工具在编译时，会将非原生 html 作为 vue 组件进行编译，如果编译失败，则会作为自定义元素渲染。否则作为 vue 组件进行解析编译。

> 如果需要指定两种模式的编译区别，可以在编译工具中指定 `isCustomtElement`选项，构建工具会区别此配置下的选项。

#### Vue 相关

- 组件上 class,style 传递方式

  > 默认注册到组件上的 class,style 传递到组件的根元素上。

- 全局 prop key 的使用

> 常配和 v-for 使用；组件传递 key，如果 key 更新可以完整触发组件的生命周期.
