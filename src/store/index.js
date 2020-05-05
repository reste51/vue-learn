import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 导入 store的模型
import orderList from './model/orderList'

export default new Vuex.Store({
  modules: {
    orderList
  }
})
