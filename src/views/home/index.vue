<script lang="ts">
export default {
  name: "Home",
};
</script>
<script setup lang="ts">
// 导入组件
import homeBannerVue from "./components/home-banner.vue";
</script>

<template>
  <div class="page-home">
    <div class="container">
      <!-- banner轮播图 -->
      <homeBannerVue />
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
