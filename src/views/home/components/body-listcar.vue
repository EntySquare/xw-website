<script lang="ts" setup name="bodyListcar">
import { BodyItemList } from '@/types/cate'
import useStore from '@/store/index'
import { ref } from 'vue'
let { cate } = useStore()
let { getThemenum } = cate
let mqList = ref<2 | 1 | 4 | 3 | 5 | 6>()
const getWindowInfo = () => {
  mqList.value = window.matchMedia('(max-width: 1280px)').matches
    ? '5'
    : ('4' as any)
  if (mqList.value == 5) {
    mqList.value = window.matchMedia('(max-width: 845px)').matches
      ? '6'
      : ('5' as any)
  }
}
window.addEventListener('resize', getWindowInfo)
getWindowInfo()
const props = defineProps<{
  typeList: BodyItemList[]
  type: number
  num: number
}>()
const typeList = ref<BodyItemList[]>(props.typeList)
</script>
<template>
  <div>
    <div class="listcar">
      <div v-for="(item, index) in type" class="body-listcar-item" :key="index"
        :style="{ display: typeList[0] ? 'none' : '' }">
        <LockDiv>
          <XtxSkeleton widthB="100%" heightB="100%" :fade="true" :animated="true">
          </XtxSkeleton>
        </LockDiv>
      </div>

      <div v-for="(item, i) in typeList" :class="[
        {
          none:
            (i > num * (type - 1) && num == 1) || //
            i < (num - 1) * type ||
            i > num * type - 1
        },
        {
          boxshow: !+getThemenum()
        },
        'body-listcar-item'
      ]" :key="i">
        <RouterLink style="height: 100%" :to="{
          path: `/collection/${item.album_name.replaceAll(' ', '')}`,
          query: { id: `${item.album_id}` }
        }">
          <LockDiv>
            <div class="item-top" :style="{ 'background-image': 'url(' + item.album_img + ')' }"></div>
            <div class="item-bom">
              <div class="u">
                <a-typography-title :heading="mqList">
                  {{ item.album_name }}</a-typography-title>
                <icon-check-circle-fill style="color: blue" :size="20" />
              </div>
              <div class="d">
                <a-typography-title>
                  <p>地板价</p>
                  <p>¥{{ item.region_price }}</p>
                </a-typography-title>
                <a-typography-title>
                  <p>总交易量</p>
                  <p>{{ item.pay_size }}</p>
                </a-typography-title>
              </div>
            </div>
          </LockDiv>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
p {
  font-weight: 800;
  font-size: 12px;
  text-align: center;
}

.listcar {
  display: flex;
  padding: 10px 1% 10px;
  gap: 4%;

  .none {
    display: none !important;
  }

  .boxshow {
    border-top: 1px solid rgba(63, 255, 243, 1) !important;
    border-left: 1px solid rgba(63, 255, 243, 1) !important;
    border-bottom: 1px solid rgba(225, 39, 255, 1) !important;
    border-right: 1px solid rgba(225, 39, 255, 1) !important;
  }

  .body-listcar-item {
    box-sizing: border-box;
    position: relative;
    width: 19.14%;
    background: var(--color-bg-1);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
    transition: all 0.5s;
    color: white;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid transparent;

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
