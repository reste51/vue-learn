import Vue from 'vue'
import Layout from './components/Layout'
import IndexPage from './pages/IndexPage'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 声明一个 router 实例
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  components: {
    Layout
  },
  render: h => h(Layout)
}).$mount('#layout')
