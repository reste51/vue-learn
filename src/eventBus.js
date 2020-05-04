import Vue from 'vue'

/*
 定义一个事件总线,  提供 发布$emit()、订阅$on 、取消$off 的事件处理对象 
*/
const eventBus = new Vue()

// 导出一个声明的对象
export { eventBus }
