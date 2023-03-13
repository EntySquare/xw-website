<script lang="ts" setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref } from "vue";
import { TBanner } from "@/types/cate";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Listcar from "./listcar.vue";
import { type } from "@/utils/banner";
let mqList = ref(3);
const getWindowInfo = () => {
  mqList.value = window.matchMedia("(max-width: 1280px)").matches ? 2 : 3;
  if (mqList.value == 2) {
    mqList.value = window.matchMedia("(max-width: 845px)").matches ? 1 : 2;
  }
};
window.addEventListener("resize", getWindowInfo);
getWindowInfo();
const data: TBanner[] = [
  {
    id: 242,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://pbs.twimg.com/profile_images/1581797177801773058/_ZizVWFW_400x400.jpg",
    ],
  },
  {
    id: 242,
    collect: 0,
    name: "Crypto Citizens",
    lowest_price: "2W",
    countdown: 12323,
    img: [
      "https://pbs.twimg.com/profile_images/1581797177801773058/_ZizVWFW_400x400.jpg",
    ],
  },
  {
    id: 242,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "3W",
    countdown: 12323,
    img: [
      "https://pbs.twimg.com/profile_images/1581797177801773058/_ZizVWFW_400x400.jpg",
    ],
  },
  {
    id: 242,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "4W",
    countdown: 12323,
    img: [
      "https://pbs.twimg.com/profile_images/1581797177801773058/_ZizVWFW_400x400.jpg",
    ],
  },
];
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <Splide class="banner" :options="{ rewind: false }">
      <SplideSlide class="bannerstree" v-for="i in type(mqList, data.length)">
        <Listcar :num="i" :type="mqList" :data="data"></Listcar>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  // width: 100%;
  padding: 53px 0px 64px;

  .banner {
    width: 100%;
  }
}

::v-deep .splide__pagination {
  display: none;
}

::v-deep .splide__arrow--prev {
  left: -10px;
}

::v-deep .splide__arrow--next {
  right: -10px;
}

::v-deep .splide__arrow {
  background-color: #fff;
  height: 47px;
  width: 47px;

  svg {
    fill: rgba(28, 90, 184, 1);
    height: 25px;
    width: 25px;
  }
}
</style>
