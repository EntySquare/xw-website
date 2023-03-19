<script setup lang='ts'>
import useStore from '@/store/index'
import { ref, nextTick } from 'vue';
let { cate } = useStore()
let { getThemenum } = cate
// background: linear - gradient(162.55deg, #3FFFF3 3.18 %, #E127FF 82.44 %);

</script>
<template>
    <div class="header">
        <div class="body">
            <div class="left">
                <div class="top">
                    <div style="color: #000;">
                        <p>专辑</p>
                        <p style="color: #1C5AB8;">醒目猴</p>
                    </div>
                    <LockDiv class="img"
                        :style="{ 'background-image': ' url(' + `${'https://img2.wallspic.com/previews/2/0/5/7/5/157502/157502-rick_and_morty-mo_dishi_mi_si-li_ke_sisang_qie_si-hai_bao-yi_shu-x750.jpg'}` + ')' }">
                    </LockDiv>
                </div>
            </div>
            <div class="right">
                <div class="top">
                    <div class="u">
                        <div class="title">醒目猴子 #100</div>
                        <div class="likeconst">已有100人收藏</div>
                    </div>
                    <div class="m">
                        <a-avatar :size="50">
                            <img alt="avatar"
                                src="https://img2.wallspic.com/previews/2/0/5/7/5/157502/157502-rick_and_morty-mo_dishi_mi_si-li_ke_sisang_qie_si-hai_bao-yi_shu-x750.jpg" />
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
                <div :class="[+getThemenum() ? 'bt' : 'ht', 'price']">
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
.bt {
    background-color: #fff !important;
}

.ht {
    background: linear-gradient(162.55deg, #3FFFF3 3.18%, #E127FF 82.44%) !important;
}

.header {

    .body {
        display: flex;
        width: 100%;
        padding-top: 20px;
        // gap: 40px;

        .left {
            box-sizing: border-box;
            flex: 5.5;

            .top {
                border-radius: 24px;
                background-color: #fff;
                box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
                overflow: hidden;

                div {
                    height: 50px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 40px;
                    font-size: 20px;
                    font-weight: 600;
                    padding-right: 25px;
                }

                .img {
                    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
                    border-radius: 24px;
                    background-size: cover;
                    background-position: center;
                }
            }
        }

        .right {
            padding: 20px;
            box-sizing: border-box;
            flex: 7;
            // background-color: #fff;

            .top {
                .u {
                    display: flex;
                    justify-content: space-between;

                    .title {
                        font-size: 35px;
                        font-weight: 600;
                    }

                    .likeconst {
                        font-size: 20px;
                        font-weight: 800;
                    }
                }

                .m {
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    font-size: 20px;
                    font-weight: 800;

                    p {
                        color: #1C5AB8;
                    }
                }

                .d {
                    display: flex;
                    padding-top: 50px;
                    gap: 40px;
                    font-size: 20px;

                    span {
                        display: flex;
                        // gap: 10px;

                        p {
                            padding-left: 10px;
                            color: #1C5AB8;
                        }
                    }
                }
            }
        }

        .price {
            margin-top: 20px;
            height: 130px;
            // background: #FFFFFF;
            border-radius: 12px;
            display: flex;
            align-items: center;
            padding: 0 20px;
            box-sizing: border-box;

            .right {
                // background-color: palevioletred;
                display: flex;
                flex-direction: column;
                align-items: center;

                .u {
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 18px;
                }

                .d {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 30px;

                    i {
                        color: #1C5AB8;
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
                    font-weight: 600;
                    font-size: 18px;
                }

                &:nth-child(2) {
                    font-weight: 600;
                    margin-left: 30px;
                    color: #1C5AB8;
                    font-size: 35px;
                }
            }

            .shop {
                // flex: 1;
                display: grid;
                gap: 5px;
                text-align: center;
                font-size: 12px;
                font-weight: 600;

                .iconimg {
                    background-color: #1C5AB8;
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