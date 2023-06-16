<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TBanner } from '@/types/cate'
import useStore from '@/store/index'
import { albumRecommend } from '@/apis/details'
import { useRoute } from 'vue-router'
import { type } from '@/utils/banner'
let { cate } = useStore()
let { getThemenum } = cate

interface TAlbumRecommend {
    id: number
    name: string
    face_img: string
    follow: boolean
    pay_size: number
    price_lowest: string
}
// 获取专辑推荐列表
const route = useRoute()
const userId = route.query.id
// console.log('getParams111111222', userId)
const albumRecommendList = ref<TAlbumRecommend[]>([])
const getRecommendList = async () => {
    try {
        const res = await albumRecommend({ album_id: +userId })
        albumRecommendList.value = res.data?.json?.album_list || []
        // console.log('albumInfoList111:', albumRecommendList.value)
    } catch (error) {
        console.error(error)
    }
}
getRecommendList()
</script>
<script lang="ts">
export default {
    name: 'CollBody'
}
</script>
<template>
    <div class="collect-banner">
        <slot></slot>
        <div class="collectionbody" id="collectionbody">
            <LockDiv
                xyb="143%"
                class="item"
                :style="{
                    background: +getThemenum() ? 'white' : '#353840',
                    transition: `all .5s`
                }"
                v-for="(item, i) in albumRecommendList"
                :key="i"
            >
                <RouterLink :to="`/assets/${item.id}`">
                    <LockDiv class="top">
                        <div class="img" :style="{ 'background-image': 'url(' + item.face_img + ')' }"></div>
                    </LockDiv>
                    <div class="bom">
                        <a-typography-title :heading="5">
                            <div class="left">
                                <p class="titleone">{{ item.name }}</p>
                                <p class="titleone" style="padding-top: 5px">最低价￥{{ item.price_lowest }}</p>

                                <p>最后销售数量:{{ item.pay_size }}</p>
                            </div>
                            <div class="right">
                                <div width="72px" class="bolticon" >
                                    <icon-thunderbolt />
                                </div>
                            </div>
                        </a-typography-title>
                    </div>
                </RouterLink>
            </LockDiv>
            <!-- <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>全选</th>
                                <th>名称</th>
                                <th>价格</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="Checkbox" /></td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> -->
        </div>
    </div>
</template>
<style scoped lang="less">
.collect-banner {
    padding: 0px 0px 64px;
}

.collectionbody {
    // width: 100%;
    padding: 0px 8px;
    padding-bottom: 64px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(7, 1fr);

    .item {
        // max-width: 350px;
        border-radius: 20px;
        overflow: hidden;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        .top {
            overflow: hidden;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;

            .img {
                height: 100%;
                background-size: auto 100%;
                background-repeat: no-repeat;
                background-position: center;
                transition: all 0.3s;
            }
        }

        .bom {
            height: 30%;
            padding: 10px 20px;

            h5 {
                height: 100%;
                display: flex;
                margin: 0;
                padding: 0;

                .right {
                    display: flex;
                    align-items: center;
                    justify-content: end;
                    flex: 1;

                    .bolticon {
                        color: #fff;
                        width: 58px;
                        height: 58px;
                        background: #1c5ab8;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 28px;

                        &:hover {
                            background: linear-gradient(162.55deg, #3ffff3 3.18%, #e127ff 82.44%);
                        }
                    }
                }
            }

            .left {
                .titleone {
                    font-size: 17px;
                }

                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-weight: 600;

                > p {
                    margin: 0;

                    &:last-child {
                        opacity: 0.8;
                        font-size: 14px;
                    }
                }
            }
        }

        :hover {
            .img {
                background-size: auto 108%;
            }
        }
    }
}

:deep(.splide__pagination) {
    display: none;
}

:deep(.splide__arrow--prev) {
    left: -10px;
}

:deep(.splide__arrow--next) {
    right: -10px;
}

:deep(.splide__arrow) {
    background-color: #fff;
    height: 47px;
    width: 47px;

    svg {
        fill: rgba(28, 90, 184, 1);
        height: 25px;
        width: 25px;
    }
}
</style>
