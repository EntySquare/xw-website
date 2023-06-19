<script setup lang="ts" name="HomeBody">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
// import useStore from '@/store/index'
// import { storeToRefs } from 'pinia'
// let { home } = useStore()
// let { getHomebodyList } = home
// getHomebodyList()
// let { homebodyList } = storeToRefs(home)

let mqList = ref(0)
const getWindowInfo = () => {
  mqList.value = window.matchMedia('(max-width: 1600px)').matches ? 5 : 6
  if (mqList.value == 5) {
    mqList.value = window.matchMedia('(max-width: 1280px)').matches ? 4 : 5
    if (mqList.value == 4) {
      mqList.value = window.matchMedia('(max-width: 1024px)').matches ? 3 : 4
      if (mqList.value == 3) {
        mqList.value = window.matchMedia('(max-width: 768px)').matches ? 2 : 3
      }
    }
  }
  console.log('mqList.value:', mqList.value)
}
getWindowInfo()
window.addEventListener('resize', getWindowInfo)
//https://utility-01.oss-cn-beijing.aliyuncs.com/xu_bgc_s.png
//https://utility-01.oss-cn-beijing.aliyuncs.com/xw_bgc_big.png
</script>
<script lang="ts">
export default {
  name: 'HomeBody'
}
</script>
<template>
  <div class="home-banner">
    <div class="widescreen_image" v-if="mqList > 4">
    </div>
    <div class="small_screen_image" v-else></div>
  </div>
</template>
<style scoped lang="less">
.home-banner {
  .widescreen_image {
    width: 100%;
    height: 100vh;
    background-image: url('https://utility-01.oss-cn-beijing.aliyuncs.com/xw_bgc_big.png');
    background-size: cover;
    background-position: center;
    // position: relative;
    top: 0;
    left: 0;
  }

  .small_screen_image {
    width: 100%;
    height: 100vh;
    background-image: url('https://utility-01.oss-cn-beijing.aliyuncs.com/xu_bgc_s.png');
    background-size: cover;
    background-position: center;
    // position: relative;
    top: 0;
    left: 0;
  }
}
</style>
