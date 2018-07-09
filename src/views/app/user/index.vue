<template>
  <div>
      <div class="banner">
        <mt-swipe :auto="0">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </div>
      <div>
        <mt-cell-swipe
          title="标题文字"
          :right="cellSwipeConfig">
        </mt-cell-swipe>
      </div>
  </div>
</template>

<script>
export default {
  name: "appUserIndex",
  data() {
    return {
      cellSwipeConfig: [
        {
          content: "添加",
          style: { background: "blue", color: "#fff" },
          handler: () => this.$messagebox("delete")
        },
        {
          content: "删除",
          style: { background: "red", color: "#fff" },
          handler: () => this.$messagebox("delete")
        }
      ]
    };
  },
  created: function() {
    console.log(11)
  }
};
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 200px;
  background: #ccc;
}
</style>

