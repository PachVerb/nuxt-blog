/*
 * @LastEditTime: 2022-07-25 20:06:27
 * @Description: js + absolute方案实现瀑布流
 * @Date: 2022-07-25 09:05:28
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export default class Waterfall {
  constructor(options) {
    this.$el = null; // 父容器
    this.count = 4; // 列数
    this.gap = 10; // 间距
    Object.assign(this, options);
    this.width = 0; // 列的宽度
    this.items = []; // 子元素集合
    this.H = []; // 存储每列的高度方便计算
    this.flag = null; // 虚拟节点集合
    this.init();
  }
  init() {
    console.log(this.$el.children, "2222");
    this.items = Array.from(this.$el.children);
    this.reset();
    this.render();
  }
  reset() {
    this.flag = document.createDocumentFragment();
    this.width = this.$el.clientWidth / this.count;
    this.H = new Array(this.count).fill(0);
    this.$el.innerHTML = "";
  }

  render() {
    const { width, items, flag, H, gap } = this;
    items.forEach((item) => {
      item.style.width = width + "px";
      item.style.position = "absolute";
      let img = item.querySelector("img");
      if (img.complete) {
        //判断图片是否加载完成
        let tag = H.indexOf(Math.min(...H));
        item.style.left = tag * (width + gap) + "px";
        item.style.top = H[tag] + "px";
        H[tag] += (img.height * width) / img.width + gap;
        flag.appendChild(item);
        setTimeout(() => {
          let minHeight = Math.max(...H);
          this.$el.style.minHeight = minHeight + "px";
        }, 500);
      } else {
        // 监听图片加载
        img.addEventListener("load", () => {
          let tag = H.indexOf(Math.min(...H));

          item.style.left = tag * (width + gap) + "px";
          item.style.top = H[tag] + "px";
          H[tag] += (img.height * width) / img.width + gap;
          flag.appendChild(item);
          this.$el.append(flag);
          setTimeout(() => {
            let minHeight = Math.max(...H);
            this.$el.style.minHeight = minHeight + "px";
          }, 500);
        });
      }
    });
    this.$el.append(flag);
  }
}

export function throttle(fn, threshhold = 200) {
  let timeout;
  // 计算开始时间
  let start = new Date();
  return function () {
    // 触发时间
    const current = new Date() - 0;
    timeout && clearTimeout(timeout);
    // 如果到了时间间隔点，就执行一次回调
    if (current - start >= threshhold) {
      fn.call(this, ...arguments);
      // 更新开始时间
      start = current;
    } else {
      // 保证方法在脱离事件以后还会执行一次
      timeout = setTimeout(fn.bind(this), threshhold, ...arguments);
    }
  };
}
