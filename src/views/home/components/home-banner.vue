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
      "https://img2.wallspic.com/previews/9/6/1/8/5/158169/158169-pang_ke2077-pang_ke-cai_tan_hui_ye_wu-mian_bu_biao_qing-zi_se_de-x750.jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://img2.wallspic.com/previews/0/0/4/4/6/164400/164400-garena_free_fire-shou_tao-zhu_bao-dian_lan_se_de-yin_le_yi_shu_jia-x750.jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://img3.wallspic.com/previews/6/9/1/4/6/164196/164196-yin_le_yi_shu_jia-xia_ren_de-dian_zi_wu_qu_yin_le-shi_jue_yi_shu-nocopyrightsounds-x750.jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://img3.wallspic.com/previews/9/5/9/6/6/166959/166959-xian_jing_de_yin_le-dian_zi_wu_qu_yin_le-xia_ren_de-shou_ge-yin_le_fang_zi-x750.jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://img3.wallspic.com/previews/0/7/1/8/5/158170/158170-pang_ke2077-pang_ke-zi_se_de-hong_se_de-kong_jian-x750.jpg",
    ],
  },
  {
    id: 454,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
      "https://img3.wallspic.com/previews/8/6/1/8/5/158168/158168-sai_bo_peng_ke2077nu_hai-pang_ke2077-xbox_xi_liex_he_xi_lies-you_xi-jiao_se_ban_yan_you_xi-x750.jpg",
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
    <Splide class="banner" :options="{ rewind: true, rewindByDrag: true, type: 'loop', autoplay: true }">
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
