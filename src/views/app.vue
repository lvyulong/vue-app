<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
    import authApi from 'api/authApi';
    import axios from 'axios';
    export default {
        name: "app",
        data() {
            return {
                tip: '主应用部分'
            }
        },
        created: function () {

        },
        beforeRouteEnter(to, from, next) {
            // current
            var reqArray = [
                authApi.current()
            ];
            axios.all(reqArray).then(function (res) {
                next(vm => {
                    var resArray =  {
                        key:'local',
                        val:res[0].data.data
                    };
                    vm.$store.commit('setProp',resArray);
                })
            });

        }
    };
</script>
<style lang="less" scoped>
</style>
