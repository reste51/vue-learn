<template>
  <div class="slide-show"
       @mouseover="clearInterval()"
       @mouseout="runInterval()">
    <div class="slide-img">
      <a :href="slides[currentIndex].href"> <img :src="slides[currentIndex].src"></a>
    </div>
    <h2>{{slides[currentIndex].title}}</h2>
    <ul class="slide-pages">
      <!-- 前一页 -->
      <li @click="changeIndex(currentIndex-1)">&lt;</li>
      <!-- 具体的页码 -->
      <li v-for="(item,index) of slides"
          :key="index">
        <a :class="{'on': currentIndex===index }"
           @click="changeIndex(index)">{{index + 1}}</a>
      </li>
      <!-- 下一页 -->
      <li @click="changeIndex(currentIndex+1)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 初始化 显示第一张
      currentIndex: 0,
      // 记录定时器的id
      intervalId: ''
    }
  },
  props: {
    slides: {
      default: () => [],
      type: Array
    },
    // 自动切换动画的 间隔
    intervalTime: {
      type: Number,
      default: 1000
    }
  },
  mounted () {
    console.log(this.slides)
    // 默认执行 自动切换
    this.runInterval()
  },
  methods: {
    // 鼠标移入屏幕, 清除自动切换
    clearInterval () {
      console.log(222222222)
      clearInterval(this.intervalId)
    },
    // 切换 当前索引值
    changeIndex (newIndex) {
      console.log('new index --> ' + newIndex)
      //边界处理_ 设置从头到尾的  循环分页切换
      if (newIndex < 0) newIndex = this.slides.length - 1
      if (newIndex > this.slides.length - 1) newIndex = 0

      this.currentIndex = newIndex
    },
    // 自动切换图片
    runInterval () {
      console.log(11111111111)
      this.intervalId = setInterval(() => this.changeIndex(this.currentIndex + 1), this.intervalTime)
    }
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 0.5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: 0.5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
