<script setup lang='ts'>
import AccBanner from './components/acc-banner.vue';
import AccHeader from './components/acc-header.vue';
import Accbody from './components/acc-body.vue';
import { ref } from 'vue';
let state = ref(true)

</script>
<template>
    <div class="page-account">
        <AccHeader></AccHeader>
        <div class="container">
            <AccBanner></AccBanner>
            <div class="screening">
                <div class="search">
                    <icon-search size="30" style="color:#3159b4;margin-left: 18px;" />
                    <input type="text" placeholder="按名称或属性搜索" />
                </div>
                <div class="search">
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
</template>
<style scoped lang='less'>
.page-account {
    .container {
        width: 100%;
        max-width: 2560px;
        padding: 0 70px;

        .screening {
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
}
</style>