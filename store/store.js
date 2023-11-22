//在这个js文件当中，专门创建store的实例对象
import {observable,  action } from 'mobx-miniprogram'

//按需导出store实例对象 
export const store = observable({
//数据字段
numA:1,
numB:2,
//计算属性 
get sum (){
  return this.numA +this.numB
},
//actions方法,用来修改store中的数据 
updateNum1:action(function(step){
  this.numA+=step;
}),

//step 步长值
updateNum2:action(function(step){
  this.numB+=step
})

})