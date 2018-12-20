<template>
    <div class="login">
        <div class="loading">
            <img src="~image/loading.gif" alt="">
        </div>
    </div>
</template>
<script>
    import authApi from 'api/authApi';
    export default {
        name: "login",
        data() {
            return {};
        },
        methods: {
            // 请求后端的pre接口，后端返回一个去微信认证的url，跳转到该url进行微信认证
            // 认证完成之后会回跳到currentUrl（currentUrl是传给后端的参数，告诉后端微信认证完成之后回跳到哪儿）
            // 回跳回来时，后端会在currentUrl后面拼一个"?key=xxxxx";
            // 在created钩子中，判断是否有key，如果有key则login
            loginPre() {
                var currentUrl = location.href.split('#')[0] + '#/login';
                authApi.pre({
                    data: {
                        url: currentUrl
                    }
                }).then(function (res) {
                    var url = myTool.getProp(res, 'data.url');
                    if (url) {
                        location.href = url;
                    }
                });
            }
        },
        created: function () {
            // 如果有key，说明是微信认证完成回跳回来的，可以直接用key进行login
            // 如果没有key，则认为是第一次进入该页面，先进行微信认证（loginPre）
            var that = this;
            var key = this.$route.query && this.$route.query.key;
            if (key) {
                authApi.login({data: {key: key}}).then(function (res) {
                    that.$router.push({name: 'appHome'});
                }, function (err) {
                    // 如果登陆失败，则认为该key不合法或者已经失效，需要重新进行微信认证（loginPre）
                    that.loginPre();
                })
            } else {
                that.loginPre();
            }
        }
    };
</script>
<style lang="less" scoped>
    .login {
        position: relative;
        height: 100vh;
        .loading {
            position: absolute;
            top: 30%;
            left: 50%;
            margin-left: -3rem;
            img {
                width: 6rem;
            }
        }
    }
</style>
