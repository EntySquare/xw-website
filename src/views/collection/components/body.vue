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
        name: "Crypto Citizens",
        lowest_price: "1W",
        countdown: 12323,
        img: [
            "https://pbs.twimg.com/profile_images/1581797177801773058/_ZizVWFW_400x400.jpg",
        ],
    })
}
</script>
<template>
    <div class="collect-banner">
        <slot></slot>
        <div class="collectionbody" id="collectionbody">
            <LockDiv xyb="143%" class="item" :style="{ background: +getThemenum() ? 'white' : '#363840' }"
                v-for="item in data">
                <RouterLink :to="`/assets/ethereum/${item.id}`">
                    <LockDiv class="top" :style="{ 'background-image': 'url(' + item.img[0] + ')' }"></LockDiv>
                    <div class="bom">
                        {{ item.name }}
                    </div>
                </RouterLink>
            </LockDiv>
        </div>
    </div>
</template>
<style scoped lang='less'>
.collect-banner {
    padding: 20px 0px 64px;
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
            background-position: center;
            background-size: cover;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;
        }

        .bom {
            height: 100px;
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