<template>
  <div>
    这是 comp2 2222组件
  </div>
</template>

<script>
import { eventBus } from '../../eventBus'
export default {
  mounted() {
    eventBus.$on('comClick', () => {
      alert(' component 1 is clicked  from com 2')
    })
  }
}
</script>

<style scoped></style>
