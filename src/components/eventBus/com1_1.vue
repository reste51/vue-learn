<template>
  <div @click="fbEvent">
    这是 comp1 1111111组件
  </div>
</template>

<script>
import { eventBus } from '../../eventBus'
export default {
  methods: {
    // 发布一个事件
    fbEvent() {
      eventBus.$emit('comClick')

      console.log(
        `输出 新修改的 store值 ${this.$store.getters.getUser.name} : ${this.$store.getters.getUser.age}`
      )
    }
  }
}
</script>

<style scoped></style>
