<script lang="ts" setup>
import router from '@/router'
import {
  getTheme_value,
  isTheme_value,
  setTheme,
  setTheme_value
} from '@/utils/storage'
import { onBeforeUnmount, ref } from 'vue'
import useStore from '@/store/index'
import { nextTick } from 'vue'
const token = localStorage.getItem('token')
let { cate } = useStore()
let { getThemenum } = cate
// 黑夜主题切换按钮绑定数据
const value = ref('')
// 本地存储主题信息
if (!getTheme_value()) {
  //获取本地缓存取反
  setTheme_value('1') //默认白色主题为1
  value.value = isTheme_value() //赋值
} else {
  value.value = `${getTheme_value()}`
  setTheme(value.value)
}

let mqList = ref()
//监听窗口宽度
const getWindowInfo = () => {
  mqList.value = window.matchMedia('(max-width: 845px)').matches ? true : false
}
window.addEventListener('resize', getWindowInfo)
getWindowInfo()

//选择器选中
const handleSelect = (v: any) => {
  console.log(v)
}
//页面挑战
const to = (path: string, id: any = 0) => {
  if (id) {
    router.push({ path: `${path}`, query: { id: `${id}` } })
  } else {
    router.push({ path: `${path}` })
  }
}
let imgurl =
  'https://img2.wallspic.com/previews/6/7/1/8/5/158176/158176-shu_ma_yi_shu-yi_shu-hui_hua-shu_zi_hui_hua-yi_shu_jia-500x.jpg'

onBeforeUnmount(() => {
  // document.removeEventListener('scroll', myscroll);
})

</script>
<script lang="ts">
export default { name: 'AppTopnav' }
</script>
<template>
  <nav class="app-topnav" id="app-topnav">
    <div class="container containergrap">
      <!-- logo标题begin -->
      <RouterLink to="/">
        <div class="logo">
          <img style="width: 55px" alt="avatar" src="@/assets/app.png" />
          <a-typography-title class="title nonetitle" :heading="5">
            玄武数藏
          </a-typography-title>
        </div>
      </RouterLink>
      <!-- logo标题end -->
      <div class="search">
        <!-- 搜索框 -->
        <icon-search size="23" />
        <input type="text" placeholder="Search items, collections, and accounts" />
      </div>
      <div class="tab-bar containergrap">
        <!-- 发现管理begin -->
        <!-- <DropDown :left="-100" title="发现">
          <DropItem @click="to('/')">
            <template #icon> <icon-heart-fill :size="28" /> </template>
            主页
          </DropItem>
          <DropItem @click="to('/')">
            <template #icon> <icon-star-fill :size="28" /> </template>
            收藏
          </DropItem>
          <DropItem @click="to('/')">
            <template #icon> <icon-file-image :size="28" /> </template>
            我的专辑
          </DropItem>
          <DropItem @click="to(`/account/${'1'}`)">
            <template #icon> <icon-edit :size="28" /> </template>
            我的发布
          </DropItem>
          <DropItem @click="to('/')">
            <template #icon> <icon-settings :size="28" /> </template>
            设置
          </DropItem>
          <DropItem @click="to('/')" v-if="!token">
            <template #icon><icon-import :size="28" style="transform: rotate(180deg)" />
            </template>
            登出
          </DropItem>
        </DropDown> -->
        <!-- 发现管理end -->
        <!-- <div style="font-size: 16px; font-weight: 600" @click="to('/download')">
          下载
        </div> -->
        <div style="font-size: 16px; font-weight: 600" @click="to('/rankings/trending')">
          排行
        </div>
        <!-- 切换主题begin -->
        <div class="themer">
          <a-switch :size="mqList ? 'small' : 'medium'" checked-color="#F0EBF2" unchecked-color="#000" v-model="value"
            checked-value="0" unchecked-value="1" @change="setTheme(value)">
            <template #checked-icon>
              <icon-moon-fill style="color: #000" />
            </template>
            <template #unchecked-icon>
              <icon-sun-fill style="color: #000" />
            </template>
          </a-switch>
        </div>
        <!-- 切换主题end -->
      </div>
      <div class="my-setting nonetitle">
        <!-- 个人中心begin -->
        <!-- <DropDown :left="-100" type="click">
          <template #title @click="to('/login/index')">
            <svg t="1677739311126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="1057" width="200" height="200">
              <path
                d="M826.9246918 833.1437955L826.9246918 833.1437955C826.9246918 833.1437955 826.9246918 833.1437955 826.9246918 833.1437955 745.73467666 912.75886602 634.6528499 962 512 962 263.48012685 962 62.01574912 760.50348067 62.01574912 511.9836084 62.01574912 263.46373438 263.48012685 61.99935752 512 61.99935752 760.51987315 61.99935752 961.98425088 263.46373438 961.98425088 511.9836084 961.98425088 637.85063076 910.2039207 751.47165459 826.9246918 833.1437955ZM512 897.71653584C603.34680253 897.71653584 687.17244042 865.79979541 753.25584219 812.70165342 718.06064521 712.74086651 624.01393672 640.55053672 512 640.55053672 399.98606328 640.55053672 305.93935479 712.74086651 270.74415781 812.70165342 336.82755958 865.79979541 420.65319747 897.71653584 512 897.71653584ZM512 126.31496328C298.99674072 126.31496328 126.29921328 299.01249072 126.29921328 512.01574912 126.29921328 608.28023779 161.78368555 696.05930761 220.08878896 763.6533708 270.93700918 653.1500955 382.37239443 576.29921328 512 576.29921328 641.59546396 576.29921328 753.06299082 653.1500955 803.91121104 763.6533708 862.21631445 696.09144922 897.70078672 608.28023779 897.70078672 512.01574912 897.70078672 299.01249072 725.00325928 126.31496328 512 126.31496328ZM512 544.15748164C423.22453526 544.15748164 351.29133916 472.19214307 351.29133916 383.4488208 351.29133916 294.67335605 423.22453526 222.74015996 512 222.74015996 600.74332227 222.74015996 672.70866084 294.67335605 672.70866084 383.4488208 672.70866084 472.19214307 600.74332227 544.15748164 512 544.15748164ZM512 287.02362412C458.74115 287.02362412 415.57480332 330.1899708 415.57480332 383.41667832 415.57480332 436.6755292 458.74115 479.84187588 512 479.84187588 565.25885 479.84187588 608.42519668 436.6755292 608.42519668 383.41667832 608.42519668 330.1899708 565.25885 287.02362412 512 287.02362412Z"
                fill="#2c2c2c" p-id="1058"></path>
            </svg>
          </template>
        </DropDown> -->
        <!-- <svg v-if="!token" @click="to('/login/index')" t="1677739311126" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1057" width="200" height="200">
          <path
            d="M826.9246918 833.1437955L826.9246918 833.1437955C826.9246918 833.1437955 826.9246918 833.1437955 826.9246918 833.1437955 745.73467666 912.75886602 634.6528499 962 512 962 263.48012685 962 62.01574912 760.50348067 62.01574912 511.9836084 62.01574912 263.46373438 263.48012685 61.99935752 512 61.99935752 760.51987315 61.99935752 961.98425088 263.46373438 961.98425088 511.9836084 961.98425088 637.85063076 910.2039207 751.47165459 826.9246918 833.1437955ZM512 897.71653584C603.34680253 897.71653584 687.17244042 865.79979541 753.25584219 812.70165342 718.06064521 712.74086651 624.01393672 640.55053672 512 640.55053672 399.98606328 640.55053672 305.93935479 712.74086651 270.74415781 812.70165342 336.82755958 865.79979541 420.65319747 897.71653584 512 897.71653584ZM512 126.31496328C298.99674072 126.31496328 126.29921328 299.01249072 126.29921328 512.01574912 126.29921328 608.28023779 161.78368555 696.05930761 220.08878896 763.6533708 270.93700918 653.1500955 382.37239443 576.29921328 512 576.29921328 641.59546396 576.29921328 753.06299082 653.1500955 803.91121104 763.6533708 862.21631445 696.09144922 897.70078672 608.28023779 897.70078672 512.01574912 897.70078672 299.01249072 725.00325928 126.31496328 512 126.31496328ZM512 544.15748164C423.22453526 544.15748164 351.29133916 472.19214307 351.29133916 383.4488208 351.29133916 294.67335605 423.22453526 222.74015996 512 222.74015996 600.74332227 222.74015996 672.70866084 294.67335605 672.70866084 383.4488208 672.70866084 472.19214307 600.74332227 544.15748164 512 544.15748164ZM512 287.02362412C458.74115 287.02362412 415.57480332 330.1899708 415.57480332 383.41667832 415.57480332 436.6755292 458.74115 479.84187588 512 479.84187588 565.25885 479.84187588 608.42519668 436.6755292 608.42519668 383.41667832 608.42519668 330.1899708 565.25885 287.02362412 512 287.02362412Z"
            fill="#2c2c2c" p-id="1058"></path>
        </svg> -->
        <!-- 个人中心end -->
        <!-- 扫码登陆begin -->
        <!-- <DropDown :left="- 100" type="click" :pop_up="true">
          <template #title>
            <svg t="1677739423959" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="1516" width="200" height="200">
              <path d="M575.69382709 511.6938271h0.6123458v0.6123458H575.69382709z" fill="#2c2c2c" p-id="1517"></path>
              <path
                d="M202.625 195.59374999c-38.7703125 0-70.3125 31.5421875-70.3125 70.31250002v492.18749998c0 38.7703125 31.5421875 70.3125 70.3125 70.31250002h618.75c38.7703125 0 70.3125-31.5421875 70.3125-70.3125V265.90624999c0-38.7703125-31.5421875-70.3125-70.3125-70.31249998H202.625m0-70.3125h618.75c77.66542969 0 140.625 62.95957031 140.625 140.62499998v492.18750002c0 77.66542969-62.95957031 140.625-140.625 140.62499998H202.625c-77.66542969 0-140.625-62.95957031-140.625-140.62499998V265.90624999c0-77.66542969 62.95957031-140.625 140.625-140.62499998z"
                fill="#2c2c2c" p-id="1518"></path>
              <path
                d="M617.46875001 417.078125c-19.38515625 0-35.15625001 15.77109375-35.15625001 35.15625v119.53125c0 19.38515625 15.77109375 35.15625001 35.15624999 35.15625h274.21875001V417.078125H617.46875001m-2e-8-70.3125h344.53125001v330.46875H617.46875001c-58.24863281 0-105.46875001-47.22011719-105.46875001-105.46875v-119.53125c0-58.24863281 47.22011719-105.46875001 105.46875001-105.46875z"
                fill="#2c2c2c" p-id="1519"></path>
              <path
                d="M821.375 476.84374999a35.15625001 35.15625001 0 1 1-35.15625001 35.15625001 35.15625001 35.15625001 0 0 1 35.15625001-35.15625001z"
                fill="#2c2c2c" p-id="1520"></path>
            </svg>
          </template>
          <template #body> </template>
        </DropDown> -->
        <!-- 扫码登陆end -->
        <!-- 购物车begin -->
        <!-- <DropDown :left="- 100" type="click" :pop_up="true">
          <template #title>
            <svg t="1677739355444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="1364" width="200" height="200">
              <path
                d="M768 938.666667c-46.933333 0-85.333333-38.4-85.333333-85.333334s38.4-85.333333 85.333333-85.333333 85.333333 38.4 85.333333 85.333333-38.4 85.333333-85.333333 85.333334zM341.333333 938.666667c-46.933333 0-85.333333-38.4-85.333333-85.333334s38.4-85.333333 85.333333-85.333333 85.333333 38.4 85.333334 85.333333-38.4 85.333333-85.333334 85.333334z m469.333334-213.333334H341.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333 0-12.8 4.266667-29.866667 8.533333-42.666667l59.733334-106.666666L170.666667 170.666667H128c-8.533333 0-17.066667 0-21.333333-4.266667-12.8-8.533333-21.333333-21.333333-21.333334-38.4 0-21.333333 17.066667-42.666667 42.666667-42.666667h98.133333l38.4 85.333334H896c25.6 0 42.666667 17.066667 42.666667 42.666666 0 8.533333 0 12.8-4.266667 21.333334L780.8 512c-17.066667 25.6-42.666667 42.666667-76.8 42.666667H388.266667l-38.4 68.266666v4.266667c0 4.266667 4.266667 8.533333 8.533333 8.533333H810.666667c8.533333 0 17.066667 0 21.333333 4.266667 12.8 8.533333 21.333333 21.333333 21.333333 38.4 0 25.6-17.066667 46.933333-42.666666 46.933333zM298.666667 256l98.133333 213.333333h311.466667l123.733333-213.333333H298.666667z"
                fill="#2c2c2c" p-id="1365"></path>
            </svg>
          </template>
          <template #body>
            <div class="cart">
             
              <div class="cartitem">
                <div v-for=" item  in  8" class="item">
                  <LockDiv width="110px" xyb="110px">
                    <div class="img" :style="{
                      'background-image': 'url(' + `${imgurl}` + ')'
                    }"></div>
                  </LockDiv>
                  <div class="information">
                    <div class="t">
                      <span>醒目猴</span>
                      <span>版本号1/200</span>
                    </div>
                    <div class="b">
                      <span><i>¥</i>500</span>
                      <span><i>x</i>1</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="btn">
                <div class="top"><span>¥</span><span>1000</span></div>
                <div class="btn">
                  <div class="pay">立即支付</div>
                </div>
              </div>
            </div>
          </template>
        </DropDown> -->
        <!-- 购物车数据循环体end -->
        <div style="font-size: 16px; font-weight: 600" @click="to('/login')">
          注册
        </div>
      </div>
      <!-- 移动设备显示begin -->
      <div class="blacktitle">
        <a-dropdown @select="handleSelect" trigger="hover" class="dropdown" style="position: fixed; overflow: hidden">
          <icon-menu size="20px" />
          <template #content>
            <a-doption @click="to('/login')">
              <svg t="1677739311126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1057" width="20" height="20">
                <path
                  d="M826.9246918 833.1437955L826.9246918 833.1437955C826.9246918 833.1437955 826.9246918 833.1437955 826.9246918 833.1437955 745.73467666 912.75886602 634.6528499 962 512 962 263.48012685 962 62.01574912 760.50348067 62.01574912 511.9836084 62.01574912 263.46373438 263.48012685 61.99935752 512 61.99935752 760.51987315 61.99935752 961.98425088 263.46373438 961.98425088 511.9836084 961.98425088 637.85063076 910.2039207 751.47165459 826.9246918 833.1437955ZM512 897.71653584C603.34680253 897.71653584 687.17244042 865.79979541 753.25584219 812.70165342 718.06064521 712.74086651 624.01393672 640.55053672 512 640.55053672 399.98606328 640.55053672 305.93935479 712.74086651 270.74415781 812.70165342 336.82755958 865.79979541 420.65319747 897.71653584 512 897.71653584ZM512 126.31496328C298.99674072 126.31496328 126.29921328 299.01249072 126.29921328 512.01574912 126.29921328 608.28023779 161.78368555 696.05930761 220.08878896 763.6533708 270.93700918 653.1500955 382.37239443 576.29921328 512 576.29921328 641.59546396 576.29921328 753.06299082 653.1500955 803.91121104 763.6533708 862.21631445 696.09144922 897.70078672 608.28023779 897.70078672 512.01574912 897.70078672 299.01249072 725.00325928 126.31496328 512 126.31496328ZM512 544.15748164C423.22453526 544.15748164 351.29133916 472.19214307 351.29133916 383.4488208 351.29133916 294.67335605 423.22453526 222.74015996 512 222.74015996 600.74332227 222.74015996 672.70866084 294.67335605 672.70866084 383.4488208 672.70866084 472.19214307 600.74332227 544.15748164 512 544.15748164ZM512 287.02362412C458.74115 287.02362412 415.57480332 330.1899708 415.57480332 383.41667832 415.57480332 436.6755292 458.74115 479.84187588 512 479.84187588 565.25885 479.84187588 608.42519668 436.6755292 608.42519668 383.41667832 608.42519668 330.1899708 565.25885 287.02362412 512 287.02362412Z"
                  fill="#2c2c2c" p-id="1058"></path>
              </svg>
              注册
            </a-doption>
            <!-- <a-doption>
              <svg t="1677739423959" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1516" width="20" height="20">
                <path d="M575.69382709 511.6938271h0.6123458v0.6123458H575.69382709z" fill="#2c2c2c" p-id="1517"></path>
                <path
                  d="M202.625 195.59374999c-38.7703125 0-70.3125 31.5421875-70.3125 70.31250002v492.18749998c0 38.7703125 31.5421875 70.3125 70.3125 70.31250002h618.75c38.7703125 0 70.3125-31.5421875 70.3125-70.3125V265.90624999c0-38.7703125-31.5421875-70.3125-70.3125-70.31249998H202.625m0-70.3125h618.75c77.66542969 0 140.625 62.95957031 140.625 140.62499998v492.18750002c0 77.66542969-62.95957031 140.625-140.625 140.62499998H202.625c-77.66542969 0-140.625-62.95957031-140.625-140.62499998V265.90624999c0-77.66542969 62.95957031-140.625 140.625-140.62499998z"
                  fill="#2c2c2c" p-id="1518"></path>
                <path
                  d="M617.46875001 417.078125c-19.38515625 0-35.15625001 15.77109375-35.15625001 35.15625v119.53125c0 19.38515625 15.77109375 35.15625001 35.15624999 35.15625h274.21875001V417.078125H617.46875001m-2e-8-70.3125h344.53125001v330.46875H617.46875001c-58.24863281 0-105.46875001-47.22011719-105.46875001-105.46875v-119.53125c0-58.24863281 47.22011719-105.46875001 105.46875001-105.46875z"
                  fill="#2c2c2c" p-id="1519"></path>
                <path
                  d="M821.375 476.84374999a35.15625001 35.15625001 0 1 1-35.15625001 35.15625001 35.15625001 35.15625001 0 0 1 35.15625001-35.15625001z"
                  fill="#2c2c2c" p-id="1520"></path>
              </svg>
              钱包
            </a-doption>
            <a-doption>
              <svg t="1677739355444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1364" width="20" height="20">
                <path
                  d="M768 938.666667c-46.933333 0-85.333333-38.4-85.333333-85.333334s38.4-85.333333 85.333333-85.333333 85.333333 38.4 85.333333 85.333333-38.4 85.333333-85.333333 85.333334zM341.333333 938.666667c-46.933333 0-85.333333-38.4-85.333333-85.333334s38.4-85.333333 85.333333-85.333333 85.333333 38.4 85.333334 85.333333-38.4 85.333333-85.333334 85.333334z m469.333334-213.333334H341.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333 0-12.8 4.266667-29.866667 8.533333-42.666667l59.733334-106.666666L170.666667 170.666667H128c-8.533333 0-17.066667 0-21.333333-4.266667-12.8-8.533333-21.333333-21.333333-21.333334-38.4 0-21.333333 17.066667-42.666667 42.666667-42.666667h98.133333l38.4 85.333334H896c25.6 0 42.666667 17.066667 42.666667 42.666666 0 8.533333 0 12.8-4.266667 21.333334L780.8 512c-17.066667 25.6-42.666667 42.666667-76.8 42.666667H388.266667l-38.4 68.266666v4.266667c0 4.266667 4.266667 8.533333 8.533333 8.533333H810.666667c8.533333 0 17.066667 0 21.333333 4.266667 12.8 8.533333 21.333333 21.333333 21.333333 38.4 0 25.6-17.066667 46.933333-42.666666 46.933333zM298.666667 256l98.133333 213.333333h311.466667l123.733333-213.333333H298.666667z"
                  fill="#2c2c2c" p-id="1365"></path>
              </svg>
              购物车
            </a-doption> -->
          </template>
        </a-dropdown>
      </div>
      <!-- 移动设备显示end -->
    </div>
  </nav>
</template>

<style scoped lang="less">
.cart {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 15px;

  .cartitem {
    overflow-y: auto;
    flex: 1;

    .item {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      margin-bottom: 20px;
      height: 110px;

      .img {
        height: 100%;
        width: 110px;
        background-size: cover;
        background-position: center;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      .information {
        color: white;
        font-weight: 600;
        padding: 10px;
        flex: 1;

        .t {
          height: 50%;
          display: flex;
          flex-direction: column;

          span {
            &:nth-child(1) {
              font-size: 15px;
            }

            &:nth-child(2) {
              margin-top: 5px;
              font-size: 12px;
            }
          }
        }

        .b {
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: end;
          align-items: end;

          span {
            &:nth-child(1) {
              font-size: 16px;
            }

            &:nth-child(2) {
              background: linear-gradient(162.55deg,
                  #3ffff3 3.18%,
                  #e127ff 82.44%);
              -webkit-background-clip: text;
              -moz-background-clip: text;
              background-clip: text;
              color: transparent;
              margin-top: 5px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .btn {
    height: 150px;

    .top {
      height: 36px;
      border-bottom: 1px solid white;
      display: flex;
      justify-content: end;
      align-items: center;

      span {
        font-weight: 400;

        &:nth-child(1) {
          font-size: 15px;
        }

        &:nth-child(2) {
          font-size: 24px;
        }
      }
    }

    .btn {
      padding-top: 20px;

      .pay {
        background: linear-gradient(162.55deg,
            #3ffff3aa 3.18%,
            #e127ffaa 82.44%);
        height: 40px;
        font-weight: 400;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        border-radius: 39px;
      }
    }
  }
}

.app-topnav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 85px;
  // border-bottom: 1px solid rgb(var(--arcoblue-3));

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 2560px;
    gap: 40px;
    padding: 0 70px;

    .logo {
      display: flex;
      height: 85px;
      align-items: center;
      gap: 20px;

      .title {
        margin: 0;
        font-size: '24px';
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
      }
    }

    .search {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      height: 36.67px;
      padding: 0 8px;
      border-radius: 45px;
      background: rgba(28, 90, 184, 0.3);
      color: white;

      &:hover {
        background: rgba(28, 90, 184, 0.6);
      }

      input {
        width: 100%;
        height: 22px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        color: white;
        background: rgba(0, 0, 0, 0);
        overflow: hidden;

        &::placeholder {
          color: white;
          font-size: 15px;
        }
      }
    }

    .tab-bar {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .my-setting {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 25px;

      svg {
        height: 26px;
        width: 26px;

        path {
          fill: var(--color-text-1);
        }
      }
    }
  }
}

.dropdown {
  font-weight: 700;

  svg {
    vertical-align: middle;
    height: 25px;
    width: 25px;

    path {
      fill: var(--color-text-1);
    }
  }
}

.blacktitle {
  // background-color: #fff;
  height: 20px;
  display: none;
}

:deep(.arco-dropdown-option) {
  border-bottom: 1px solid var(--color-neutral-4);
  padding: 6px 25px;
  width: 220px;
  font-size: 16px;
  font-weight: 700;

  &:last-child {
    border-bottom: none;
  }
}
</style>
