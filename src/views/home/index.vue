<script lang="ts"></script>
<script setup lang="ts">
// 导入组件
import { onMounted, ref } from 'vue'
import homeBannerVue from './components/home-banner.vue'
import HomeBody from './components/home-body.vue'
import HomeFooter from './components/home-footer.vue'
import Ranking from './components/home-ranking.vue'
import { getHomelist } from '@/apis/home'
const bannerList = ref([])
const hotList = ref([])
const topList = ref([])
const typeList = ref([])
onMounted(async () => {
  try {
    const res = await getHomelist({ time_type: 0 });
    bannerList.value = res.data?.json?.head_album || [];
    hotList.value = res.data?.json?.hot || [];
    topList.value = res.data?.json?.top || [];
    typeList.value = res.data?.json?.type_list || [];
    console.log(bannerList.value);
  } catch (error) {
    console.error(error);
  }
})
</script>

<template>
  <div class="page-home">
    <div class="container">
      <!-- banner轮播图 -->
      <homeBannerVue :bannerDataList="bannerList" />
      <!-- 排行列表 -->
      <Ranking :hotList="hotList" :topList="topList" />
      <!-- 主体部分 -->
      <HomeBody :typeList="typeList" />
    </div>
    <HomeFooter />
    <!-- 轮播图 -->
  </div>
</template>
<style scoped lang="less">
.page-home {
  .container {
    // position: static;
    width: 100%;
    max-width: 2560px;
    padding: 0 70px;
  }
}
</style>
