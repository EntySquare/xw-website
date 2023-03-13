<script setup lang='ts'>
</script>
<template>
    <div class="header">
        <div class="body">
            <div class="left">
                <div class="top">
                    <div style="color: #000;">
                        <p>专辑</p>
                        <p>醒目猴</p>
                    </div>
                    <img src="@/assets/images/_ZizVWFW_400x400.jpg" alt="">
                </div>
            </div>
            <div class="right">
                <div class="top">
                    <div class="u">
                        <div class="title">醒目猴子#100</div>
                        <div class="likeconst">已有100人收藏</div>
                    </div>
                    <div class="m">
                        <a-avatar>
                            <img alt="avatar"
                                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                        </a-avatar>
                        持有者
                        <p>玄武数藏</p>
                    </div>
                    <div class="d">
                        <span>作品编号<p>#488/500</p></span>
                        <span>浏览<p>120</p></span>
                        <span>收藏<p>330</p></span>
                        <span>类别<p>潮流</p></span>
                    </div>
                </div>
                <div class="price">
                    <span>当前价格</span>
                    <span>¥500</span>
                    <div class="right">
                        <div class="u">倒计时</div>
                        <div class="d"><i>05</i>:<i>05</i>:<i>05</i></div>
                    </div>
                    <div class="shop">
                        <div class="iconimg">
                            <icon-thunderbolt :size="30" />
                        </div>
                        立即购买
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.header {

    .body {
        display: flex;
        width: 100%;
        padding-top: 40px;
        gap: 40px;

        .left {
            box-sizing: border-box;
            flex: 1;

            .top {
                border-radius: 24px;
                background-color: #fff;
                box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);

                div {
                    height: 80px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 20px;
                    font-size: 20px;
                    padding-right: 20px;
                }

                img {
                    width: 100%;
                    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
                    border-radius: 24px;
                }
            }
        }

        .right {
            padding: 20px;
            box-sizing: border-box;
            flex: 1;
            // background-color: #fff;

            .top {
                .u {
                    display: flex;
                    justify-content: space-between;

                    .title {
                        font-size: 30px;
                        font-weight: 800;
                    }

                    .likeconst {
                        font-size: 20px;
                        font-weight: 800;
                    }
                }

                .m {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    font-size: 20px;
                    font-weight: 800;

                    p {
                        color: blue;
                    }
                }

                .d {
                    display: flex;
                    padding-top: 50px;
                    gap: 10px;
                    font-size: 18px;

                    span {
                        display: flex;
                        gap: 10px;

                        p {
                            color: blue;
                        }
                    }
                }
            }
        }

        .price {
            margin-top: 20px;
            background: #FFFFFF;
            border-radius: 12px;
            display: flex;
            align-items: center;
            padding: 0 20px;
            box-sizing: border-box;

            .right {
                display: flex;
                flex-direction: column;
                align-items: center;

                .u {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 18px;
                }

                .d {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 30px;

                    i {
                        color: blue;
                        display: inline-block;
                        width: 45px;
                        height: 45px;
                        line-height: 45px;
                        border-radius: 12px;
                        background-color: #ebebeb81;
                        text-align: center;
                    }
                }
            }

            span {
                &:nth-child(1) {
                    font-size: 18px;
                }

                &:nth-child(2) {
                    margin-left: 30px;
                    color: blue;
                    font-size: 30px;
                }
            }

            .shop {
                display: grid;
                gap: 5px;
                text-align: center;
                font-size: 12px;

                .iconimg {
                    background-color: blue;
                    width: 60px;
                    height: 60px;
                    border-radius: 10px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        background-color: black;
                    }
                }
            }
        }
    }

    // .container {
    //     position: relative;
    //     width: 100%;
    //     max-width: 2560px;
    //     padding: 0 70px;
    // }

}
</style>