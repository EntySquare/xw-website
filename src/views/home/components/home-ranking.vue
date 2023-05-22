<script setup lang="ts" name="Ranking" >
import { ref } from 'vue'

const imgurl = ref('')
setTimeout(() => {
    imgurl.value = 'https://i.seadn.io/gcs/files/266274c8643e1c9d0659cb60bf06f740.png?auto=format&w=384'
}, 1000);
let mqList = ref()
//监听窗口宽度
const getWindowInfo = () => {
    mqList.value = window.matchMedia('(max-width: 1200px)').matches ? false : true
}
window.addEventListener('resize', getWindowInfo)
getWindowInfo()
</script>
<script lang="ts">
export default {
    name: 'Ranking',
}
</script>
<template>
    <div>
        <a-tabs default-active-key="1" size="large">
            <template #extra>
                <div style="display: flex; gap: 10px">
                    <RouterLink to="/rankings/trending"><a-button type="outline">查看全部</a-button></RouterLink>
                    <RouterLink to=""><a-button type="primary">24小时 <icon-caret-down /> </a-button></RouterLink>
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
                                    <div>
                                        <div> 专辑 </div>
                                    </div>
                                    <div>
                                        <div> 涨幅 </div>
                                    </div>
                                    <div>
                                        <div>
                                            地板价
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            总交易量
                                        </div>
                                    </div>
                                </div>
                                <div class="item" v-for="(item, index) in 5" :key="index"> 
                                    <div>
                                        <div type="secondary">
                                            {{ index + 1 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <XtxSkeleton v-if="!imgurl" :width="mqList ? 50 : 40" :height="mqList ? 50 : 40"
                                            :fade="true" :animated="true">
                                        </XtxSkeleton>
                                        <a-avatar v-else :size="mqList ? 50 : 40" shape="square"><img
                                                :src="imgurl" /></a-avatar>
                                        <XtxSkeleton v-if="!imgurl" widthB="90%" heightB="20px" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <div v-else> 醒目猴</div>
                                        <XtxSkeleton v-if="!imgurl" :width="mqList ? 20 : 14" :height="mqList ? 20 : 14"
                                            :fade="true" :animated="true">
                                        </XtxSkeleton>
                                        <icon-check-circle-fill v-else style="color: blue" :size="mqList ? 20 : 14" />
                                    </div>
                                    <div>
                                        <XtxSkeleton v-if="!imgurl" widthB="90%" heightB="20px" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <div v-else>
                                            +7%
                                        </div>
                                    </div>
                                    <div>
                                        <XtxSkeleton v-if="!imgurl" widthB="90%" heightB="20px" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <div v-else> ¥500 </div>
                                    </div>
                                    <div>
                                        <XtxSkeleton v-if="!imgurl" widthB="90%" heightB="20px" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <div v-else> 80000 </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="mqList" class="body-item">
                                <div class="item">
                                    <div></div>
                                    <div>
                                        <div> 专辑 </div>
                                    </div>
                                    <div>
                                        <div> 涨幅 </div>
                                    </div>
                                    <div>
                                        <div>
                                            地板价
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            总交易量
                                        </div>
                                    </div>
                                </div>
                                <div class="item" v-for="(item, index) in 5" :key="index">
                                    <div>
                                        <div type="secondary">
                                            {{ index + 6 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <XtxSkeleton v-if="!imgurl" :width="mqList ? 50 : 40" :height="mqList ? 50 : 40"
                                            :fade="true" :animated="true">
                                        </XtxSkeleton>
                                        <a-avatar v-else :size="mqList ? 50 : 40" shape="square"><img
                                                :src="imgurl" /></a-avatar>
                                        <XtxSkeleton v-if="!imgurl" widthB="90%" heightB="20px" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <div v-else> 醒目猴</div>
                                        <XtxSkeleton v-if="!imgurl" :width="mqList ? 20 : 14" :height="mqList ? 20 : 14"
                                            :fade="true" :animated="true">
                                        </XtxSkeleton>
                                        <icon-check-circle-fill v-else style="color: blue" :size="mqList ? 20 : 14" />
                                    </div>
                                    <div>
                                        <XtxSkeleton v-if="!imgurl" widthB="90%" heightB="20px" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <div v-else>
                                            +7%
                                        </div>
                                    </div>
                                    <div>
                                        <XtxSkeleton v-if="!imgurl" widthB="90%" heightB="20px" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <div v-else> ¥500 </div>
                                    </div>
                                    <div>
                                        <XtxSkeleton v-if="!imgurl" widthB="90%" heightB="20px" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <div v-else> 80000 </div>
                                    </div>
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
                font-size: 16px;

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

                    &:nth-child(n + 3) {
                        text-align: center;
                        flex: 5%;
                    }
                }
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
