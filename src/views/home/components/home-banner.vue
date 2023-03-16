<script lang="ts" setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref, nextTick } from "vue";
import { TBanner } from "@/types/cate";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Listcar from "./listcar.vue";
import { type } from "@/utils/banner";
let mqList = ref(3);
let data = ref();
data.value = [
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1023%2F1090b092j00r1fj3n0004d2009c009cg009c009c.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://img.zcool.cn/community/01c2ff62145f9c11013e8cd0962dd3.jpg@1280w_1l_2o_100sh.jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://img.zcool.cn/community/0100c362145f9b11013e8cd055e8c1.jpg@1280w_1l_2o_100sh.jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://pic3.zhimg.com/v2-2c6a2bd598dd9a88b59f866be68e431e_r.jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://pic3.zhimg.com/v2-85e13cd852d0dcd19997b4ad92015516_r.jpg",
    ],
  },
]

const getWindowInfo = () => {
  mqList.value = window.matchMedia("(max-width: 1600px)").matches ? 2 : 3;
  if (mqList.value == 2) {
    mqList.value = window.matchMedia("(max-width: 1280px)").matches ? 1 : 2;
  }
};
window.addEventListener("resize", getWindowInfo);
getWindowInfo();

</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <Splide class="banner" :options="{ rewind: false }">
      <SplideSlide class="bannerstree" v-if="!data">
        <Listcar :num="0" :type="mqList" :data="[]"></Listcar>
      </SplideSlide>
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
  left: -12px;
}

::v-deep .splide__arrow--next {
  right: -12px;
}

::v-deep .splide__arrow {
  background-color: #fff;
  height: 42px;
  width: 42px;

  svg {
    fill: rgba(28, 90, 184, 1);
    height: 25px;
    width: 25px;
  }
}
</style>
