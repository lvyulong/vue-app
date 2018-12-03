import register from 'app/common/register';
// -----------------------------------------------------
import myRadio from'component/myRadio';
import btn from'component/btn';
import propMap from'filter/propMap';
import keyToVal from'filter/keyToVal';
// -----------------------------------------------------

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
register(config);
