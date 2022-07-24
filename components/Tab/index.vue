<!--
 * @LastEditTime: 2022-07-24 23:58:28
 * @Description: 
 * @Date: 2022-07-24 17:50:37
 * @Author: wangshan
 * @LastEditors: wangshan
-->
<!-- <template>
  <div class="tab-wrap">
    <div class="tab-list"></div>
    <div class="tab-content"></div>
  </div>
</template> -->
<script>
export default defineComponent({
  render() {
    console.log(this.$slot.default());
    return h(
      "div",
      {
        class: "tab-wrap",
      },
      [
        h("div", {
          class: "tab-list",
        }),
        h(
          "div",
          {
            class: "tab-content",
          },
          [this.$slot.default()]
        ),
      ]
    );
  },
  props: {},
});
</script>
