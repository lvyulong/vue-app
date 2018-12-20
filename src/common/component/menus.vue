<template>
  <div>
    <div>
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
          // 跳到系统外的某个链接
          if(item.link){
            location.href = item.link;
            return;
          }
          // 系统内路由切换
          if(item.routeName){
              this.$router.push({name:item.routeName});
              return;
          }
          if(item.route){
              this.$router.push(item.route);
              return;
          }
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
