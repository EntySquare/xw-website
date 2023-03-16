<script setup lang='ts'>
import AccBanner from './components/acc-banner.vue';
import AccHeader from './components/acc-header.vue';
import Accbody from './components/acc-body.vue';
import { ref } from 'vue';
import useStore from '@/store/index'
let { cate } = useStore()
let { getThemenum } = cate
let state = ref(true)

</script>
<template>
    <div class="page-account">
        <AccHeader></AccHeader>
        <div style="height: 30px;"></div>
        <div class="tabtop" id="tabtop">
            <div
                style="overflow: hidden;width: 100%;border-bottom: 1px solid rgb(var(--arcoblue-6));display: flex;justify-content: center;">
                <ul class="container" :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000' }">
                    <li class="liactive">我的收藏</li>
                    <li>我的发布</li>
                </ul>
            </div>
        </div>
        <div class="container">
            <AccBanner></AccBanner>
            <div class="screening">
                <div class="search">
                    <icon-search size="30" style="color:#3159b4;margin-left: 18px;min-width: 20px;" />
                    <input type="text" placeholder="按名称或属性搜索" />
                </div>
                <div class="search">
                    <span>价格从高到底</span><icon-caret-down />
                </div>
                <div class="search" style="min-width: 100px;">
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
</template>
<style scoped lang='less'>
.liactive {
    background: linear-gradient(162.55deg, #3FFFF3 3.18%, #E127FF 82.44%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.page-account {
    .tabtop {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        // border-bottom: 1px solid rgb(var(--arcoblue-6)) !important;

        .fixed {
            position: fixed !important;
            top: 85px;
            width: 100%;
            z-index: 100;
        }



        ul {
            flex: 1;
            max-width: 2560px;
            height: 50px;
            display: flex;
            gap: 10px;
            // border-bottom: 1px solid rgb(var(--arcoblue-6)) !important;

            li {
                // background-color: #3159b4;
                font-weight: 600;
                margin-left: 10px;
                line-height: 50px;
                display: flex;
                font-size: 24px;
            }
        }
    }

    .container {
        width: 100%;
        max-width: 2560px;
        padding: 0 70px;

        .screening {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 10px;

            .search {
                display: flex;
                align-items: center;
                gap: 10px;
                height: 40px;
                border-radius: 10px;
                overflow: hidden;
                background: rgba(255, 255, 255, 1);
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

                .bom {
                    position: absolute;
                    display: flex;
                    justify-content: space-around;
                    width: 100px;
                    color: black;
                    font-size: 16px;
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
                        font-size: 16px;
                        font-weight: 800;
                        border: 1px solid #3159b4;
                        background-color: #3159b4;
                        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        width: 50%;
                    }
                }

                &:nth-child(1) {
                    flex: 1;
                }

                &:nth-child(2) {
                    padding: 10px;
                    color: #000;
                    font-weight: 800;
                    font-size: 18px;
                }

                &:nth-child(3) {
                    max-width: 100px;
                    overflow: hidden;
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
}
</style>