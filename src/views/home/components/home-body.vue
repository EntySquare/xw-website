<script setup lang='ts' name="HomeBody">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref } from "vue";
import { BodyItemList } from "@/types/cate";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import bodyListcar from "./body-listcar.vue";
import { type } from "@/utils/banner";
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
const props = defineProps<{
    typeList: {
        type: string;
        list: BodyItemList[];
    }[];
}>();
let { home } = useStore()
let { getHomebodyList } = home
getHomebodyList()
let { homebodyList } = storeToRefs(home)

let mqList = ref(0);
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
getWindowInfo();
window.addEventListener("resize", getWindowInfo);

</script>
<script lang='ts'>
export default {
    name: "HomeBody",
}
</script>
<template>
    <div class="home-banner">
        <!-- 轮播图 -->
        <div style="padding-bottom: 10px;" v-for="(item, index) in typeList" :key="index">
            <a-typography-title :heading="3" style="padding:20px 20px 10px;font-weight: 800;">{{ item.type
            }}</a-typography-title>
            <Splide class="banner" :options="{ rewind: false }">
                <SplideSlide class="bannerstree" v-if="!typeList[0]">
                    <bodyListcar :num="0" :type="mqList" :typeList="[]"></bodyListcar>
                </SplideSlide>
                <SplideSlide class="bannerstree" v-for="(i, cindex) in type(mqList, item.list.length)" :key="cindex">
                    <bodyListcar :num="i" :type="mqList" :typeList="item.list"></bodyListcar>
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


        &:hover {
            :deep(.splide__arrow) {
                background-color: #fff;
                opacity: 1;
            }

        }
    }
}

:deep(.splide__pagination) {
    display: none;
}

:deep(.splide__arrow--prev) {
    left: -12px;
}

:deep(.splide__arrow--next) {
    right: -12px;
}

:deep(.splide__arrow) {
    transition: all .3s;
    opacity: 0;
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