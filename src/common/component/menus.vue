<template>
  <div>
    <div class="weui-grids">
        <span class="weui-grid" 
              @click="linkTo(menuItem)"
              v-for="menuItem in config">
            <div class="weui-grid__icon">
                <img :src="menuItem.icon" alt="">
            </div>
            <p class="weui-grid__label">
                {{menuItem.label}}
            </p>
        </span>
  
      </div>
  </div>
</template>
<script>
export default {
  name: "menus",
  props: ["config"],
  data() {
    return {};
  },
  methods:{
      linkTo(item){
          this.$router.push({name:item.link})
      }
  }
};
</script>
<style lang="less" scoped>
.weui-grid__icon {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}
</style>
