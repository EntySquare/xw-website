<script setup lang='ts'>
import { onMounted, reactive, ref, watch, nextTick } from 'vue'
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
    },
    left: {
        type: Number,
        default: -20
    },
    pop_up: {
        type: Boolean,
        defaule: false
    }
})
let show = ref(false)
let show2 = ref(false)
let timer: any
const setType = (key: string, i: Number = 1) => {
    switch (key) {
        case 'click':
            if (i == 3) {
                if (show.value) {
                    setTimeout(() => {
                        show2.value = true
                        setTimeout(() => {
                            show.value = false
                        }, 200);
                    }, 200);
                    break;
                }
                show2.value = false
                document.body.style.height = '100vh'
                show.value = true
            }
            break;
        case 'hover':
            if (i) {
                clearTimeout(timer)
                show.value = true
                show2.value = false
            } else {
                timer = setTimeout(() => {
                    show2.value = true
                    setTimeout(() => {
                        show.value = false
                    }, 200);
                }, 300);
            }
            break;
        default:
            break;
    }
}

</script>
<template>
    <div :class="['dropdownbox', show ? 'hover' : '', show2 ? 'hoverone' : '']" @click="setType(type, 3)"
        @mouseenter="setType(type)" @mouseleave="setType(type, 0)">
        <div class="mask" v-if="show && type == 'click'" :style="{ background: pop_up ? `#0000007a` : '' }"></div>
        <div class="title">
            <slot name="title">
            </slot>
            {{ title }}
        </div>
        <div @click.stop="" v-if="show && !pop_up" class="dropboxbody"
            :style="{ '--left': left + 'px', background: +getThemenum() ? '#1C5AB8' : 'linear-gradient(180deg, #1C5AB8 0%, #000 100%)' }">
            <slot>
            </slot>
        </div>
        <div @click.stop="" v-if="show && pop_up" class="dropboxbodytwo"
            :style="{ '--left': left + 'px', background: +getThemenum() ? '#1C5AB8' : 'linear-gradient(180deg, #1C5AB8 0%, #000 100%)' }">
            <slot name="body">
            </slot>
        </div>
    </div>
</template>
<style scoped lang='less'>
.mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100vw;
    height: 100vh;
}

@keyframes one {
    0% {
        opacity: 0.5;
        transform: translateY(0%);
    }

    100% {
        opacity: 1;
        transform: translateY(10px);
    }
}

@keyframes two {
    0% {
        opacity: 1;
        transform: translateY(10px);
    }

    100% {
        opacity: 0.5;
        transform: translateY(0%);
    }
}

@keyframes oneone {
    0% {
        opacity: 0.5;
        right: -100%;
    }

    100% {
        opacity: 1;
        right: 10px;
    }
}

@keyframes twotwo {
    0% {
        opacity: 1;
        right: 10px;
    }

    100% {
        opacity: 0.5;
        right: -100%;
    }
}

.dropdownbox {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;


    .title {
        height: 100%;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        align-items: center;
    }

    .dropboxbody {
        color: white;
        position: absolute;
        overflow: hidden;
        left: var(--left);
        top: 80%;
        z-index: 9999;
        width: 240px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 5px 3px #00000010;
    }

    .dropboxbodytwo {
        color: white;
        position: fixed;
        overflow: hidden;
        top: 50%;
        right: -100%;
        transform: translateY(-50%);
        height: 96vh;
        z-index: 9999;
        width: 240px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 5px 3px #00000010;
    }
}

.hover {
    .dropboxbody {
        animation: .2s ease-in forwards one;
    }

    .dropboxbodytwo {
        animation: .4s ease-in forwards oneone;
    }
}

.hoverone {
    .dropboxbody {
        animation: .2s ease-in forwards two;
    }

    .dropboxbodytwo {
        animation: .4s ease-in forwards twotwo;
    }
}
</style>