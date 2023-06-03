<script setup lang="ts" name="HomeBody">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
import { type } from '@/utils/banner'
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
let { home } = useStore()
let { getHomebodyList } = home
getHomebodyList()
let { homebodyList } = storeToRefs(home)

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
    <img
      v-if="mqList > 4"
      src="https://utility-01.oss-cn-beijing.aliyuncs.com/xw_bgc_big.png"
      alt=""
    />
    <img
      v-else
      src="https://utility-01.oss-cn-beijing.aliyuncs.com/xu_bgc_s.png"
      alt=""
    />
  </div>
</template>
<style scoped lang="less">
.home-banner {
  img {
    width: 100%;
  }
}
</style>
