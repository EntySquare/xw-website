<script setup lang='ts'>
import { onMounted, reactive, ref, watch, defineEmits, defineProps } from 'vue'
const props = defineProps({
    // 模态框标题
    title: {
        type: String,
        default: '标题',
    },
    data: {
        type: Array,
        default: () => [],
    },
    modelValue: {
        type: Object,
        default: () => { },

    }
})
const itemnum = () => {
    const data = JSON.parse(JSON.stringify(props.modelValue))
    let item
    data.forEach((i: { title: any; item: any }) => {
        if (i.title === props.title) {
            item = i.item
        }
    })
    return item
}
const emit = defineEmits(['update:modelValue'])
const update = (item: any) => {
    const data = JSON.parse(JSON.stringify(props.modelValue))
    // && i.item == item
    const i = data.findIndex((i: { item: string; }) => i.item == '')
    const show = data.findIndex((i: { title: string; }) => i.title == props.title)

    if (show != -1) {
        data[show].title = props.title
        data[show].item = item
        props.modelValue[show].title = props.title
        props.modelValue[show].item = item
        emit('update:modelValue', data)
    } else {
        data[i].title = props.title
        data[i].item = item
        props.modelValue[i].title = props.title
        props.modelValue[i].item = item
        emit('update:modelValue', data)
    }
    itemnum()
}

let show = ref(false)
</script>
<template>
    <div class="down-box" id="down-box">
        <p @click="show = !show" class="title">{{ title }} <icon-caret-down v-if="!show" /><icon-caret-up v-else /></p>
        <div class="show" v-if="show">
            <div class="listitem" v-for="(item, index) in data">
                <p>{{ item }}</p>
                <div :class="[{ checkboxactive: itemnum() == item }, 'checkbox']" @click="update(item)"></div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.down-box {
    display: flex;
    gap: 18px;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
    font-weight: 800;
    font-size: 24px;
    padding: 20px;
    min-height: 55px;
    border-top: 2px solid rgba(63, 255, 243, 1);
    border-left: 2px solid rgba(63, 255, 243, 1);
    border-right: 2px solid rgba(225, 39, 255, 1);
    border-bottom: 2px solid rgba(225, 39, 255, 1);
    border-radius: 10px;

    .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .show {
        width: 100%;
        display: flex;
        gap: 18px;
        flex-direction: column;

        .listitem {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .checkbox {
                width: 26px;
                height: 26px;
                background: #D9D9D9;
                border-radius: 8px;
            }

            .checkboxactive {
                background: #1C5AB8 !important;
            }
        }
    }
}
</style>