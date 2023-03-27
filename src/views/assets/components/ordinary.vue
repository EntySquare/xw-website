<!-- 单个商品详情页的盒子 -->
<script setup lang='ts'>
import useStore from '@/store/index'
import { onMounted, reactive, ref, watch, defineEmits, defineProps, nextTick } from 'vue'
let { cate } = useStore()
let { getThemenum } = cate
const props = defineProps({
    title: {
        type: String,
        default: '标题',
    }
})
let show = ref(false)

</script>
<template>
    <div :class="[+getThemenum() ? 'bt' : 'ht', 'ordinary']">
        <div :class="[show ? 'bbr' : '', 'title']">
            <span>{{ title }}</span>
            <icon-caret-down size="26" @click="show = !show" />
        </div>
        <div class="body" v-if="show">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang='less'>
.ordinary {
    min-height: 60px;
    border-radius: 12px;
    margin-top: 20px;
    padding: 0 20px;

    .title {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
        border-bottom: 1px solid transparent;

        span {
            font-size: 20px;
            font-weight: 700;
        }

    }

    .bbr {
        border-bottom: 1px solid var(--color-neutral-10);
    }

    .body {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        // font-weight: 700;
        // .item {}
    }
}
</style>