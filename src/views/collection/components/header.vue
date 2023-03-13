<script setup lang='ts'>
</script>
<template>
    <div class="header">
        <div class="avater"></div>
        <div class="body">
            <div class="container">
                <a-avatar shape="square" :size="100" style="border: 3px solid blueviolet;position: absolute;top: -60px;">
                    <img alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
                <div class="title">
                    <div class="left">
                        <a-typography-title :heading="2">
                            小霸王游戏机
                        </a-typography-title>
                        <a-typography-title :heading="5">
                            21312...213123
                        </a-typography-title>
                        <a-typography-title :heading="5">
                            BIO
                        </a-typography-title>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.header {
    .avater {
        background-image: url('@/assets/images/_ZizVWFW_400x400.jpg');
        background-size: cover;
        background-position: center;
        padding-top: 23vw;
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
            padding-top: 40px;

            h2,
            h5 {
                font-weight: 900 !important;
            }
        }

        .right {
            padding-top: 10px;

            .icons {
                display: flex;

                .icon-item {
                    cursor: pointer;
                    color: white;
                    height: 50px;
                    width: 50px;
                    background-color: #3D82DB;
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