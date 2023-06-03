<script setup lang="ts" name="HomeFooter">
import useStore from '@/store/index'
import { nextTick, onBeforeUnmount, ref } from 'vue'
let { cate } = useStore()
let { getThemenum } = cate
function one() {
  if (+getThemenum() == 1) {
    document.getElementById('app-topnav')!.style.background = '#fff'
  } else {
    document.getElementById('app-topnav')!.style.background = '#000'
  }
}
function myscroll() {
  let y: number // 记录滚动的距离
  document.getElementById('app-topnav')!.style.background = 'transparent'
  y = document.documentElement.scrollTop //页面滚动距离
  // console.log('y:', y)
  if (y > 35) {
    one()
  } else {
    nextTick(() => {
      document.getElementById('app-topnav')!.style.background = 'transparent'
    })
  }
}
myscroll()
// 页面加载之后挂载事件
document.addEventListener('scroll', myscroll)
onBeforeUnmount(() => {
  one()
  document.removeEventListener('scroll', myscroll)
})
</script>
<script lang="ts">
export default {
  name: 'HomeFooter'
}
</script>
<template>
  <div :class="['footer', { footerbgc: !+getThemenum() }]">
    <div class="cad_app" :class="[{ bgc_white: +getThemenum() }]">
      <img src="@/assets/app.png" alt="" />
    </div>
    <div class="download">
      <div>Ios下载</div>
      <div>Android下载</div>
    </div>
  </div>
  <!-- <div :class="['footer']"></div> -->
</template>
<style scoped lang="less">
.footerbgc {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    #000000 100%
  ) !important;
}

.footer {
  min-height: calc(40vh);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .bgc_white {
    background-color: #000000 !important;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25) !important;
  }
  .cad_app {
    background-color: #fff;
    box-shadow: 0px -4px 10px rgba(254, 254, 254, 0.357);
    width: 110px;
    height: 110px;
    border-radius: 12px;
  }
  .download {
    min-width: 340px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    text-decoration-line: underline;
    margin-top: 40px;
  }
}
</style>
