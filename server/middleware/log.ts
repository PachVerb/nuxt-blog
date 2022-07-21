/*
 * @LastEditTime: 2022-07-21 22:59:50
 * @Description: 请求中间件
 * @Date: 2022-07-21 22:53:37
 * @Author: wangshan
 * @LastEditors: wangshan
 */

// 中间件拦截所有请求
export default defineEventHandler((event) => {
  console.log("New request: " + event.req.url);
});
