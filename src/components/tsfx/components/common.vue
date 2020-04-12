<template>
  <div>
    <h2 class="red-font"> 当前页面为： {{currentType}}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    currentType () {
      return this.$route.params.type;
    }
  }
}
</script>

<style scoped>
.red-font {
  color: chocolate;
}
</style>