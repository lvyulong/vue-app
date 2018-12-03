// (第三方)库
import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import underscore from 'underscore';
import 'app/assets/style/main.less';
import 'font-awesome/less/font-awesome.less';
import 'weui';
// 自定义文件
import main from 'app/main.vue';
import routes from 'config/route';

import storeConfig from 'app/common/store/index';
import myTool from 'app/common/myTool/index';
import 'config/global';

window.global_data = {
    //除非需要写死域名的地方才会用到，否则需用location.origin动态获取
    domain: {
        // dev: 'http://xxx.xxx.xxx.com',
        // prod: 'http://xxx.xxx.xxx.com',
    },
    // devIp: '10.21.109.77'
};
if (location.hostname === 'localhost' || location.hostname === global_data.devIp) {
    global_data.isDev = 1;
}
window.myTool = myTool;
window._ = underscore;
// 使用插件
Vue.use(Router);
Vue.use(MintUI);
Vue.use(Vuex);
// vuex状态
const store = new Vuex.Store(storeConfig);
// 路由
const router = new Router({routes});
// 挂载dom
const root = document.createElement('div');
document.body.appendChild(root);
const vm = new Vue({
    render: (h) => {
        return h(main)
    },
    router,
    store
});
vm.$mount(root);
// 将vue实例绑定到全局，方便使用其属性
window.vm = vm;
export default vm;
