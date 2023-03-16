<script setup lang='ts'>
import { ref } from "vue";
import { TBanner } from "@/types/cate";
import useStore from '@/store/index'
let { cate } = useStore()
let { getThemenum } = cate
const data: TBanner[] = []
for (let i = 0; i < 50; i++) {
    data.push({
        id: i,
        collect: 1,
        name: "出征图",
        lowest_price: "500",
        countdown: 450,
        img: [
            "https://pica.zhimg.com/80/v2-0389f732eef260ae15d43ac82b932345_720w.webp?source=1940ef5c",
        ],
    })
}
</script>
<template>
    <div class="collect-banner">
        <slot></slot>
        <div class="collectionbody" id="collectionbody">
            <LockDiv xyb="143%" class="item" :style="{ background: +getThemenum() ? 'white' : '#353840' }"
                v-for="item in data">
                <RouterLink :to="`/assets/ethereum/${item.id}`">
                    <LockDiv class="top">
                        <div class="img" :style="{ 'background-image': 'url(' + item.img[0] + ')' }"></div>
                    </LockDiv>
                    <div class="bom">
                        <a-typography-title :heading="5">
                            <div class="left">

                                <p class="titleone">
                                    {{ item.name }}#100
                                </p>
                                <p class="titleone" style="padding-top: 5px;">
                                    ￥{{ item.lowest_price }}
                                </p>

                                <p> 最后销售:￥{{ item.countdown }}</p>
                            </div>
                            <div class="right">
                                <div width="72px" class="bolticon">
                                    <icon-thunderbolt />
                                </div>
                            </div>
                        </a-typography-title>
                    </div>
                </RouterLink>
            </LockDiv>
        </div>
    </div>
</template>
<style scoped lang='less'>
.collect-banner {
    padding: 0px 0px 64px;
}

.collectionbody {
    // width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(7, 1fr);


    .item {
        // max-width: 350px;
        border-radius: 20px;
        overflow: hidden;

        .top {
            overflow: hidden;

            .img {
                height: 100%;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                border-bottom-right-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: all .3s;
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
                        background: #1C5AB8;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 28px;

                        &:hover {
                            background: linear-gradient(162.55deg, #3FFFF3 3.18%, #E127FF 82.44%);
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

                >p {
                    margin: 0;

                    &:last-child {
                        opacity: .8;
                        font-size: 14px;
                    }
                }
            }
        }

        :hover {
            .img {
                height: 110%;
            }
        }
    }
}

::v-deep .splide__pagination {
    display: none;
}

::v-deep .splide__arrow--prev {
    left: -10px;
}

::v-deep .splide__arrow--next {
    right: -10px;
}

::v-deep .splide__arrow {
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