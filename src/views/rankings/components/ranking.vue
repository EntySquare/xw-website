<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

const imgurl =
    "https://i.seadn.io/gcs/files/266274c8643e1c9d0659cb60bf06f740.png?auto=format&w=384";
let mqList = ref(false);
//监听窗口宽度
const getWindowInfo = () => {
    mqList.value = window.matchMedia("(max-width: 1024px)").matches ? true : false;
};
window.addEventListener("resize", getWindowInfo);
getWindowInfo();
onBeforeUnmount(() => {
    document.removeEventListener('resize', getWindowInfo)
})
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
                    <p class="tap-p">排行榜</p>
                </template>
                <div class="tabsbody">
                    <div class="body-item">
                        <div class="item">
                            <div></div>
                            <div><a-typography-title :heading="6"> 专辑 </a-typography-title></div>
                            <div v-if="!mqList"><a-typography-title :heading="6"> 地板价 </a-typography-title></div>
                            <div v-if="!mqList"><a-typography-title :heading="6"> 参考价 </a-typography-title></div>
                            <div :style="{ flex: mqList ? 'none' : '5%' }"><a-typography-title :heading="6"> 交易量
                                </a-typography-title></div>
                            <div v-if="!mqList"><a-typography-title :heading="6"> 持有者 </a-typography-title></div>
                            <div v-if="!mqList"><a-typography-title :heading="6"> 涨幅 </a-typography-title></div>
                        </div>
                        <div class="item" v-for="(item, index) in 20">
                            <div>
                                <a-typography-title type="secondary" :heading="6">
                                    {{ index + 1 }}
                                </a-typography-title>
                            </div>
                            <div class="imgcar">
                                <LockDiv :width="!mqList ? '135px' : '73px'" :xyb="!mqList ? '135px' : '73px'">
                                    <a-avatar :size="!mqList ? 135 : 73" shape="square">
                                        <img :src="imgurl" />
                                    </a-avatar>
                                </LockDiv>
                                <a-typography-title :heading="5">
                                    醒目猴</a-typography-title>
                                <icon-check-circle-fill style="color:blue" :size="20" />
                            </div>
                            <div v-if="!mqList"><a-typography-title :heading="6"> ¥500 </a-typography-title></div>
                            <div v-if="!mqList"><a-typography-title :heading="6"> ¥2342～¥5454 </a-typography-title></div>
                            <div :style="{ flex: mqList ? 'none' : '5%' }"><a-typography-title :heading="6"> 80000
                                </a-typography-title></div>
                            <div v-if="!mqList"><a-typography-title :heading="6"> 100/50 </a-typography-title></div>
                            <div v-if="!mqList"><a-typography-title :heading="6"> +7% </a-typography-title></div>
                        </div>
                    </div>
                </div>
            </a-tab-pane>
            <a-tab-pane key="2">
                <template #title>
                    <p class="tap-p">热度榜</p>
                </template>

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

:deep(.arco-tabs-tab-active) {
    color: var(--color-neutral-10);
}

:deep(.arco-tabs-nav-ink) {
    background-color: var(--color-neutral-10);
}
</style>
