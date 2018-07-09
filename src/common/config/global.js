import Vue from 'vue';


// 组件
const config = {
  component: [
 
  ],

  directive: [

  ],

  filter: [

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
