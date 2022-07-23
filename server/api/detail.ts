/*
 * @LastEditTime: 2022-07-24 01:04:47
 * @Description:
 * @Date: 2022-07-21 22:52:10
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import detail from "./mock/detail.json";
export default defineEventHandler((event) => {
  return {
    content:
      '<h3>优势</h3><p style="text-align: start;">网络搜索“Web 富文本编辑器”你会得到很多结果，例如国内的 UEditor kindEditor ，国外的 CKEditor TinyMCE Quill ProseMirror Draft Slate 等等。也有很多人使用这些编辑器，或者来做二次开发。</p><p style="text-align: start;">但他们都存在下面几个问题（敲黑板～），这可能会大大影响你的<strong>开发效率、开发成本和产品稳定性</strong>。</p><p style="text-align: start;"><br></p><h3 style="text-align: start;">技术陈旧</h3><p style="text-align: start;">如 UEditor KindEditor ，依然使用 <span style="color: var(--c-text-lighter); background-color: var(--c-bg-light);"><code>document.execCommand</code></span> API 。这将大大影响产品的稳定性、扩展性。</p><p style="text-align: start;">到时候啥啥都实现不了，哪儿哪儿都有问题，会被 PM 鄙视：“人家 xxx 咋能行？”</p><h3 style="text-align: start;">需要大量二次开发</h3><p style="text-align: start;">如 ProseMirror Draft Slate ，他们虽然也是富文本编辑器，但他们仅仅是一个 core 或者 controller ，并不是一个完整的功能。</p><p style="text-align: start;">大量的二次开发，不仅仅会导致研发成本大增（本月封闭～），还可能因为测试不完善而出现无尽的 bug ，陷入泥潭。</p><p style="text-align: start;">PS：除非你们有强烈的定制开发需要</p><h3 style="text-align: start;">有约束的框架</h3><p style="text-align: start;">如 Slate 和 Draft ，是依赖于 React 框架的。如果你想用到 Vue 中，工作量和难度是非常大的。</p><h3 style="text-align: start;">新版本的约定</h3><h3 style="text-align: start;"><a href="https://www.wangeditor.com/v5/#%E6%97%A0%E5%AE%98%E6%96%B9-react-vue-%E7%AD%89%E7%BB%84%E4%BB%B6" target=""><span style="color: rgb(0, 0, 0); background-color: rgb(250, 250, 250); font-size: 14px;">上述列出来的编辑器，都是比较成熟的产品，用户量较大。你可能还会搜到其他产品，如新开发的、用户量不大的。<br>无论如何，请你慎重选择，因为富文本编辑器的坑真的太多了，需要经过大量的测试、使用才会慢慢稳定。</span></a></h3><h3 style="text-align: start;"></h3><h4>选择稳定的产品，参考</h4><ul style="text-align: start;"><li>github stars</li><li>npm 下载量</li><li>npm 发布时间和频率</li><li>搜索引擎的相关结果数量</li><li>是否有大厂背书</li><li>是否有单元测试 / e2e 测试</li></ul><p style="text-align: start;"><a href="https://www.wangeditor.com/v5/#%E4%B8%AD%E6%96%87%E4%B8%8D%E5%8F%8B%E5%A5%BD" target=""><br></a></p><h3 style="text-align: start;"><a href="https://www.wangeditor.com/v5/#%E6%8A%80%E6%9C%AF%E8%80%81%E6%97%A7" target=""><br></a></h3><p><br></p><p><br></p>',
  };
});
