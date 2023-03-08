<script setup lang="ts">
import { ref } from "vue";

const imgurl =
    "https://i.seadn.io/gcs/files/266274c8643e1c9d0659cb60bf06f740.png?auto=format&w=384";
let mqList = ref();
//监听窗口宽度
const getWindowInfo = () => {
    mqList.value = window.matchMedia("(max-width: 1200px)").matches ? false : true;
};
window.addEventListener("resize", getWindowInfo);
getWindowInfo();
</script>
<template>
    <div>
        <a-tabs default-active-key="1" size="large">
            <template #extra>
                <div style="display: flex;gap: 10px;">
                    <a-button type="outline">查看全部</a-button>
                    <a-button type="primary">24小时 <icon-caret-down /> </a-button>
                </div>
            </template>
            <a-tab-pane key="1">
                <template #title>
                    <p class="tap-p">热门</p>
                </template>
                <div class="tabsbody">
                    <div class="one">
                        <div class="body">
                            <div class="body-item">
                                <div class="item">
                                    <div></div>
                                    <div><a-typography-title :heading="6"> 专辑 </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> 涨幅 </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> 地板价 </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> 总交易量 </a-typography-title></div>
                                </div>
                                <div class="item" v-for="(item, index) in mqList ? 5 : 10">
                                    <div>
                                        <a-typography-title type="secondary" :heading="6">
                                            {{ index + 1 }}
                                        </a-typography-title>
                                    </div>
                                    <div class="imgcar">
                                        <a-avatar :size="mqList ? 50 : 36" shape="square"><img :src="imgurl" /></a-avatar>
                                        <a-typography-title :heading="5">
                                            醒目猴</a-typography-title>
                                        <icon-check-circle-fill style="color:blue" :size="mqList ? 20 : 14" />
                                    </div>
                                    <div><a-typography-title :heading="6"> +7% </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> ¥500 </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> 80000 </a-typography-title></div>
                                </div>
                            </div>
                            <div v-if="mqList" class="body-item">
                                <div class="item">
                                    <div></div>
                                    <div><a-typography-title :heading="6"> 专辑 </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> 涨幅 </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> 地板价 </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> 总交易量 </a-typography-title></div>
                                </div>
                                <div class="item" v-for="(item, index) in 5">
                                    <div>
                                        <a-typography-title type="secondary" :heading="6">
                                            {{ index + 6 }}
                                        </a-typography-title>
                                    </div>
                                    <div class="imgcar">
                                        <a-avatar :size="mqList ? 50 : 36" shape="square"><img :src="imgurl" /></a-avatar>
                                        <a-typography-title :heading="5">
                                            醒目猴</a-typography-title>
                                        <icon-check-circle-fill style="color:blue" :size="mqList ? 20 : 14" />
                                    </div>
                                    <div><a-typography-title :heading="6"> +7% </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> ¥500 </a-typography-title></div>
                                    <div><a-typography-title :heading="6"> 80000 </a-typography-title></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a-tab-pane>
            <a-tab-pane key="2">
                <template #title>
                    <p class="tap-p">Top</p>
                </template>
                Content of Tab Panel 2
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<style scoped lang="less">
.tap-p {
    font-size: 20px;
    font-weight: 600;
}

.tabsbody {
    .one {
        .body {
            display: flex;
            justify-content: space-between;
            gap: 40px;

            .body-item {
                flex: 20%;
            }

            .item {
                // background-color: greenyellow;
                flex: 1;
                display: flex;
                align-items: center;
                // justify-content: space-between;
                padding: 10px 0px;

                .imgcar {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex: 25%;
                }

                >div {
                    &:nth-child(1) {
                        width: 8px;
                        margin-right: 15px;
                    }

                    &:nth-child(2) {
                        flex: 25%;
                    }

                    &:nth-child(n+3) {
                        text-align: center;
                        flex: 5%;
                    }
                }
            }
        }
    }
}

::v-deep .arco-tabs-tab-active {
    color: var(--color-neutral-10);
}

::v-deep .arco-tabs-nav-ink {
    background-color: var(--color-neutral-10);
}
</style>
