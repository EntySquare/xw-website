<script lang="ts"></script>
<script setup lang="ts">
// 导入组件
import HomeBody from './components/home-body.vue'
import HomeFooter from './components/home-footer.vue'
</script>

<template>
  <div class="page-home">
    <HomeBody />
    <HomeFooter />
  </div>
</template>
<style scoped lang="less">
.page-home {
  position: relative;
  height: 200vh;
  max-height: calc(100vh - 85px);
  overflow: hidden;
}
</style>
