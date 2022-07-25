/*
 * @LastEditTime: 2022-07-26 02:09:36
 * @Description:
 * @Date: 2022-07-26 00:33:02
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import plist from "./mock/photo.json";
export default defineEventHandler((e) => {
  const { page, size } = useQuery(e);
  console.log(page, size);
  const list = JSON.parse(JSON.stringify(plist.data));
  const rest = list.slice(page);
  const isEnoughRest = rest.length > size;
  return {
    status: true,
    code: 200,
    data: {
      total: 65,
      list: isEnoughRest ? list.splice(page, size) : rest,
    },
  };
});
