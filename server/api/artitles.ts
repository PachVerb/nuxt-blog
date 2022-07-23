/*
 * @LastEditTime: 2022-07-22 00:38:20
 * @Description:
 * @Date: 2022-07-20 23:41:36
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import blogs from "./mock/blogs.json";

export default defineEventHandler((event) => {
  return blogs;
});
