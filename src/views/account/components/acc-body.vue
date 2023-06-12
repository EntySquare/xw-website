<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
import { TBanner } from '@/types/cate'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
let mqList = ref()
const getWindowInfo = () => {
  mqList.value = window.matchMedia('(max-width: 1280px)').matches ? 5 : 4
  if (mqList.value == 5) {
    mqList.value = window.matchMedia('(max-width: 845px)').matches ? 6 : 5
  }
}

window.addEventListener('resize', getWindowInfo)
getWindowInfo()
window.addEventListener('resize', getWindowInfo)
const data: TBanner[] = [
  {
    id: 23,
    collect: 1,
    name: 'Crypto Citizens',
    lowest_price: '1W',
    locking_time: 12323,
    opening_time: 342343,
    img: [
      'https://pic4.zhimg.com/80/v2-9d30314c4e59d98a183f9b80247fbae3_720w.webp'
    ]
  },
  {
    id: 343,
    collect: 1,
    name: 'Crypto Citizens',
    lowest_price: '1W',
    locking_time: 12323,
    opening_time: 342343,
    img: [
      'https://pic1.zhimg.com/80/v2-6861bbbf235b9410cf18f2a8744b9988_720w.webp'
    ]
  },
  {
    id: 656,
    collect: 0,
    name: 'Crypto Citizens',
    lowest_price: '2W',
    locking_time: 12323,
    opening_time: 342343,
    img: [
      'https://pic1.zhimg.com/80/v2-9592edbf76d825ccbc97b410a0029e04_720w.webp'
    ]
  },
  {
    id: 74,
    collect: 1,
    name: 'Crypto Citizens',
    lowest_price: '3W',
    locking_time: 12323,
    opening_time: 342343,
    img: [
      'https://pic3.zhimg.com/80/v2-db1ce32f3362ab9ed48b93cf999a8bba_720w.webp'
    ]
  },
  {
    id: 256,
    collect: 1,
    name: 'Crypto Citizens',
    lowest_price: '4W',
    locking_time: 12323,
    opening_time: 342343,
    img: [
      'https://pic4.zhimg.com/80/v2-11afbf42542c5bb7b3f3c98eeac8c5d3_720w.webp'
    ]
  },
  {
    id: 7543,
    collect: 1,
    name: 'Crypto Citizens',
    lowest_price: '3W',
    locking_time: 12323,
    opening_time: 342343,
    img: [
      'https://pic2.zhimg.com/80/v2-52075cb4d04817fc904c4dfc67b90f25_720w.webp'
    ]
  },
  {
    id: 34985,
    collect: 1,
    name: 'Crypto Citizens',
    lowest_price: '4W',
    locking_time: 12323,
    opening_time: 342343,
    img: [
      'https://pic2.zhimg.com/80/v2-ea5e9a1029ab8091fe8b48efa9dbcdf9_720w.webp'
    ]
  }
]
</script>
<script lang="ts">
export default {
  name: 'AccBody'
}
</script>
<template>
  <div class="listcar">
    <!-- 轮播图 -->
    <div class="body-listcar-item" v-for="(item, index) in data" :key="index">
      <RouterLink
        style="height: 100%"
        :to="{
          path: `/collection/${item.name.replaceAll(' ', '')}`,
          query: { id: `${item.id}` }
        }"
      >
        <LockDiv>
          <div
            class="item-top"
            :style="{ 'background-image': 'url(' + item.img[0] + ')' }"
          ></div>
          <div class="item-bom">
            <div class="u">
              <a-typography-title :heading="mqList">
                名字</a-typography-title
              >
              <!-- <icon-check-circle-fill style="color:blue" :size="20" /> -->
            </div>
            <div class="d">
              <a-typography-title>
                <p>当前价格</p>
                <p>¥500</p>
              </a-typography-title>
            </div>
          </div>
        </LockDiv>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped lang="less">
p {
  font-size: 12px;
  text-align: center;
}

.listcar {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 10px 64px;
  gap: 4%;

  .body-listcar-item {
    border: 1px solid transparent;
    margin-bottom: 20px;
    box-sizing: border-box;
    position: relative;
    width: 19.14%;
    background: var(--color-bg-1);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
    transition: all 0.3s;
    color: white;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-8px);
    }

    .item-top {
      height: 60%;
      background-size: cover;
      background-position: center;
    }

    .item-bom {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      box-sizing: border-box;
      height: 40%;
      padding: 15px 20px;

      .u {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .d {
        // padding-top: 10px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
