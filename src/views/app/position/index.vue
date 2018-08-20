<template>
    <div>
        <mt-header title="调查问卷">
            <div slot="left">
                <mt-button icon="back">
                    <router-link :to="{name:'appHome'}" class="white">返回</router-link>
                </mt-button>
                <!-- <mt-button @click="handleClose">关闭</mt-button> -->
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="broadcast">
            <ul>
                <li v-for="item in list">
                    <mt-cell-swipe
                            :title="item.name"
                            :right="cellConfig">
                    </mt-cell-swipe>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>
    import testApi from "app/common/resource/api/testApi";

    export default {
        name: "appUserIndex",
        data() {
            return {
                allLoaded: false,
                list: [],
                cellConfig: [
                    {
                        content: "Delete",
                        style: {background: "red", color: "#fff"},
                        handler: item => {
                            console.log(item);
                            this.$messagebox("delete");
                        }
                    }
                ]
            };
        },
        methods: {
            loadBottom: function (id) {
                this.allLoaded = true;// 若数据已全部获取完毕
            }
        },
        created: function () {
        },
        beforeRouteEnter(to, from, next) {
            testApi.query({params: {page: 1}}).then(function (res) {
                next(vm => {
                    vm.list = res.data.items;
                });
            }).catch(function (err) {

            });
        }
    };
</script>
<style lang="less" scoped>
</style>

