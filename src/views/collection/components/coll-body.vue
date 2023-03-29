<script setup lang='ts'>
import { ref } from "vue";
import { TBanner } from "@/types/cate";
import useStore from '@/store/index'
let { cate } = useStore()
let { getThemenum } = cate
const data: TBanner[] = []
for (let i = 0; i < 30; i++) {
    data.push({
        id: i,
        collect: 1,
        name: "出征图",
        lowest_price: "500",
        locking_time: 450,
        opening_time: 1,
        img: [
            "https://pica.zhimg.com/80/v2-0389f732eef260ae15d43ac82b932345_720w.webp?source=1940ef5c",
            "https://img2.wallspic.com/crops/2/1/8/3/6/163812/163812-zhi_zhu_xia-du_ye-man_hua_shu-chao_ji_ying_xiong-jing_qi_man_hua-1920x1080.jpg",
            "https://img1.wallspic.com/previews/1/4/4/1/4/141441/141441-nu_ren-nu_hai-nu_zhan_shi-tian_kong-huan_xiang-500x.jpg",
            "https://img3.wallspic.com/previews/4/2/6/6/5/156624/156624-nu_hai-can_jin-kuai_le_de-fen_hong_se-xiu_xian-500x.jpg",
            "https://img3.wallspic.com/previews/2/2/3/7/6/167322/167322-gai_nian_yi_shu-yi_shu-cha_hua_jia-hui_hua-jian_zhu-500x.jpg",
            "https://img1.wallspic.com/previews/1/4/0/4/6/164041/164041-pang_ke2077-yi_shu-gai_nian_yi_shu-zui-zi_se_de-500x.jpg",
            "https://img2.wallspic.com/previews/6/7/1/8/5/158176/158176-shu_ma_yi_shu-yi_shu-hui_hua-shu_zi_hui_hua-yi_shu_jia-500x.jpg",
            "https://img2.wallspic.com/previews/5/1/7/4/5/154715/154715-android_qiong_si-yi_shu-yi_shu_jia-shu_ma_yi_shu-shi_jue_yi_shu-500x.jpg",
            "https://img1.wallspic.com/previews/8/6/3/1/3/131368/131368-shi_zi-shui_cai_hua-shi_jue_yi_shu-chuang_zao_xing_de_yi_shu-yi_shu-500x.jpg",
            "https://img1.wallspic.com/previews/5/2/3/1/4/141325/141325-huan_xiang-guan_bi_le-qi_miao_de_ji_shu-gai_nian_yi_shu-yi_shu_jia-500x.jpg",
        ],
    })
}
</script>
<template>
    <div class="collect-banner">
        <slot></slot>
        <div class="collectionbody" id="collectionbody">
            <LockDiv xyb="143%" class="item"
                :style="{ background: +getThemenum() ? 'white' : '#353840', transition: `all .5s` }"
                v-for="(item, i) in data">
                <RouterLink :to="`/assets/ethereum/${item.id}`">
                    <LockDiv class="top">
                        <div class="img" :style="{ 'background-image': 'url(' + item.img[i] + ')' }"></div>
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

                                <p> 最后销售:￥{{ item.locking_time }}</p>
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
    padding: 0px 8px;
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