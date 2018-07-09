<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
   
    };
  },
  methods: {

  },
  components: {
 
  },
  beforeRouteEnter: (to, from, next) => {
    next();
  }
};
</script>
<style lang="less" scoped>

</style>

