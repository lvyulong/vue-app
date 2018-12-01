import Vue from 'vue';
import myRadio from'component/myRadio';
import btn from'component/btn';
import propMap from'filter/propMap';
import keyToVal from'filter/keyToVal';

// 组件
const config = {
    component: [
        {name:'myRadio',component:myRadio},
        {name:'btn',component:btn},
    ],

    directive: [

    ],

    filter: [
        {name:'propMap',filter:propMap},
        {name:'keyToVal',filter:keyToVal},
    ]
};

// 自执行函数上面代码的分号不能省
((config) => {
    for(let k in config){
        config[k].map((val,key) => {

            Vue[k](val.name,val[k])

        })
    }
})(config);
