<script setup lang="ts">
import { TBanner } from "@/types/cate";
import { ref } from "vue";
const prop = defineProps<{
  data: TBanner[];
  type: number;
  num: number;
}>();
const datas = ref()
datas.value = prop.data
const setCollect = (i: number) => {
  datas.value[i].collect = datas.value[i].collect ? 0 : 1
}
</script>
<template>
  <div>
    <div class="listcar">
      <div v-if="!datas">
        <XtxSkeleton :width="100" heightB="14.2vw" :fade="true" :animated="true"></XtxSkeleton>
      </div>
      <div v-for="(item, i) in datas" :style="{ 'background-image': 'url(' + `${item.img[0]}` + ')' }" :class="[
        {
          none:
            (i > num * (type - 1) && num == 1) || //
            i < (num - 1) * type ||
            i > num * type - 1,
        },
        'listcar-item',
      ]">
        <LockDiv xyb="56%">
          <div class="bannercontent">
            <div class="item-top">
              <i @click="setCollect(i)" :class="item.collect ? 'i2' : 'i1'"></i>
            </div>
            <div class="item-bom">
              <div class="left">
                <div class="u">{{ item.name }}</div>
                <div class="d">地板价：{{ item.lowest_price }}</div>
              </div>
              <div class="right">
                <div class="u">倒计时</div>
                <div class="d"><i>05</i>:<i>05</i>:<i>05</i></div>
              </div>
            </div>
          </div>
        </LockDiv>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.listcar {
  display: flex;
  padding: 0 1%;

  .none {
    display: none !important;
  }

  .listcar-item {
    position: relative;
    width: 32.8%;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 14px;
    overflow: hidden;
    transition: all 0.5s;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      transition: all 1s;
      background: linear-gradient(rgba(255, 255, 255, 0) 20%, #326abf 100%);
    }

    &:hover {
      background-size: 108%;

      &::before {
        background: linear-gradient(rgba(255, 255, 255, 0) 20%, #c460c6 100%);
      }
    }

    .item-top {
      position: relative;
      z-index: 1;
      padding: 1vw;
      display: flex;
      justify-content: end;

      @keyframes animation1 {
        0% {
          transform: scale(0.5)
        }

        100% {
          transform: scale(0.9)
        }
      }

      .i1,
      .i2 {
        display: block;
        width: 38px;
        height: 38px;
        background-size: cover;
        background-image: url("@/assets/icon/xx0.png");
      }

      .i2 {
        background-image: url("@/assets/icon/xx1.png");
        transform-style: preserve-3d;
        animation: animation1 .1s linear;

      }
    }

    .item-bom {
      padding: 18px 15px;
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: end;

      .left {
        .u {
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 5px;
        }

        .d {
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: center;

        .u {
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
        }

        .d {
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;

          i {
            display: inline-block;
            width: 45px;
            height: 45px;
            line-height: 45px;
            border-radius: 12px;
            background-color: #00000081;
            text-align: center;
          }
        }
      }
    }
  }
}

.bannercontent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background-color: plum;
}
</style>
