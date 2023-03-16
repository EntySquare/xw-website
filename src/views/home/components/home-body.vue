<script setup lang='ts'>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref } from "vue";
import { TBanner } from "@/types/cate";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Listcar from "./body-listcar.vue";
import { type } from "@/utils/banner";
let mqList = ref(3);
const getWindowInfo = () => {
    mqList.value = window.matchMedia("(max-width: 1600px)").matches ? 5 : 6;
    if (mqList.value == 5) {
        mqList.value = window.matchMedia("(max-width: 1280px)").matches ? 4 : 5;
        if (mqList.value == 4) {
            mqList.value = window.matchMedia("(max-width: 1024px)").matches ? 3 : 4;
            if (mqList.value == 3) {
                mqList.value = window.matchMedia("(max-width: 768px)").matches ? 2 : 3;
            }
        }
    }
};






// https://pic4.zhimg.com/80/v2-80d6ebd2e2f5f6c980b3a22aeca06a9b_720w.webp
// https://pic3.zhimg.com/80/v2-6d0c77e8cc42048d73f6f7f0b4c23426_720w.webp
// https://pic2.zhimg.com/80/v2-8debb400ce45c6e81a8b2bd1e5a53625_720w.webp
// https://pic3.zhimg.com/80/v2-c1d657aaa7842e8d99e5b7403d8912f6_720w.webp
window.addEventListener("resize", getWindowInfo);
getWindowInfo();
const data: TBanner[] = [
    {
        id: 23,
        collect: 1,
        name: "Crypto Citizens",
        lowest_price: "1W",
        countdown: 12323,
        img: [
            "https://pic4.zhimg.com/80/v2-9d30314c4e59d98a183f9b80247fbae3_720w.webp",
        ],
    },
    {
        id: 343,
        collect: 1,
        name: "Crypto Citizens",
        lowest_price: "1W",
        countdown: 12323,
        img: [
            "https://pic1.zhimg.com/80/v2-6861bbbf235b9410cf18f2a8744b9988_720w.webp",
        ],
    },
    {
        id: 656,
        collect: 0,
        name: "Crypto Citizens",
        lowest_price: "2W",
        countdown: 12323,
        img: [
            "https://pic1.zhimg.com/80/v2-9592edbf76d825ccbc97b410a0029e04_720w.webp",
        ],
    },
    {
        id: 74,
        collect: 1,
        name: "Crypto Citizens",
        lowest_price: "3W",
        countdown: 12323,
        img: [
            "https://pic3.zhimg.com/80/v2-db1ce32f3362ab9ed48b93cf999a8bba_720w.webp",
        ],
    },
    {
        id: 256,
        collect: 1,
        name: "Crypto Citizens",
        lowest_price: "4W",
        countdown: 12323,
        img: [
            "https://pic4.zhimg.com/80/v2-11afbf42542c5bb7b3f3c98eeac8c5d3_720w.webp",
        ],
    },
    {
        id: 7543,
        collect: 1,
        name: "Crypto Citizens",
        lowest_price: "3W",
        countdown: 12323,
        img: [
            "https://pic2.zhimg.com/80/v2-52075cb4d04817fc904c4dfc67b90f25_720w.webp",
        ],
    },
    {
        id: 34985,
        collect: 1,
        name: "Crypto Citizens",
        lowest_price: "4W",
        countdown: 12323,
        img: [
            "https://pic2.zhimg.com/80/v2-ea5e9a1029ab8091fe8b48efa9dbcdf9_720w.webp",
        ],
    },
];
</script>
<template>
    <div class="home-banner">
        <!-- 轮播图 -->
        <div style="padding-bottom: 10px;">
            <a-typography-title :heading="3" style="padding:20px 20px 10px;"> 值得一看</a-typography-title>
            <Splide class="banner" :options="{ rewind: false }">
                <SplideSlide class="bannerstree" v-for="i in type(mqList, data.length)">
                    <Listcar :num="i" :type="mqList" :data="data"></Listcar>
                </SplideSlide>
            </Splide>
        </div>
        <div style="padding-bottom: 10px;">
            <a-typography-title :heading="3" style="padding:20px 20px 10px;"> 类别1</a-typography-title>
            <Splide class="banner" :options="{ rewind: false }">
                <SplideSlide class="bannerstree" v-for="i in type(mqList, data.length)">
                    <Listcar :num="i" :type="mqList" :data="data"></Listcar>
                </SplideSlide>
            </Splide>
        </div>
        <div style="padding-bottom: 10px;">
            <a-typography-title :heading="3" style="padding:20px 20px 10px;"> 类别2</a-typography-title>
            <Splide class="banner" :options="{ rewind: false }">
                <SplideSlide class="bannerstree" v-for="i in type(mqList, data.length)">
                    <Listcar :num="i" :type="mqList" :data="data"></Listcar>
                </SplideSlide>
            </Splide>
        </div>
        <div style="padding-bottom: 10px;">
            <a-typography-title :heading="3" style="padding:20px 20px 10px;"> 类别3</a-typography-title>
            <Splide class="banner" :options="{ rewind: false }">
                <SplideSlide class="bannerstree" v-for="i in type(mqList, data.length)">
                    <Listcar :num="i" :type="mqList" :data="data"></Listcar>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>
<style scoped lang='less'>
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
    height: 38px;
    width: 38px;

    svg {
        fill: rgba(28, 90, 184, 1);
        height: 20px;
        width: 20px;
    }
}
</style>