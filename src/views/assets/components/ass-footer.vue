<script setup lang="ts" name="HomeFooter">
import useStore from '@/store/index'
import { nextTick, onBeforeUnmount, ref } from 'vue'
let { cate } = useStore()
let { getThemenum } = cate
function one() {
  if (+getThemenum() == 1) {
    document.getElementById('app-topnav')!.style.background = '#F0EBF2'
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
    <div class="footerup">
      <div class="left">
        <div>
          <div>一起来玩</div>
          <div>
            你最好是给我一起来玩不然我派出我们公司的最窝囊的职员去干掉你
            <div class="icons joinflex">
              <!-- <div class="icon-item"><icon-twitter /></div> -->
              <div class="icon-item"><icon-wechat /></div>
              <!-- <div class="icon-item"><icon-send /></div> -->
              <!-- <div class="icon-item"><icon-tiktok-color /></div> -->
              <div class="icon-item"><icon-email /></div>
            </div>
          </div>
        </div>
        <div class="inputphone">
          <div class="input">
            <input type="text" placeholder="邮箱地址/电话号码" />
          </div>
          <button>注册账号</button>
        </div>
      </div>
      <div class="right joinnone">
        <div>加入社区</div>
        <div class="icons">
          <!-- <div class="icon-item"><icon-twitter /></div> -->
          <div class="icon-item"><icon-wechat /></div>
          <!-- <div class="icon-item"><icon-send /></div> -->
          <!-- <div class="icon-item"><icon-tiktok-color /></div> -->
          <div class="icon-item"><icon-email /></div>
        </div>
      </div>
    </div>
    <div class="footermi">
      <div class="left">
        <a-avatar :size="55">
          <img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-avatar>
        <div>玄武数藏</div>
        <div>
          一些文字介绍，品牌文化背景，一些愿景和主要就是一个装逼的大动作
        </div>
      </div>
      <div class="right">
        <ul>
          <!-- <li>市场</li> -->
          <li>全部作品</li>
          <li>类别1</li>
          <li>类别2</li>
          <li>类别3</li>
          <li>主推</li>
        </ul>
        <ul>
          <li>我的账号</li>
          <li>主页</li>
          <li>收藏</li>
          <li>心愿单</li>
          <li>我的专辑</li>
          <li>我的发布</li>
          <li>设置</li>
        </ul>
        <ul>
          <li>资源</li>
          <li>帮助中心</li>
          <li>合作伙伴</li>
          <li>新闻</li>
        </ul>
      </div>
    </div>
    <div class="footerdo">
      <div class="left">
        <icon-copyright />
        <span>2023-2023 EntySquare </span>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          粤ICP备2023061389号-1</a
        >
      </div>
      <div class="right">
        <span>隐私协议</span>
        <span>服务条款</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.footerbgc {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    #3d82db 100%
  ) !important;
}

.footer {
  width: 100vw;
  background: #1c5ab8;
  color: white !important;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px 15px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: white !important;
  }
  .footerup {
    // background-color: pink;
    box-sizing: border-box;
    width: 90vw;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    border-bottom: 1px solid #a9a9a949;
    padding: 20px 8vw;
    gap: 50px;
    margin: 50px 100px 0 100px;

    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      // background-color: red;
    }

    > .left {
      flex: 2;

      .icons {
        display: none;
        position: absolute;
        top: -100px;
        right: 0;
        padding-top: 10px;
        // display: flex;

        .icon-item {
          cursor: pointer;
          height: 50px;
          width: 50px;
          background-color: #3d82db;
          border-radius: 15px;
          text-align: center;
          line-height: 50px;
          margin-right: 10px;
          font-size: 20px;

          &:nth-child(2) {
            display: block;
          }

          &:nth-child(3) {
            svg {
              transform: rotateZ(-40deg);
            }
          }
        }
      }

      div {
        div {
          &:first-child {
            font-size: 26px;
            font-weight: 600;
          }
        }

        &:nth-child(2) {
          display: flex;
          position: relative;
        }
      }

      .inputphone {
        padding-top: 40px;
        display: flex;
        gap: 10px;

        .input {
          max-width: 600px;
          // min-width: 350px;
          flex: 1;
          background-color: white;
          padding: 18px 24px;
          border-radius: 15px;
          display: flex;

          input {
            width: 100%;
            // height: 100%;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            border: none;
            background: rgba(255, 255, 255, 0);

            &::placeholder {
              color: rgba(0, 0, 0, 0.647);
              background-color: #fff;
            }
          }
        }

        button {
          font-size: 16px;
          min-width: 150px;
          cursor: pointer;
          padding: 0 30px;
          background-color: #4280de;
          color: white;
          border: 1px solid #99989887;
          border-radius: 15px;
        }
      }
    }

    > .right {
      div {
        &:first-child {
          font-size: 26px;
          font-weight: 600;
        }
      }

      .icons {
        padding-top: 10px;
        display: flex;

        .icon-item {
          cursor: pointer;
          height: 50px;
          width: 50px;
          background-color: #3d82db;
          border-radius: 15px;
          text-align: center;
          line-height: 50px;
          margin-right: 10px;
          font-size: 20px;

          &:nth-child(3) {
            svg {
              transform: rotateZ(-40deg);
            }
          }
        }
      }
    }
  }

  .footermi {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    gap: 30px;
    justify-content: space-between;
    border-bottom: 1px solid #a9a9a949;
    padding: 50px 8vw;
    margin: 0 100px 0 100px;

    > .left {
      flex: 2;

      div {
        &:nth-child(2) {
          font-size: 20px;
          font-weight: 600;
          line-height: 60px;
        }
      }
    }

    .right {
      flex: 1;
      display: flex;

      ul {
        font-weight: 700;

        li {
          min-width: 110px;
          font-size: 18px;
          line-height: 38px;
          cursor: pointer;
        }
      }
    }
  }

  .footerdo {
    display: flex;
    width: 92vw;
    padding: 10px 0;
    font-size: 16px !important;
    font-weight: 600;
    justify-content: space-between;

    .right {
      display: flex;
      gap: 10px;
    }
  }
}
</style>
