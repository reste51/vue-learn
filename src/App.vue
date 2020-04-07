<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <layout></layout>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import Layout from './components/Layout'
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

export default {
  name: 'App',
  components: {
    // HelloWorld
    Layout
  },
  router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
