<script setup lang="ts">
import { TBanner } from "@/types/cate";
defineProps<{
  data: TBanner[];
  type: number;
  num: number;
}>();
</script>
<template>
  <div>
    <div class="listcar">
      <div
        v-for="(item, i) in data"
        :style="{ 'background-image': 'url(' + item.img[0] + ')' }"
        :class="[
          {
            none:
              (i > num * (type - 1) && num == 1) || //
              i < (num - 1) * type ||
              i > num * type - 1,
          },
          'listcar-item',
        ]"
      >
        <div class="item-top">
          <i :class="item.collect ? 'i2' : 'i1'"></i>
        </div>
        <div class="item-bom">
          <div class="left">
            <div class="u">{{ i + item.name }}</div>
            <div class="d">地板价：{{ item.lowest_price }}</div>
          </div>
          <div class="right">
            <div class="u">倒计时</div>
            <div class="d"><i>05</i>:<i>05</i>:<i>05</i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.listcar {
  display: flex;
  padding: 0 1%;
  gap: 2%;
  .none {
    display: none !important;
  }
  .listcar-item {
    // min-width: 436px;
    position: relative;
    width: 32%;
    // min-width: 380px;
    min-height: 245px;
    height: 14.2vw;
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
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 5px;
        }
        .d {
          font-weight: 700;
          font-size: 12px;
          line-height: 18px;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        .u {
          font-weight: 700;
          font-size: 12px;
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
</style>
