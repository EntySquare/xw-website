<script setup lang="ts"></script>
<template>
  <!-- 路由出口 -->
  <keep-alive>
    <router-view v-if="$route.meta.isKeepAlive" />
  </keep-alive>
  <router-view v-if="!$route.meta.isKeepAlive" />
</template>
<style scoped lang="less"></style>

