<script setup lang='ts'>
import { useRoute } from "vue-router";
import AccHeader from './components/header.vue';
import Accbody from './components/body.vue';
import useStore from '@/store/index'
import { ref, nextTick } from 'vue';
let { cate } = useStore()
let { getThemenum } = cate

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
    document.getElementById('screening')!.style.width = document.getElementById('collectionbody')!.offsetWidth + 'px'
    document.getElementById('down-box')!.style.width = document.getElementById('lefttt')!.offsetWidth + 'px'

}
const getWindowInfo = () => {
    nextTick(() => {
        if (y > tabnum) {
            document.getElementById('screening')!.style.width = document.getElementById('collectionbody')!.offsetWidth + 'px'
            document.getElementById('down-box')!.style.width = document.getElementById('lefttt')!.offsetWidth + 'px'

        } else {
            document.getElementById('screening')!.style.width = `100%`
            document.getElementById('down-box')!.style.width = `100%`
        }
    })
};
window.addEventListener("resize", getWindowInfo);
getWindowInfo()
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
</script>
<template>
    <div class="page-account">
        <AccHeader></AccHeader>
        <div class="tabtop" id="tabtop">
            <ul :class="[show ? 'fixed' : '']" :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000' }">
                <li>项目</li>
                <li>分析</li>
                <li>活动</li>
            </ul>
        </div>
        <div class="container" id="container">
            <div style=" width: 100%; display: flex;gap: 20px;padding-top: 20px;">
                <div style="flex: 2;" id="lefttt">
                    <div :class="[show1 ? 'fixedtwo' : '']" id="fixedtwo"
                        :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000' }">
                        <div class="down-box" id="down-box">
                            <p>状态</p>
                        </div>
                        <div class="down-box" id="down-box">
                            <p>状态</p>
                        </div>
                        <div class="down-box" id="down-box">
                            <p>状态</p>
                        </div>
                        <div class="down-box" id="down-box">
                            <p>状态</p>
                        </div>
                    </div>
                </div>
                <div style="flex: 5;">
                    <div :style="{ height: show1 ? '60px' : '' }"></div>
                    <div id="screening" :class="['screening', show1 ? 'fixedtwo' : '']"
                        :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000' }">
                        <div class="search">
                            <icon-search size="30" style="color:#3159b4;margin-left: 18px;" />
                            <input type="text" placeholder="按名称或属性搜索" />
                        </div>
                        <div class="search">
                            {{ y }}
                        </div>
                        <div class="search" style="min-width: 150px;">
                            <div class="bom">
                                <p>网格</p>
                                <p>列表</p>
                            </div>
                            <div :class="['switch', state ? 'jcs' : 'jce']" @click="state = !state">
                                <div class="item">
                                    <p>{{ state ? '网格' : '列表' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Accbody></Accbody>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.page-account {
    position: relative;

    .fixedtwo {
        position: fixed !important;
        top: 150px;
        padding: 20px 0px;
        z-index: 100;
        background-color: var(--bgc-top-dark);
    }

    .tabtop {
        height: 65px;
        width: 100vw;
        display: flex;
        justify-content: center;

        .fixed {
            position: fixed !important;
            top: 85px;
            width: 100vw;
            z-index: 100;
        }



        ul {
            flex: 1;
            padding: 0 70px;
            max-width: 2560px;
            border-bottom: 1px solid rgb(var(--arcoblue-6));
            padding-top: 15px;
            height: 65px;
            display: flex;
            gap: 10px;

            li {
                font-size: 24px;
            }
        }
    }

    .container {
        width: 100vw;
        box-sizing: border-box;
        max-width: 2560px;
        padding: 0 70px;
        gap: 20px;

        .screening {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 10px;

            .search {
                display: flex;
                align-items: center;
                gap: 10px;
                flex: 1;
                height: 50px;
                border-radius: 15px;
                overflow: hidden;
                background: rgba(255, 255, 255, 1);
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

                .bom {
                    position: absolute;
                    display: flex;
                    justify-content: space-around;
                    width: 150px;
                    color: black;
                    font-size: 20px;
                    font-weight: 800;
                }

                .jcs {
                    justify-content: start;
                }

                .jce {
                    justify-content: end;
                }

                .switch {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    width: 100%;
                    height: 100%;

                    .item {
                        color: white;
                        font-size: 20px;
                        font-weight: 800;
                        background-color: #3159b4;
                        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

                        border-radius: 15px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        width: 50%;
                    }
                }

                &:nth-child(2) {
                    max-width: 250px;
                }

                &:nth-child(3) {
                    max-width: 150px;
                }

                input {
                    height: 40px;
                    width: 100%;
                    font-family: "Poppins";
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 40px;
                    // color: white;
                    background: rgba(0, 0, 0, 0);

                    &::placeholder {
                        font-weight: 800;
                        color: #aaa;
                        font-size: 18px;
                    }
                }
            }
        }
    }

    .down-box {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        font-weight: 800;
        font-size: 20px;
        padding: 20px;
        height: 50px;
        // min-width: 344px;
        border-top: 2px solid greenyellow;
        border-left: 2px solid greenyellow;
        border-right: 2px solid pink;
        border-bottom: 2px solid pink;
        border-radius: 10px;
    }
}
</style>