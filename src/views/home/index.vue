<script lang="ts"></script>
<script setup lang="ts">
// 导入组件
import { onMounted } from 'vue'
import homeBannerVue from './components/home-banner.vue'
import HomeBody from './components/home-body.vue'
import HomeFooter from './components/home-footer.vue'
import Ranking from './components/home-ranking.vue'
import { getHomelist } from '@/apis/home'
let homeList = {
  code: Number,
  json: {
    head_album: {}
  }
}
onMounted(() => {
  getHomelist({
    "time_type": 0
  }).then(res => {
    homeList = res.data || {};
    console.log(homeList.json);
  });
})
</script>

<template>
  <div class="page-home">
    <div class="container">
      <!-- banner轮播图 -->
      <homeBannerVue :homeDataList="homeList.json.head_album || {}" />
      <!-- 排行列表 -->
      <Ranking />
      <!-- 主体部分 -->
      <HomeBody />
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
