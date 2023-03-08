<script lang="ts"></script>
<script setup lang="ts">
// 导入组件
import homeBannerVue from "./components/home-banner.vue";
import HomeBody from "./components/home-body.vue";
import Ranking from "./components/home-ranking.vue";
</script>

<template>
  <div class="page-home">
    <div class="container">
      <!-- banner轮播图 -->
      <homeBannerVue />
      <Ranking />
      <HomeBody />
    </div>
  </div>
</template>
<style scoped lang="less">
.page-home {
  .container {
    width: 100%;
    max-width: 2560px;
    padding: 0 70px;
  }
}
</style>
