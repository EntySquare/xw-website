<script setup lang='ts'>
import { ref } from 'vue'
let show1 = ref(false)
const getWindowInfo = () => {
    show1.value = window.matchMedia('(max-width: 600px)').matches ? true : false
}
window.addEventListener('resize', getWindowInfo)
getWindowInfo()
</script>
<template>
    <div class="header">
        <div class="avater"></div>
        <div class="body">
            <div class="container">
                <a-avatar :size="100" style="border: 3px solid white;position: absolute;top: -60px;">
                    <img alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
                <div class="title">
                    <div class="left">
                        <a-typography-title>
                            <div style="font-size: 30px;">
                                小霸王游戏机
                            </div>
                        </a-typography-title>
                        <a-typography-title>
                            <div style="font-size: 20px;">
                                21312...213123
                            </div>
                        </a-typography-title>
                        <a-typography-title>
                            <div style="font-size: 20px;">
                                BIO
                            </div>
                        </a-typography-title>
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
</template>
<style scoped lang='less'>
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

    .title {
        display: flex;
        justify-content: space-between;

        .left {
            padding-top: 60px;
            display: flex;
            flex-direction: column;
            gap: 10px;

            div {
                font-weight: 800 !important;
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