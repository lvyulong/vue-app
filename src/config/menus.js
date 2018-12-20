import icon1 from 'image/1.png';
import icon2 from 'image/2.png';
import icon3 from 'image/3.png';
import icon4 from 'image/4.png';
/*
* 定义跳转的形式有三种：(三种任选其一，不能同时存在)
1、route对象: 系统内路由切换，可以定义params或者query属性，则用此方法，更加灵活
2、routeName：系统内路由切换，如果不用定义params或者query等其他属性，则用此方法，方便快捷
3、link：跳转到系统外的链接
*
* */


export default [
    {
        icon:icon1,
        label:'模块一',
        routeName:'appDemoIndex'
    },
    {
        icon:icon2,
        label:'模块二',
        route:{
            name:'appDemoIndex',
            query:{
                test_id:1
            }
        },
    },

    {
        icon:icon4,
        label:'模块三',
        route:{
            name:'appDemoDetail',
            params:{
                id:1
            }
        },
    },

    {
        icon:icon3,
        label:'百度',
        link:'https://www.baidu.com/'
    },

]