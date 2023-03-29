<script setup lang='ts'>
import { onMounted, reactive, ref, watch, nextTick } from 'vue'
import useStore from '@/store/index'
let { cate } = useStore()
let { getThemenum } = cate
const props = defineProps({
    size: {
        type: Number,
        default: 18
    }
})
</script>
<template>
    <div :class="['dropboxitem', +getThemenum() ? 'one' : 'two']" :style="{ fontSize: `${size}px` }">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <div class="subtitle">
            <slot name="subtitle"></slot>
        </div>
    </div>
</template>
<style scoped lang='less'>
.dropboxitem {
    font-weight: 600;
    height: 54px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 0px 1px var(--color-neutral-2);

    .icon,
    .subtitle {
        padding: 0 12px;
    }

    .content {
        padding-left: 30px;
        flex: 1;
    }
}

.one {
    &:hover {
        box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.2);
        background-color: #fff;
    }
}

.two {
    &:hover {
        background-color: #272a2e;
    }
}
</style>