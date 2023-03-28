<script lang="ts" setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref, nextTick, onBeforeUnmount } from "vue";
import { TBanner } from "@/types/cate";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Listcar from "./banner-listcar.vue";
import { type } from "@/utils/banner";
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
let { home } = useStore()
let { getBannerList } = home
getBannerList()
let { bannerList } = storeToRefs(home)
let mqList = ref(3);
const getWindowInfo = () => {
  mqList.value = window.matchMedia("(max-width: 1600px)").matches ? 2 : 3;
  if (mqList.value == 2) {
    mqList.value = window.matchMedia("(max-width: 1280px)").matches ? 1 : 2;
  }
};
window.addEventListener("resize", getWindowInfo);
getWindowInfo();
onBeforeUnmount(() => {
  window.removeEventListener('resize', getWindowInfo);
})

let splidId = ref(0)
// console.log('bannerList:', bannerList)
function onMove(newIndex: any, prevIndex: any) {
  splidId.value = prevIndex * mqList.value
  // console.log('splidId.value:', splidId.value)
}
</script>
<template>
  <div class="home-banner">
    <div class="selector" :style="{ 'background-image': 'url(' + `${bannerList[splidId]?.img[0]}` + ')' }"></div>
    <!-- 轮播图 -->
    <Splide @splide:move="onMove" class="banner"
      :options="{ rewind: true, rewindByDrag: true, type: 'loop', autoplay: true }">
      <SplideSlide class="bannerstree" v-if="!bannerList[0]">
        <Listcar :num="0" :type="mqList" :data="[]"></Listcar>
      </SplideSlide>
      <SplideSlide class="bannerstree" v-for="i in type(mqList, bannerList?.length)">
        <Listcar :num="i" :type="mqList" :data="bannerList"></Listcar>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 98vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  .selector {
    position: absolute;
    top: -85px;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    // z-index: 49589789;
    height: 24vw;
    /* 添加毛玻璃效果 */
    filter: blur(100px);
    /* 可选：添加透明度效果 */
    opacity: 0.8;
    background-size: cover;
    background-position: center;
  }


  // width: 100%;
  padding: 53px 0px 64px;

  .banner {
    width: 100%;

    &:hover {
      ::v-deep .splide__arrow {
        background-color: #fff;
        opacity: 1;
      }

    }
  }


}

::v-deep .splide__pagination {
  display: none;
}

::v-deep .splide__arrow--prev {
  left: -15px;
}

::v-deep .splide__arrow--next {
  right: -15px;
}

::v-deep .splide__arrow {
  transition: all .3s;
  opacity: 0;
  height: 42px;
  width: 42px;
  background-color: #fff;

  svg {
    fill: rgba(28, 90, 184, 1);
    height: 25px;
    width: 25px;
  }
}
</style>
