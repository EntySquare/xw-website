<script setup lang='ts'>
import { useRoute } from "vue-router";
import AccHeader from './components/ass-header.vue';
import Accbody from './components/ass-body.vue';
import Accfooter from './components/ass-footer.vue';
import useStore from '@/store/index'
import { ref, nextTick, onBeforeUnmount } from 'vue';
let { cate } = useStore()
let { getThemenum } = cate
const getWindowInfo = () => {
    nextTick(() => {
        // document.getElementById('fixedtwo')!.style.height = window.innerHeight - 150 + 'px'
    })
};
window.addEventListener("resize", getWindowInfo);
getWindowInfo()
let show = ref(false)
let show1 = ref(false)
// 记录滚动的距离
let y: number
// 设置一个滚动的事件
let tabnum: number
function myscroll() {
    tabnum = document.getElementById('tabtop')?.offsetTop || 0
    y = document.documentElement.scrollTop
    if (y > tabnum - 85) {
        // document.getElementById('collectionscrollbar')!.style.height = window.innerHeight - 260 + 'px'
    }
    y > tabnum ? show.value = true : show.value = false
    y > tabnum ? show1.value = true : show1.value = false
    // nextTick(() => {
    //     document.getElementById('screening')!.style.width = document.getElementById('collectionbody')!.offsetWidth + 'px'
    // })
}
// 页面加载之后挂载事件
document.addEventListener('scroll', myscroll)
let state = ref(true)
const route = useRoute();
const getParams = () => {
    return route.query;
};
const data = {
    id: 23,
    collect: 1,
    name: "Crypto Citizens",
    lowest_price: "1W",
    countdown: 12323,
    img: [
        "https://pbs.twimg.com/profile_images/1581797177801773058/_ZizVWFW_400x400.jpg",
    ],
}
onBeforeUnmount(() => {
    document.removeEventListener('scroll', myscroll)
})
</script>
<template>
    <div class="page-account">
        <div class="container">
            <AccHeader />
            <Accbody />
        </div>
        <Accfooter />
    </div>
</template>
<style scoped lang='less'>
.container {
    width: 100%;
    box-sizing: border-box;
    max-width: 2560px;
    padding: 0 70px;
    gap: 20px;
}
</style>