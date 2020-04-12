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
    },
    {
      path: '/tsfx/index',
      redirect: '/tsfx/index/tl',  // 默认跳转到 停留页面
      component: () => import('./components/tsfx/index'),
      children: [{
        path: '/tsfx/index/:type',
        component: () => import('./components/tsfx/components/common')
      }]
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
