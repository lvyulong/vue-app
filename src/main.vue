<template>
    <div>
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: "App",
        data() {
            return {};
        },
        mounted () {
            // 检测浏览器路由改变页面不刷新问题,hash模式的工作原理是hashchange事件
            window.addEventListener('hashchange', () => {
                let currentPath = window.location.hash.slice(1);
                if (this.$route.path !== currentPath) {
                    this.$router.push(currentPath)
                }
            }, false)
        },
        beforeRouteEnter: (to, from, next) => {
            next();
        }
    };
</script>
<style lang="less" scoped>

</style>

