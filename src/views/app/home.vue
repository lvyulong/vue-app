<template>
    <div>
        <div class="banner">
            <mt-swipe :auto="0">
                <mt-swipe-item>
                    <img src="~app/assets/image/1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="~app/assets/image/2.jpg" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div>
            <menus :config="menusData"></menus>
        </div>
    </div>
</template>
<script>
    import menus from 'app/common/component/menus';
    import menusData from 'app/common/config/menus';

    export default {
        name: "home",
        data() {
            return {
                menusData: menusData
            };
        },
        methods: {
            test() {
                console.log(11)
            }
        },
        components: {
            menus
        }
    };
</script>
<style lang="less" scoped>
    .banner {
        width: 100%;
        height: 200px;
        background: #ccc;
        img {
            width: 100%;
        }
    }
</style>

