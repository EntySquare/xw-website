<script lang="ts" setup>
defineProps({
  bg: {
    type: String,
    default: '#a0a0a0',
  },
  width: {
    type: Number,
    // required: true
  },
  height: {
    type: Number,
    // required: true
  },
  widthB: {
    type: String,
    // required: true
  },
  heightB: {
    type: String,
    // required: true
  },
  animated: {
    type: Boolean,
    default: false,
  },
  fade: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div class="xtx-skeleton" :style="{ width: widthB ? widthB : width + 'px', height: heightB ? heightB : height + 'px' }"
    :class="{ shan: animated, fade }">
    <!-- 1 盒子-->
    <div class="block" :style="{ backgroundColor: bg }"></div>
    <!-- 2 闪效果 xtx-skeleton 伪元素 --->
  </div>
</template>

<style scoped lang="less">
.xtx-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;

  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}

.shan {
  &::after {
    content: '';
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%);
    transform: skewX(-45deg);
  }
}

@keyframes shan {
  0% {
    left: -100%;
  }

  100% {
    left: 120%;
  }
}

.fade {
  animation: fade 1s linear infinite alternate;
}

@keyframes fade {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}
</style>
