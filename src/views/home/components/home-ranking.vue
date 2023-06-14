<script setup lang="ts" name="Ranking" >
import { onMounted } from 'vue';
import { ref } from 'vue'
interface hotDefaultList {
    album_id: number;
    float: number;
    image: string;
    index: number;
    name: string;
    region_price: string;
    pay_size: number
}
interface topDefaultList {
    album_id: number;
    float: number;
    image: string;
    index: number;
    name: string;
    region_price: string;
    pay_size: number
}
const props = defineProps<{
    hotList: hotDefaultList[],
    topList: topDefaultList[]
}>()
onMounted(() => {
    // 挂载完成之后动态赋值
    const hotList = ref<hotDefaultList[]>(props.hotList)
    const topList = ref<topDefaultList[]>(props.topList)
})
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
                                <!-- Hot左边骨架屏 -->
                                <div class="item" v-for="(item, index) in 5" :key="index" v-if="!hotList.length">
                                    <div>
                                        <div type="secondary">
                                            {{ index + 1 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <XtxSkeleton :width="mqList ? 50 : 40" :height="mqList ? 50 : 40" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                        <XtxSkeleton :width="mqList ? 20 : 14" :height="mqList ? 20 : 14" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                </div>
                                <!-- Hot左边内容 -->
                                <div class="item" v-for="(item, index) in hotList.slice(0, 5)" :key="item.album_id" v-else>
                                    <div>
                                        <div type="secondary">
                                            {{ index + 1 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <a-avatar :size="mqList ? 50 : 40" shape="square"><img
                                                :src="item.image" /></a-avatar>
                                        <div>{{ item.name || '' }}</div>
                                        <icon-check-circle-fill style="color: blue" :size="mqList ? 20 : 14" />
                                    </div>
                                    <div>
                                        <div>
                                            {{ item.float >= 0 ? '+' + item.float : item.float }}%
                                        </div>
                                    </div>
                                    <div>
                                        <div> ¥{{ item.region_price || 0 }} </div>
                                    </div>
                                    <div>
                                        <div> {{ item.pay_size || 0 }} </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 数据未回来之前或者数据长度大于5条，并且是宽屏时显示 -->
                            <div v-if="(!hotList.length || hotList.length > 5) && mqList" class="body-item">
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
                                <!-- Hot右边骨架屏 -->
                                <div class="item" v-for="(item, index) in 5" :key="index" v-if="!hotList.length">
                                    <div>
                                        <div type="secondary">
                                            {{ index + 6 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <XtxSkeleton :width="mqList ? 50 : 40" :height="mqList ? 50 : 40" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                        <XtxSkeleton :width="mqList ? 20 : 14" :height="mqList ? 20 : 14" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                </div>
                                <!-- Hot右边内容 -->
                                <div class="item" v-for="(item, index) in hotList.slice(5, 10)" :key="item.album_id" v-else>
                                    <div>
                                        <div type="secondary">
                                            {{ index + 6 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <a-avatar :size="mqList ? 50 : 40" shape="square"><img
                                                :src="item.image" /></a-avatar>
                                        <div> {{ item.name || '' }}</div>
                                        <icon-check-circle-fill style="color: blue" :size="mqList ? 20 : 14" />
                                    </div>
                                    <div>
                                        <div>
                                            {{ item.float >= 0 ? '+' + item.float : item.float }}%
                                        </div>
                                    </div>
                                    <div>
                                        <div> ¥{{ item.region_price || 0 }} </div>
                                    </div>
                                    <div>
                                        <div> {{ item.pay_size || 0 }} </div>
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
                                <!-- Top左边骨架屏 -->
                                <div class="item" v-for="(item, index) in 5" :key="index" v-if="!topList.length">
                                    <div>
                                        <div type="secondary">
                                            {{ index + 1 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <XtxSkeleton :width="mqList ? 50 : 40" :height="mqList ? 50 : 40" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                        <XtxSkeleton :width="mqList ? 20 : 14" :height="mqList ? 20 : 14" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                </div>
                                <!-- Top左边内容 -->
                                <div class="item" v-for="(item, index) in topList.slice(0, 5)" :key="item.album_id" v-else>
                                    <div>
                                        <div type="secondary">
                                            {{ index + 1 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <a-avatar :size="mqList ? 50 : 40" shape="square"><img
                                                :src="item.image" /></a-avatar>
                                        <div>{{ item.name || '' }}</div>
                                        <icon-check-circle-fill style="color: blue" :size="mqList ? 20 : 14" />
                                    </div>
                                    <div>
                                        <div>
                                            {{ item.float >= 0 ? '+' + item.float : item.float }}%
                                        </div>
                                    </div>
                                    <div>
                                        <div> ¥{{ item.region_price || 0 }} </div>
                                    </div>
                                    <div>
                                        <div> {{ item.pay_size || 0 }} </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 数据未回来之前或者数据长度大于5条，并且是宽屏时显示 -->
                            <div v-if="(!topList.length || topList.length > 5) && mqList" class="body-item">
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
                                <!-- Top右边骨架屏 -->
                                <div class="item" v-for="(item, index) in 5" :key="index" v-if="!topList.length">
                                    <div>
                                        <div type="secondary">
                                            {{ index + 6 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <XtxSkeleton :width="mqList ? 50 : 40" :height="mqList ? 50 : 40" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                        <XtxSkeleton :width="mqList ? 20 : 14" :height="mqList ? 20 : 14" :fade="true"
                                            :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                    <div>
                                        <XtxSkeleton widthB="90%" heightB="20px" :fade="true" :animated="true">
                                        </XtxSkeleton>
                                    </div>
                                </div>
                                <!-- Top右边内容 -->
                                <div class="item" v-for="(item, index) in topList.slice(5, 10)" :key="item.album_id" v-else>
                                    <div>
                                        <div type="secondary">
                                            {{ index + 6 }}
                                        </div>
                                    </div>
                                    <div class="imgcar">
                                        <a-avatar :size="mqList ? 50 : 40" shape="square"><img
                                                :src="item.image" /></a-avatar>
                                        <div> {{ item.name || '' }}</div>
                                        <icon-check-circle-fill style="color: blue" :size="mqList ? 20 : 14" />
                                    </div>
                                    <div>
                                        <div>
                                            {{ item.float >= 0 ? '+' + item.float : item.float }}%
                                        </div>
                                    </div>
                                    <div>
                                        <div> ¥{{ item.region_price || 0 }} </div>
                                    </div>
                                    <div>
                                        <div> {{ item.pay_size || 0 }} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
