<script setup lang="ts">
import { topAll } from '@/apis/ranking'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const imgurl =
  'https://i.seadn.io/gcs/files/266274c8643e1c9d0659cb60bf06f740.png?auto=format&w=384'
let mqList = ref(false)
//监听窗口宽度
const getWindowInfo = () => {
  mqList.value = window.matchMedia('(max-width: 1024px)').matches ? true : false
}
window.addEventListener('resize', getWindowInfo)
getWindowInfo()
onBeforeUnmount(() => {
  document.removeEventListener('resize', getWindowInfo)
})
const changeTimeType = ref('24小时')
let timeType = 0
let hotList = ref([])
const getHotLlst = async () => {
  try {
    const res = await topAll({ time_type: timeType });
    hotList.value = res.data?.json?.data_list || [];
    console.log(hotList.value);
  } catch (error) {
    console.error(error);
  }
}
getHotLlst();
const handleSelect = (e) => {
  if (e == 0) {
    changeTimeType.value = '24小时'
  }
  if (e == 1) {
    changeTimeType.value = '7天'
  }
  if (e == 2) {
    changeTimeType.value = '30天'
  }
  timeType = e
  getHotLlst()
}
onMounted(() => {

})
</script>
<script lang="ts">
export default {
  name: 'Ranking'
}
</script>
<template>
  <div>
    <a-tabs default-active-key="1" size="large">
      <template #extra>
        <div style="display: flex; gap: 10px">
          <a-button type="outline">查看全部</a-button>
          <!-- <a-button type="primary">24小时 <icon-caret-down /> </a-button> -->
          <a-dropdown @select="handleSelect">
            <a-button>{{ changeTimeType || '' }}<icon-down /></a-button>
            <template #content>
              <a-doption value="0">24小时</a-doption>
              <a-doption value="1">7天</a-doption>
              <a-doption value="2">30天</a-doption>
            </template>
          </a-dropdown>
        </div>
      </template>
      <a-tab-pane key="1">
        <template #title>
          <p class="tap-p">排行榜</p>
        </template>
        <div class="tabsbody">
          <div class="body-item">
            <div class="item">
              <div></div>
              <div>
                <a-typography-title :heading="6"> 专辑 </a-typography-title>
              </div>
              <div v-if="!mqList">
                <a-typography-title :heading="6"> 地板价 </a-typography-title>
              </div>
              <div v-if="!mqList">
                <a-typography-title :heading="6"> 参考价 </a-typography-title>
              </div>
              <div :style="{ flex: mqList ? 'none' : '5%' }">
                <a-typography-title :heading="6"> 交易量 </a-typography-title>
              </div>
              <div v-if="!mqList">
                <a-typography-title :heading="6"> 持有者 </a-typography-title>
              </div>
              <div v-if="!mqList">
                <a-typography-title :heading="6"> 涨幅 </a-typography-title>
              </div>
            </div>
            <div class="item" v-for="(item, index) in hotList" :key="item.id">
              <div>
                <a-typography-title type="secondary" :heading="6">
                  {{ index + 1 }}
                </a-typography-title>
              </div>
              <div class="imgcar">
                <LockDiv :width="!mqList ? '135px' : '73px'" :xyb="!mqList ? '135px' : '73px'">
                  <a-avatar :size="!mqList ? 135 : 73" shape="square">
                    <img :src="item.image || ''" />
                  </a-avatar>
                </LockDiv>
                <a-typography-title :heading="5"> {{ item.name || '' }}</a-typography-title>
                <icon-check-circle-fill style="color: blue" :size="20" />
              </div>
              <div v-if="!mqList">
                <a-typography-title :heading="6"> ¥{{ item.lowest_price || 0 }} </a-typography-title>
              </div>
              <div v-if="!mqList">
                <a-typography-title :heading="6">
                  ¥{{ item.lowest_price || 0 }}～¥{{ item.highest_price || 0 }}
                </a-typography-title>
              </div>
              <div :style="{ flex: mqList ? 'none' : '5%' }">
                <a-typography-title :heading="6"> {{ item.pay_size || 0 }} </a-typography-title>
              </div>
              <div v-if="!mqList">
                <a-typography-title :heading="6"> {{ item.nft_count || 0 }}/{{ item.nft_user_hold_count || 0 }}
                </a-typography-title>
              </div>
              <div v-if="!mqList">
                <a-typography-title :heading="6"> {{ item.float >= 0 ? '+' + item.float : item.float }}%
                </a-typography-title>
              </div>
            </div>
          </div>
        </div>
      </a-tab-pane>
      <!-- <a-tab-pane key="2">
        <template #title>
          <p class="tap-p">热度榜</p>
        </template>
        <div class="tabsbody"></div>
      </a-tab-pane> -->
    </a-tabs>
  </div>
</template>
<style scoped lang="less">
.tap-p {
  font-size: 20px;
  font-weight: 600;
}

.tabsbody {
  min-height: 100vh;

  .body-item {
    flex: 20%;
  }

  .item {
    // background-color: greenyellow;
    flex: 1;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    padding: 10px 0px;

    .imgcar {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 25%;
    }

    >div {
      &:nth-child(1) {
        width: 8px;
        margin-right: 15px;
      }

      &:nth-child(2) {
        flex: 25%;
      }

      &:nth-child(n + 3) {
        text-align: center;
        flex: 5%;
      }
    }
  }
}

:deep(.arco-tabs-tab-active) {
  color: var(--color-neutral-10);
}

:deep(.arco-tabs-nav-ink) {
  background-color: var(--color-neutral-10);
}

.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}
</style>
