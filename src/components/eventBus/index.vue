<template>
  <div>
    <span @click="updateStore">这是 eventBus首页</span>
    <como></como>
    <comt></comt>
  </div>
</template>

<script>
import como from './com1_1'
import comt from './com2_2'
export default {
  components: {
    como,
    comt
  },
  mounted() {
    // 输出 vuex 相关数据
    console.log(this.$store)
    // 通过 getters 来获取  store 的数据
    console.log(this.$store.getters.getParam)
    console.log(this.$store.getters.getUser)
  },
  methods: {
    updateStore() {
      //同步修改, 通过 $store的commit函数调用mutations的相应方法,   函数名, 新值
      this.$store.commit('updateUser', { name: '路由图', age: 12 })

      console.log(this.$store.getters.getUser)
    }
  }
}
</script>

<style scoped></style>
