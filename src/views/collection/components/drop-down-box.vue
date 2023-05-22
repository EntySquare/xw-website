<!-- 专辑详情 下拉框 -->
<script setup lang='ts'>
import { onMounted, reactive, ref, watch, nextTick } from 'vue'
const props = defineProps({
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
    },
    state: {
        type: Boolean,
        default: false
    }
})

let Min: HTMLInputElement | null
let Max: HTMLInputElement | null
nextTick(() => {
    Min = document.getElementById(`${props.title}min`) as HTMLInputElement
    Max = document.getElementById(`${props.title}max`) as HTMLInputElement
})
//用来 选中反馈
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
const text = ref()
const emit = defineEmits(['update:modelValue'])
const update = (item: any) => {
    const data = JSON.parse(JSON.stringify(props.modelValue))
    // && i.item == item
    const i = data.findIndex((i: { title: string; }) => i.title == '')
    const show = data.findIndex((i: { title: string; }) => i.title == props.title)
    if (props.state) {
        if (!Min!.value || !Max!.value || +Min!.value > +Max!.value) {
            if (+Min!.value > +Max!.value) {
                text.value = '排名最低的筛选必须少于排名最高的筛选'
            }
            return
        }
        if (show != -1) {
            data[show].title = props.title
            data[show].item = `${props.title == '稀有度等级' ? '稀有度' + Min!.value + '～' + Max!.value : '数量' + Min!.value + '～' + Max!.value}`
            emit('update:modelValue', data)
        } else {
            data[i].title = props.title
            data[i].item = `${props.title == '稀有度等级' ? '稀有度' + Min!.value + '～' + Max!.value : '数量' + Min!.value + '～' + Max!.value}`
            emit('update:modelValue', data)
        }
        Min!.value = ''
        Max!.value = ''
        return
    }

    if (show != -1) {
        data[show].title = props.title
        data[show].item = item
        emit('update:modelValue', data)
    } else {
        data[i].title = props.title
        data[i].item = item
        emit('update:modelValue', data)
    }
    itemnum()
}

let show = ref(false)
</script>
<script lang="ts">
export default {
    name: "DropDownBox",
}
</script>
<template>
    <div class="down-box" id="down-box">
        <p @click="show = !show" class="title">{{ title }} <icon-caret-down v-if="!show" /><icon-caret-up v-else /></p>
        <div class="show" v-show="show">
            <div v-if="state" class="interval">
                从 <div><input :id="`${title}min`" type="number" @focus="text = ''"></div>
                到 <div><input :id="`${title}max`" type="number" @focus="text = ''"> </div>
                <icon-check @click="update('')" />
            </div>
            <div v-else class="listitem" v-for="(item, index) in data" :key="index">
                <p>{{ item }}</p>
                <div :class="[{ checkboxactive: itemnum() == item }, 'checkbox']" @click="update(item)"></div>
            </div>
            <div style="font-size: 14px;color: red;text-align: center;" v-if="text"><icon-info-circle />{{ text }}</div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.down-box {
    width: 350px !important;
    display: flex;
    gap: 18px;
    flex-direction: column;
    margin-bottom: 10px;
    justify-content: center;
    font-weight: 800;
    padding: 10px 10px;
    font-size: 24px;
    min-height: 55px;
    box-sizing: border-box;
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
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        gap: 18px;
        flex-direction: column;

        .interval {
            display: flex;
            width: 100%;
            gap: 10px;
            justify-content: space-around;
            align-items: center;

            div {
                height: 35px;
                width: 80px;
                display: flex;
                align-items: center;
                border-radius: 10px;
                padding: 0 10px;
                background: #D9D9D9;

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none !important;
                }

                // input[type='number'] {
                //     -moz-appearance: textfield;
                // }

                input {
                    height: 100%;
                    font-size: 16px;
                    // color: white;
                    font-weight: 800;
                    width: 100%;
                    outline: none;
                    background-color: #00000000;
                    border: none;
                }

            }
        }

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