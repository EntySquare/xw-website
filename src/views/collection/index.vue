<script setup lang='ts'>
import { useRoute } from "vue-router";
import AccHeader from './components/header.vue';
import Accbody from './components/body.vue';
import useStore from '@/store/index'
import { ref, nextTick } from 'vue';
import DropDownBox from "./components/drop-down-box.vue";
let { cate } = useStore()
let { getThemenum } = cate
let show = ref(false)//搜索框样式的动态值
let show1 = ref(false)//筛选栏样式的动态值
let dropDownBoxH = ref('')//动态计算 筛选栏可上下滑动的固定高度
let y: number// 记录滚动的距离
let tabnum: number//定义一个值，动态计算 tab栏距离顶部的高度
// 设置一个滚动的事件 用于滚动条滚动时触发的函数
function myscroll() {
    tabnum = document.getElementById('tabtop')?.offsetTop || 0
    tabnum = tabnum + 1
    y = document.documentElement.scrollTop //页面滚动距离
    if (y > tabnum) {
        // document.getElementById('collectionscrollbar')!.style.height = window.innerHeight - 260 + 'px'
        document.getElementById('screening')!.style.width = document.getElementById('collectionbody')!.offsetWidth + 1 + 'px'
        document.getElementById('down-box')!.style.width = document.getElementById('lefttt')!.offsetWidth + 'px'
    }
    y > tabnum ? show.value = true : show.value = false //滚动距离大于tab栏距离顶部的高度时候 修改样式值
    y > tabnum ? show1.value = true : show1.value = false //滚动距离大于tab栏距离顶部的高度时候 修改样式值
    // 动态计算右侧搜索栏总体宽度 ， 把内容的宽度给到它
    // 动态计算左侧筛选栏总体宽度 ， div占用宽度给到它
}
// 设置一个窗口事件 用于窗口大小发生变化时候出发
const getWindowInfo = () => {
    nextTick(() => {//页面元素加载完毕后再执行，避免报错
        if (y > tabnum) {
            document.getElementById('screening')!.style.width = document.getElementById('collectionbody')!.offsetWidth + 1 + 'px'
            document.getElementById('down-box')!.style.width = document.getElementById('lefttt')!.offsetWidth + 'px'
        } else {
            document.getElementById('screening')!.style.width = `100%`
            document.getElementById('down-box')!.style.width = `100%`
        }
        console.log(
            dropDownBoxH.value = window.innerHeight - 190 + 'px'
        );
    })
};
window.addEventListener("resize", getWindowInfo);
getWindowInfo()
// 页面加载之后挂载事件
document.addEventListener('scroll', myscroll)
let state = ref(true)
// 获取当前id值
const route = useRoute();
const getParams = () => {
    return route.query;
};

// 用户信息类型
type TUserInfo = {
    title: string
    item: string
}


let mbdata = ref([] as TUserInfo[])
for (let i = 0; i < 30; i++) {
    mbdata.value.push({ title: '', item: '' })
}
//下拉框数据
const dropdata = {
    state: [
        '立即购买',
        '拍卖中',
        '新增',
        '有优惠',
    ],
    owner: [
        '全部',
        '我'
    ]
}

</script>
<template>
    <div class="page-account">
        <AccHeader></AccHeader>
        <!-- tab栏begin -->
        <div class="tabtop" id="tabtop">
            <div :class="[show ? 'fixed' : '']"
                style="overflow: hidden;width: 100%;border-bottom: 1px solid rgb(var(--arcoblue-6));display: flex;justify-content: center;">
                <ul :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000' }">
                    <li>项目</li>
                    <li>分析</li>
                    <li>活动</li>
                </ul>
            </div>
        </div>
        <!-- tab栏end -->
        <!-- 主体部分 begin -->
        <div class="container" id="container">
            <div style=" width: 100%; display: flex;gap: 20px;padding-top: 20px;">
                <!-- 左侧筛选begin -->
                <div style="flex: 2;" id="lefttt">
                    <div :class="[show1 ? 'fixedtwo' : '']" id="fixedtwo"
                        :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000', height: '100%' }">
                        <div :style="{ height: dropDownBoxH, 'overflow-y': 'scroll' }">
                            <DropDownBox v-model:modelValue="mbdata" title="状态" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="状态1" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="状态2" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="状态3" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="状态4" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="状态5" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="状态6" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="状态7" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="所有者" :data="dropdata.owner" />
                        </div>
                    </div>
                </div>
                <!-- 左侧筛选end -->
                <div style="flex: 5;">
                    <div :style="{ height: show1 ? '50px' : '' }"></div>
                    <!-- 右侧 搜索筛选 展示切换begin -->
                    <div id="screening" :class="['screening', show1 ? 'fixedtwo' : '']"
                        :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000' }">
                        <div class="search">
                            <icon-search size="30" style="color:#3159b4;margin-left: 18px;" />
                            <input type="text" placeholder="按名称或属性搜索" />
                        </div>
                        <div class="search">
                            {{ y }}
                        </div>
                        <div class="search" style="min-width: 150px;">
                            <div class="bom">
                                <p>网格</p>
                                <p>列表</p>
                            </div>
                            <div :class="['switch', state ? 'jcs' : 'jce']" @click="state = !state">
                                <div class="item">
                                    <p>{{ state ? '网格' : '列表' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 右侧 搜索筛选 展示切换 end -->
                    <Accbody>
                        <div class="mbxue">
                            <div v-for="(item, index) in mbdata">
                                <div class="item" v-if="item.item">
                                    {{ item.item }}<icon-close @click="mbdata[index].item = ''" :strokeWidth="8" />
                                </div>
                            </div>
                            <div class="itemall" v-if="mbdata.find(i => i.item)"
                                @click="mbdata.forEach(i => { i.item = '', i.title = '' })">
                                全部清除</div>
                        </div>
                    </Accbody>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
::-webkit-scrollbar {
    display: none;
}

.page-account {
    position: relative;

    .fixedtwo {
        position: fixed !important;
        top: 151px;
        padding: 20px 0px;
        z-index: 100;
        background-color: var(--bgc-top-dark);
    }

    .tabtop {
        height: 65px;
        width: 100%;
        display: flex;
        justify-content: center;
        // border-bottom: 1px solid rgb(var(--arcoblue-6)) !important;

        .fixed {
            position: fixed !important;
            top: 85px;
            width: 100%;
            z-index: 100;
        }



        ul {
            flex: 1;
            padding: 0 70px;
            padding-top: 15px;
            max-width: 2560px;
            height: 65px;
            display: flex;
            gap: 10px;
            // border-bottom: 1px solid rgb(var(--arcoblue-6)) !important;

            li {
                font-size: 24px;
            }
        }
    }

    .container {
        width: 100%;
        box-sizing: border-box;
        max-width: 2560px;
        padding: 0 70px;
        gap: 20px;

        .screening {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 10px;

            .search {
                display: flex;
                align-items: center;
                gap: 10px;
                flex: 1;
                height: 50px;
                border-radius: 15px;
                overflow: hidden;
                background: rgba(255, 255, 255, 1);
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

                .bom {
                    position: absolute;
                    display: flex;
                    justify-content: space-around;
                    width: 150px;
                    color: black;
                    font-size: 20px;
                    font-weight: 800;
                }

                .jcs {
                    justify-content: start;
                }

                .jce {
                    justify-content: end;
                }

                .switch {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    width: 100%;
                    height: 100%;

                    .item {
                        color: white;
                        font-size: 20px;
                        font-weight: 800;
                        background-color: #3159b4;
                        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

                        border-radius: 15px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        width: 50%;
                    }
                }

                &:nth-child(2) {
                    max-width: 250px;
                }

                &:nth-child(3) {
                    max-width: 150px;
                }

                input {
                    height: 40px;
                    width: 100%;
                    font-family: "Poppins";
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 40px;
                    // color: white;
                    background: rgba(0, 0, 0, 0);

                    &::placeholder {
                        font-weight: 800;
                        color: #aaa;
                        font-size: 18px;
                    }
                }
            }
        }
    }
}

.mbxue {
    display: flex;
    flex-wrap: wrap;
    // gap: 10px;
    padding-bottom: 10px;

    .item,
    .itemall {
        margin-right: 10px;
        margin-bottom: 10px;
        font-weight: 800;
        font-size: 20px;
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #afafaf76;
        border-radius: 10px;
        gap: 10px;
    }

    .itemall {
        background-color: #00000000;
    }
}
</style>