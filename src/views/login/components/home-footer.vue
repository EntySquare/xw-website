<script setup lang="ts" name="HomeFooter">
import { getPhone, register } from '@/apis/login'
import useStore from '@/store/index'
import { nextTick, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Message } from "@arco-design/web-vue";
import { onMounted } from 'vue';
import { computed } from 'vue';
import router from '@/router';
const route = useRoute()
const params = ref({
  code: '',
  phone: '',
  referral_code: route.query.code || '',
  tag: ''
})
const countDown = ref(60)
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
const regex = /^\s+|\s+$/g;//去空格表达式
const regep = /^1[3456789]\d{9}$/; // 手机号正则表达式
const sendMessage = async () => {
  if (countDown.value < 59) return
  params.value.phone = params.value.phone.replace(regex, "");//去收尾空格
  if (!params.value.phone.length) {
    Message.error({
      content: "请输入手机号",
      closable: true,
      duration: 2000,
    });
    return
  } else if (!regep.test(params.value.phone)) {
    Message.error({
      content: "请输入正确的手机号",
      closable: true,
      duration: 2000,
    });
    return
  } else {
    const res = await getPhone({ phone: params.value.phone || '' })
    params.value.tag = res?.data?.json?.tag || ''
    let timer = setInterval(() => {
      countDown.value--
      if (countDown.value <= 0) {
        clearInterval(timer)
        countDown.value = 60
      }
    }, 1000)
  }
}
const loginSubmit = async () => {
  params.value.phone = params.value.phone.replace(regex, "");//去收尾空格
  if (!params.value.phone.length) {
    Message.error({
      content: "请输入手机号",
      closable: true,
      duration: 2000,
    });
    return
  } else if (!regep.test(params.value.phone)) {
    Message.error({
      content: "请输入正确的手机号",
      closable: true,
      duration: 2000,
    });
    return
  } else if (!params.value.code.length) {
    Message.error({
      content: "请输入手机验证码",
      closable: true,
      duration: 2000,
    });
    return
  } else {
    try {
      const res = await register({ ...params.value })
      localStorage.setItem('token', res?.data?.json?.token || '')
      router.go(-1)
      setTimeout(() => {
        window.location.reload()
      }, 100)
    } catch (error) {
      console.log('error:', error);
    }

  }
}
let mqList = ref(false)
const getWindowInfo = () => {
  mqList.value = window.matchMedia('(max-width: 480px)').matches
  console.log('mqList.value:', mqList.value)
}
getWindowInfo()
window.addEventListener('resize', getWindowInfo)


//判断是否为微信浏览器
const isWeixin = () => {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger' as any) {
    return true
  } else {
    return false
  }
}
//判断是否为移动端
const isMobile = () => {
  var ua = navigator.userAgent.toLowerCase()
  if (
    ua.match(/Android/i) == 'android' as any ||
    ua.match(/iPhone/i) == 'iphone' as any ||
    ua.match(/iPad/i) == 'ipad' as any
  ) {
    return true
  } else {
    return false
  }
}
function download(i) {
  if (isMobile()) {
    if (isWeixin()) {
      Message.success({
        content: "请点击右上角 ... 在浏览器中打开。",
        closable: true,
        duration: 2000,
      });
    } else
      if (i == 1) {// ios
        window.location.href = 'https://download.bmquv.cn:8750/h3pnaw?t=1687324526'
      } else if (i == 2) { // android
        {
          window.location.href = 'https://xuanwu-nft.oss-cn-beijing.aliyuncs.com/apk/xuanwoo.apk'
        }
      }
  }
}

</script>
<template>
  <div :class="['footer', { footerbgc: !+getThemenum() }]">
    <div class="login_message">
      <div class="title_text">手机号</div>
      <input id="myInput" type="text" v-model="params.phone" maxlength="11" class="input_btn"
        :style="mqList ? 'width:80% !important;' : ''">
      <div class="title_text">验证码</div>
      <div class="send_message" :style="mqList ? 'width:80% !important;' : ''">
        <input type="text" v-model="params.code" class="input_btn send_input"
          :style="mqList ? 'width:100% !important;' : ''" />
        <div class="send_btn" @click="sendMessage">{{ countDown == 60 ? '获取验证码' : countDown + 's' }}</div>
      </div>
      <div class="title_text">邀请码</div>
      <input type="text" class="input_btn" v-model="params.referral_code" :style="mqList ? 'width:80% !important;' : ''">
      <div class="submit_btn" @click="loginSubmit">注册</div>
    </div>
    <div class="cad_app" :class="[{ bgc_white: +getThemenum() }]">
      <img src="@/assets/app.png" alt="" />
    </div>
    <div class="download">
      <div @click="download(1)">Ios下载</div>
      <div @click="download(2)">Android下载</div>
    </div>
  </div>
</template>
<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}

.footerbgc {
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 100%) !important;
}

.footer {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;

  input {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }

  .title_text {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    // margin-bottom: 12px;
  }

  .input_btn {
    width: 352px;
    height: 45px;
    padding: 0 20px;
    margin: 12px 0 20px;
    background: linear-gradient(162.55deg, rgba(194, 255, 251, 0.165) 3.18%, rgba(245, 184, 255, 0.5) 82.44%);
    backdrop-filter: blur(25px);
    border-radius: 8px;
  }

  .send_message {
    width: 352px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin: 12px 0 20px;
    // margin-bottom: 20px;

    .send_input {
      width: 352px;
      height: 45px;
      padding: 0 143px 0 20px;
      margin: 0;
      background: linear-gradient(162.55deg, rgba(194, 255, 251, 0.165) 3.18%, rgba(245, 184, 255, 0.5) 82.44%);
      backdrop-filter: blur(25px);
      border-radius: 8px;
    }

    .send_btn {
      position: absolute;
      width: 123px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      top: 0;
      right: 0;
      background: radial-gradient(66.38% 68.89% at 50.41% 51.11%, #25BBB2 0%, #D861EC 100%);
      backdrop-filter: blur(25px);
      border-radius: 8px;
      z-index: 10;
    }
  }

  .submit_btn {
    box-sizing: border-box;
    width: 180px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    background: radial-gradient(66.38% 68.89% at 50.41% 51.11%, #25BBB2 0%, #D861EC 100%);
    border-radius: 8px;
    margin-bottom: 5vh;
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
