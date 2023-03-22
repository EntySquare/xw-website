<script setup lang="ts">
import { ref } from 'vue'
let mqList = ref(150)
let show1 = ref(false)
const getWindowInfo = () => {
    show1.value = false
    mqList.value = window.matchMedia('(max-width: 987px)').matches ? 108 : 150
    if (mqList.value == 108) {
        show1.value = true
        mqList.value = window.matchMedia('(max-width: 600px)').matches ? 82 : 108
    }
}
window.addEventListener('resize', getWindowInfo)
getWindowInfo()
</script>
<template>
    <div class="header">
        <div class="avater"></div>
        <div class="body">
            <div class="container">
                <div :style="{ padding: `0px 20px ${show1 ? '10px' : '24px'}` }">
                    <a-avatar shape="square" class="avatatimg" :size="mqList" style="transform: translateY(-50%)">
                        <img alt="avatar" src="https://pic4.zhimg.com/80/v2-80d6ebd2e2f5f6c980b3a22aeca06a9b_720w.webp" />
                    </a-avatar>
                    <div class="title">
                        <div class="left" :style="{ padding: `${mqList / 2 + 20}px 0px 0px` }">
                            <a-typography-title>
                                <div class="text">
                                    <p>醒目猴 </p>
                                    <p>创作者<span>XXX</span></p>
                                    <div class="one">
                                        总量<span>666</span> 创建日期<span>Nov 2022</span>
                                        创作者收益<span>10%</span> 类别<span>Music</span>
                                    </div>
                                    <div class="dise">
                                        这是一个脱离了低级趣味的超牛逼的发生的咖啡机塑料袋咖啡机李会计拉卡拉看
                                        <icon-caret-down />
                                    </div>
                                    <div class="two" :style="{
                                        gridTemplateColumns:
                                            'repeat(' + `${show1 ? 2 : 4}` + ', 1fr)',
                                        fontSize: `${show1 ? '20px' : '24px'}`
                                    }">
                                        <div class="item">
                                            <div class="t">总交易量</div>
                                            <div class="b">￥3432122</div>
                                        </div>
                                        <div class="item">
                                            <div class="t">地板胶</div>
                                            <div class="b">￥500</div>
                                        </div>
                                        <div class="item">
                                            <div class="t">最佳报价</div>
                                            <div class="b">￥3100</div>
                                        </div>
                                        <div class="item">
                                            <div class="t">所有者</div>
                                            <div class="b">156564</div>
                                        </div>
                                    </div>
                                    <div class="right1" v-if="show1">
                                        <div class="icons">
                                            <div class="icon-item"><icon-twitter /></div>
                                            <div class="icon-item"><icon-wechat /></div>
                                            <div class="icon-item"><icon-send /></div>
                                            <div class="icon-item"><icon-tiktok-color /></div>
                                            <div class="icon-item"><icon-email /></div>
                                        </div>
                                    </div>
                                </div>
                            </a-typography-title>
                        </div>
                        <div class="right" v-if="!show1">
                            <div class="icons">
                                <div class="icon-item"><icon-twitter /></div>
                                <div class="icon-item"><icon-wechat /></div>
                                <div class="icon-item"><icon-send /></div>
                                <div class="icon-item"><icon-tiktok-color /></div>
                                <div class="icon-item"><icon-email /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.header {
    .avater {
        background-image: url('https://picx.zhimg.com/80/v2-dbc73dfaae9feca60eaf83811227384c_720w.webp?source=1940ef5c');
        background-size: cover;
        background-position: center;
        padding-top: 25vw;
    }

    .container {
        position: relative;
        width: 100%;
        max-width: 2560px;
        padding: 0 70px;
    }

    .avatatimg {
        position: absolute;

        img {
            border: 3px solid white;
            border-radius: 12px;
        }
    }

    .title {
        display: flex;
        justify-content: space-between;

        .left {
            // padding-top: 40px;

            h2,
            h5 {
                font-weight: 900 !important;
            }

            .text {
                >p {
                    &:nth-child(2) {
                        padding-top: 20px;
                        font-size: 20px;
                        font-weight: 600;

                        span {
                            color: #3d82db;
                        }
                    }
                }

                .one {
                    padding-top: 20px;
                    font-weight: 800;
                    font-size: 16px;
                    display: flex;
                    flex-wrap: wrap;

                    span {
                        margin-left: 10px;
                        margin-right: 20px;
                    }
                }

                .dise {
                    font-size: 12px;
                    padding-top: 10px;
                    opacity: 0.8;
                    width: 200px;
                    overflow: hidden;
                    /* 超出的文本隐藏 */
                    text-overflow: ellipsis;
                    /* 溢出用省略号显示 */
                    white-space: nowrap;
                    /* 溢出不换行 */
                    position: relative;

                    svg {
                        right: 0;
                        position: absolute;
                    }
                }

                .two {
                    padding-top: 25px;
                    width: 100%;
                    font-weight: 600;
                    display: grid;
                    gap: 20px;

                    .item {
                        display: flex;
                        gap: 10px;
                        flex-direction: column;

                        .b {
                            opacity: 0.5;
                        }
                    }
                }

                .right1 {
                    padding-top: 20px;

                    .icons {
                        right: 0px;
                        display: flex;

                        .icon-item {
                            cursor: pointer;
                            color: white;
                            height: 50px;
                            width: 50px;
                            background-color: #3d82db;
                            border-radius: 15px;
                            text-align: center;
                            line-height: 50px;
                            margin-right: 10px;
                            font-size: 20px;

                            &:nth-child(3) {
                                svg {
                                    transform: rotateZ(-40deg);
                                }
                            }
                        }
                    }
                }
            }
        }

        .right {
            padding-top: 20px;

            .icons {
                position: absolute;
                right: 0px;
                display: flex;

                .icon-item {
                    cursor: pointer;
                    color: white;
                    height: 50px;
                    width: 50px;
                    background-color: #3d82db;
                    border-radius: 15px;
                    text-align: center;
                    line-height: 50px;
                    margin-right: 10px;
                    font-size: 20px;

                    &:nth-child(3) {
                        svg {
                            transform: rotateZ(-40deg);
                        }
                    }
                }
            }
        }
    }
}
</style>
