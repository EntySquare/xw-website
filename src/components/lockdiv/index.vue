<script setup lang='ts'>
import { onMounted, reactive, ref, watch, defineEmits, defineProps, nextTick } from 'vue'
const props = defineProps({
    width: {
        type: String,
        default: '',
    },
    xyb: {
        type: String,
        default: '100%',
    }
})
</script>
<script lang="ts">
export default { name: "LockDiv" };
</script>
<template>
    <div class="lockdiv" :style="{ '--width': width, '--pad_b': xyb }">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang='less'>
.lockdiv {
    box-sizing: border-box;
    position: relative;
    width: var(--width);
    height: 0;
    padding: 0;
    padding-bottom: var(--pad_b);
    // background-color: pink;

    .content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
}
</style>