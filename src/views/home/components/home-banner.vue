<script lang="ts" setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
let img =
  "https://pbs.twimg.com/profile_images/1581797177801773058/_ZizVWFW_400x400.jpg";
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <Splide class="banner" :options="{ rewind: false }">
      <SplideSlide>
        <div class="listcar">
          <div
            v-for="item in 3"
            class="listcar-item"
            :style="{ 'background-image': 'url(' + img + ')' }"
          >
            <div class="item-top"><i></i></div>
            <div class="item-bom">
              <div class="left">
                <div class="u">Crypto Citizens</div>
                <div class="d">地板价：xxx</div>
              </div>
              <div class="right">
                <div class="u">倒计时</div>
                <div class="d"><i>05</i>:<i>05</i>:<i>05</i></div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="listcar"></div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 100%;
  height: 14.2vw;
  padding: 53px 0px 64px;
  .banner {
    width: 100%;
    height: 14.2vw;
  }
}

.listcar {
  display: flex;
  padding: 0 1%;
  gap: 2%;
  .listcar-item {
    // min-width: 436px;
    position: relative;
    width: 32%;
    height: 14.2vw;
    background-size: 100%;
    background-position: center;
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
      i {
        display: block;
        width: 38px;
        height: 38px;
        background-size: cover;
        background-image: url("@/assets/icon/星星.png");
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
