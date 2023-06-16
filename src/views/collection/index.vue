<script setup lang="ts">
import { dropdata } from './static/drop' //导入下拉框数据
import { useRoute } from 'vue-router'
import AccHeader from './components/coll-header.vue'
import Accbody from './components/coll-body.vue'
import useStore from '@/store/index'
import DropDownBox from './components/drop-down-box.vue'
import { ref, nextTick, onBeforeUnmount, watch, onUpdated } from 'vue'
import CollFooter from './components/coll-footer.vue'
import { albumByArtifact } from '@/apis/details'

let { cate } = useStore()
let { getThemenum } = cate //获取动态样式数据用来设置个别元素样式
let show = ref(false) //搜索框样式的动态值
let show1 = ref(false) //筛选栏样式的动态值
let dropDownBoxH = ref('') //动态计算 筛选栏可上下滑动的固定高度
let y: number // 记录滚动的距离
let tabnum: number //定义一个值，动态计算 tab栏距离顶部的高度
// 设置一个滚动的事件 用于滚动条滚动时触发的函数
function myscroll() {
    tabnum = document.getElementById('tabtop')?.offsetTop || 0
    y = document.documentElement.scrollTop //页面滚动距离
    if (y > tabnum) {
        if (y > document.body.clientHeight - document.getElementById('CollFooter')!.clientHeight - window.innerHeight) {
            dropDownBoxH.value = window.innerHeight - 150 - (y - (document.body.clientHeight - document.getElementById('CollFooter')!.clientHeight - window.innerHeight)) + 'px' //动态计算左侧下拉框整体高度
        } else {
            dropDownBoxH.value = window.innerHeight - 150 + 'px' //动态计算左侧下拉框整体高度
        }
        // 动态计算右侧搜索框整体款第
        document.getElementById('screening')!.style.width = document.getElementById('collectionbody')!.offsetWidth + 'px'
    }
    y > tabnum ? (show.value = true) : (show.value = false) //滚动距离大于tab栏距离顶部的高度时候 修改样式值
    y > tabnum ? (show1.value = true) : (show1.value = false) //滚动距离大于tab栏距离顶部的高度时候 修改样式值
}
// 设置一个窗口事件 用于窗口大小发生变化时候出发
let mqList = ref(1)
const getWindowInfo = () => {
    mqList.value = window.matchMedia('(max-width: 987px)').matches ? 0 : 1

    nextTick(() => {
        //页面元素加载完毕后再执行，避免报错
        if (y > tabnum) {
            if (y > document.body.clientHeight - document.getElementById('CollFooter')!.clientHeight - window.innerHeight) {
                dropDownBoxH.value = window.innerHeight - 150 - (y - (document.body.clientHeight - document.getElementById('CollFooter')!.clientHeight - window.innerHeight)) + 'px' //动态计算左侧下拉框整体高度
            } else {
                dropDownBoxH.value = window.innerHeight - 150 + 'px' //动态计算左侧下拉框整体高度
            }
            document.getElementById('screening')!.style.width = document.getElementById('collectionbody')!.offsetWidth + 'px'
            // document.getElementById('down-box')!.style.width = document.getElementById('lefttt')!.offsetWidth + 'px'
        } else {
            document.getElementById('screening')!.style.width = `100%`
            // document.getElementById('down-box')!.style.width = `100%`
        }
    })
}
myscroll()
getWindowInfo()
window.addEventListener('resize', getWindowInfo)
// 页面加载之后挂载事件
document.addEventListener('scroll', myscroll)
let state = ref(true)
//--------------------------
// 获取当前id值
const route = useRoute()
const getParams = () => {
    return route.query
}

// 用户信息类型
type TUserInfo = {
    title: string
    item: string
}
const UserCollList = ref([])
let mbdata = ref([] as TUserInfo[])

// 接口参数列表
const paramsList = ref(
    {} as {
        album_id: number
        limit: number
        offset: number
        sort_price: number
        sort_user: number
        start_price: number
        end_price: number
        status: number
    }
)
paramsList.value.album_id = Number(getParams().id)
paramsList.value.limit = 10
const NumParamsList = () => {
    paramsList.value.offset = 0
    paramsList.value.sort_user = 0
    paramsList.value.status = 0
    paramsList.value.start_price = 0
    paramsList.value.end_price = 0
}

// 筛选接口
const seachList = async () => {
    console.log(paramsList.value.album_id)
    const res = await albumByArtifact({
        album_id: paramsList.value.album_id,
        limit: paramsList.value.limit,
        offset: paramsList.value.offset,
        sort_user: paramsList.value.sort_user,
        status: paramsList.value.status,
        start_price: paramsList.value.start_price,
        end_price: paramsList.value.end_price
    })
    paramsList.value.offset = res?.data?.json?.offset || 0
    UserCollList.value = res?.data?.json?.artifact_list || []
    console.log(UserCollList.value)
}
console.log('id', getParams().id)

// 给筛选对象的每一项添加空值
for (let i = 0; i < 3; i++) {
    mbdata.value.push({ title: '', item: '' })
}
// 删除某一项筛选条件
const deleteItem = item => {
    if (item.title == '状态') {
        paramsList.value.sort_user = 0
    }
    if (item.title == '所有者') {
        paramsList.value.status = 0
    }
    if (item.title == '价格') {
        paramsList.value.start_price = 0
        paramsList.value.end_price = 0
    }
    mbdata.value.forEach(element => {
        if (element.title == item.title) {
            element.title = ''
            element.item = ''
        }
    })
    paramsList.value.offset = 0
    seachList()
}
// 删除所有筛选条件
const deleteAll = () => {
    mbdata.value.forEach(item => {
        item.title = ''
        item.item = ''
    })
    NumParamsList()
    seachList()
}
watch(
    () => mbdata.value,
    (newVal, oldVal) => {
        mbdata.value.forEach(element => {
            if (element.title == '状态') {
                if (element.item == '立即购买') {
                    paramsList.value.status = 1
                } else if (element.item == '拍卖中') {
                    paramsList.value.status = 2
                } else if (element.item == '新增') {
                    paramsList.value.status = 3
                } else {
                    paramsList.value.status = 0
                }
            }
            if (element.title == '所有者') {
                if (element.item == '我') {
                    paramsList.value.sort_user = 1
                } else {
                    paramsList.value.sort_user = 0
                }
            }
            if (element.title == '价格') {
                let slpictArr = element.item.slice(0, element.item.indexOf('~'))
                paramsList.value.start_price = Number(element.item.slice(0, element.item.indexOf('～'))) || 0
                paramsList.value.end_price = Number(element.item.slice(element.item.indexOf('～') + 1, element.item.length)) || 0
            }
        })
        paramsList.value.offset = 0
        console.log(paramsList.value)
        seachList()
    }
)

// 首次进入详情触发请求筛选接口
NumParamsList()
seachList()

// 监听数据变化
onUpdated(() => {
    // seachList()
    mbdata.value.forEach(item => {
        console.log(item)
    })
})
// 离开页面销毁监听
onBeforeUnmount(() => {
    document.removeEventListener('scroll', myscroll)
    window.removeEventListener('resize', getWindowInfo)
})
</script>
<template>
    <div class="page-account">
        <AccHeader></AccHeader>
        <!-- tab栏begin -->
        <div class="tabtop" id="tabtop">
            <div :class="[show ? 'fixed' : '']" style="overflow: hidden; width: 100%; border-bottom: 1px solid rgb(var(--arcoblue-6)); display: flex; justify-content: center">
                <ul class="container" :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000' }">
                    <li class="liactive">项目</li>
                    <li>分析</li>
                    <li>活动</li>
                </ul>
            </div>
        </div>
        <!-- tab栏end -->
        <!-- 主体部分 begin -->
        <div class="container" id="container">
            <div :style="{ gap: mqList ? '20px' : '0px' }" style="width: 100%; display: flex; padding-top: 10px">
                <!-- 左侧筛选begin -->
                <div :style="{ width: mqList ? '360px' : '0px' }" id="lefttt">
                    <div
                        :class="[show1 ? 'fixedtwo' : '']"
                        id="fixedtwo"
                        :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000', height: dropDownBoxH, 'overflow-y': 'scroll', 'padding-top': '10px' }"
                    >
                        <div v-if="mqList">
                            <DropDownBox v-model:modelValue="mbdata" title="状态" :data="dropdata.state" />
                            <DropDownBox v-model:modelValue="mbdata" title="所有者" :data="dropdata.owner" />
                            <DropDownBox v-model:modelValue="mbdata" title="价格" :data="dropdata.price" :state="true" />
                            <DropDownBox v-model:modelValue="mbdata" title="稀有度等级" :data="dropdata.price" :state="true" />
                            <DropDownBox v-model:modelValue="mbdata" title="数量" :data="dropdata.quantity" />
                            <DropDownBox v-model:modelValue="mbdata" title="属性" :data="dropdata.attribute" />
                        </div>
                    </div>
                </div>
                <!-- 左侧筛选end -->
                <div style="flex: 5">
                    <div :style="{ height: show1 ? '50px' : '' }"></div>
                    <!-- 右侧 搜索筛选 展示切换begin -->
                    <div :style="{ 'background-color': +getThemenum() ? '#F0EBF2' : '#000', padding: `${show1 ? '15px 0px' : '20px 0px'}` }" :class="[show1 ? 'fixedtwo' : '']">
                        <div id="screening" :class="['screening']" :style="{}">
                            <div class="search">
                                <icon-search size="30" style="color: #3159b4; margin-left: 18px; min-width: 20px" />
                                <input type="text" placeholder="按名称或属性搜索" />
                                <button style="width: 100px; height: 40px">搜索</button>
                            </div>
                            <div class="search">
                                <select class="" style="border: 0" name="" id="">
                                    <option>价格从高到底</option>
                                    <option>价格从低到高</option>
                                </select>

                                <!-- <icon-caret-down /> -->
                            </div>
                            <div class="search" style="min-width: 100px">
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
                    </div>
                    <!-- 右侧 搜索筛选 展示切换 end -->
                    <Accbody id="Accbody" :style="{ padding: `${show1 ? '15px 0px 0px' : '0px 0px 0px'}` }" :collList="UserCollList">
                        <div class="mbxue">
                            <div v-for="(item, index) in mbdata" :key="index">
                                <div class="item" v-if="item.title">
                                    {{ item.title + '' + ':' + ' ' + item.item }}
                                    <icon-close @click="deleteItem(item)" :strokeWidth="8" />
                                </div>
                            </div>
                            <div class="itemall" v-if="mbdata.find(i => i.title)" @click="deleteAll()">全部清除</div>
                        </div>
                    </Accbody>
                </div>
            </div>
        </div>
        <CollFooter id="CollFooter"></CollFooter>
    </div>
</template>
<style scoped lang="less">
::-webkit-scrollbar {
    display: none;
}

.liactive {
    background: linear-gradient(162.55deg, #3ffff3 3.18%, #e127ff 82.44%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.page-account {
    position: relative;

    .fixedtwo {
        position: fixed !important;
        top: 136px;
        padding: 10px 0px;
        z-index: 100;
        // background-color: var(--bgc-top-dark);
    }

    .tabtop {
        height: 50px;
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
            max-width: 2560px;
            height: 50px;
            display: flex;
            gap: 10px;
            // border-bottom: 1px solid rgb(var(--arcoblue-6)) !important;

            li {
                // background-color: #3159b4;
                font-weight: 600;
                margin-left: 10px;
                line-height: 50px;
                display: flex;
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
            // width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 10px;

            .search {
                display: flex;
                align-items: center;
                gap: 10px;
                height: 40px;
                border-radius: 10px;
                overflow: hidden;
                background: rgba(255, 255, 255, 1);
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

                .bom {
                    position: absolute;
                    display: flex;
                    justify-content: space-around;
                    width: 100px;
                    color: black;
                    font-size: 16px;
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
                        font-size: 16px;
                        font-weight: 800;
                        border: 1px solid #3159b4;
                        background-color: #3159b4;
                        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        width: 50%;
                    }
                }

                &:nth-child(1) {
                    flex: 1;
                }

                &:nth-child(2) {
                    padding: 10px;
                    color: #000;
                    font-weight: 800;
                    font-size: 18px;
                }

                &:nth-child(3) {
                    max-width: 100px;
                    overflow: hidden;
                }

                input {
                    height: 40px;
                    width: 100%;
                    font-family: 'Poppins';
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
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #cecdcd76;
        border-radius: 10px;
        gap: 10px;
    }

    .itemall {
        background-color: #00000000;
    }
}
</style>
