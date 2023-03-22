<script setup lang='ts'>
import { onMounted, reactive, ref, watch, defineEmits, defineProps, nextTick } from 'vue'
import useStore from '@/store/index'
let { cate } = useStore()
let { getThemenum } = cate
const props = defineProps({
    title: {
        type: String
    },
    type: {
        type: String,
        default: 'hover'
    }
})
let show = ref(false)
const setType = (key: string, i: Number = 1) => {
    switch (key) {
        case 'click': i == 3 ? show.value = !show.value : ''
            break;
        case 'hover': i ? show.value = true : show.value = false
            break;

        default:
            break;
    }
}

</script>
<template>
    <div :class="['dropdownbox', show ? 'hover' : '']" @click="setType(type, 3)" @mousemove="setType(type)"
        @mouseleave="setType(type, 0)">
        <div class="title"> {{ title }} </div>
        <div v-if="show" class="dropboxbody" :style="{ background: +getThemenum() ? '#FFF' : '#303339' }">
            <slot>
            </slot>
        </div>
    </div>
</template>
<style scoped lang='less'>
@keyframes one {
    from {
        display: none;
        opacity: 0;
        transform: translateY(0%);
    }

    to {
        display: block;
        opacity: 1;
        transform: translateY(10%);
    }
}

@keyframes two {
    from {
        display: none;
        opacity: 1;
        transform: translateY(10%);
    }

    to {
        display: block;
        opacity: 0;
        transform: translateY(0%);
    }
}

.dropdownbox {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    .title {
        font-size: 16px;
        // font-weight: 600;
    }

    .dropboxbody {
        position: absolute;
        overflow: hidden;
        left: -20px;
        top: 65%;
        z-index: 9999;
        width: 220px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        animation: .3s ease-in forwards two;
    }
}

.hover {
    .dropboxbody {
        animation: .3s ease-in forwards one;
    }
}
</style>