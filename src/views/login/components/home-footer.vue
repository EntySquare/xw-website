<script setup lang="ts" name="HomeFooter">
import useStore from '@/store/index'
import { nextTick, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const routeCode = ref(route.query.code || '')
let xxxxx = ''
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
const changePhone = () => {
  const maxLength = 11; // 最大长度
  // console.log(xxxxx.slice(0, maxLength));

  if (xxxxx.toString().length > maxLength) {
    xxxxx = xxxxx.toString().slice(0, maxLength); // 截取到最大长度
    xxxxx = Number(xxxxx);
  }
  console.log(xxxxx);

}

</script>
<script lang="ts">
export default {
  name: 'HomeFooter'
}
</script>
<template>
  <div :class="['footer', { footerbgc: !+getThemenum() }]">
    <div class="login_message">
      <div>手机号</div>
      <input id="myInput" @input="changePhone" type="text" v-model="xxxxx" maxlength="11">
      <div>验证码</div>
      <input type="text" v-model="routeCode">
      <input type="text" disabled v-model="routeCode">
      <div>登录 / 注册</div>

    </div>
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
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 100%) !important;
}

.footer {
  min-height: 80vh;
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

.login_message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 352px;
    height: 45px;
    padding: 0 20px;
    margin: 12px 0 20px;
    background: linear-gradient(162.55deg, rgba(194, 255, 251, 0.165) 3.18%, rgba(245, 184, 255, 0.5) 82.44%);
    backdrop-filter: blur(25px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
