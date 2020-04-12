<template>
  <div>
    <ul>
      <router-link v-for="(item,index) in itemArr"
                   :key="index"
                   :to="item.url"
                   tag="li">{{item.name}} </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemArr: [
        { name: '停留我省', url: '/tsfx/index/tl' },
        { name: '进入我省', url: '/tsfx/index/sn' },
        { name: '离开我省', url: '/tsfx/index/sw' }
      ]

    }
  }
}
</script>

<style>
</style>