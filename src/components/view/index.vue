<template>
    <div class="section-container">
        <div class="section summary">
            <div class="summary-content">
                <index-logo>
                </index-logo>
                <transition name="fade">
                    <div class="text" v-if="showSummary">
                        <p class="title">你好，我是Bran Lin。</p>
                        <p class="descript">一个前端工程师</p>
                    </div>
                </transition>
                <transition name="fadebtn">
                    <div class="btn-box row " v-if="showSummary">
                        <div class="col-sm-6">
                            <button class="btn about" v-on:click="goAbout">我的简介</button>
                        </div>
                        <div class="col-sm-6">
                            <button class="btn pd" v-on:click="goProd">个人小作品</button>
                        </div>
                    </div>
                </transition>
                <div v-if="showTop" class="go-top" @click="goTop">
                    <img src="../../assets/img/go-top.png" alt="">
                </div>
            </div>
        </div>
        <div class="section about">
            <div class="about-content">
                <div class="menu-bar" :class="{'fixed': fixMenu}">
                    <div class="menu-title">Bran.Lin的个人主页</div>
                    <div class="menu-icon" @click="showMenu = !showMenu">
                    </div>
                    <transition name="menu">
                        <div v-if="showMenu" class="menu-list">
                            <div class="menu-item" :class="{'active': (activeSection == 'about')}" @click="goAbout">
                                我的简介
                            </div>
                            <div class="menu-item" :class="{'active': (activeSection == 'prod')}" @click="goProd">
                                个人作品
                            </div>
                            <div class="menu-item" :class="{'active': (activeSection == 'exp')}" @click="goExp">
                                个人经历
                            </div>
                            <div class="menu-item" :class="{'active': (activeSection == 'contact')}" @click="goContact">
                                联系我
                            </div>
                        </div>
                    </transition>
                    <div v-if="showMenu" class="menu-mask"  @click="showMenu = false" v-on:scroll="showMenu = false"></div>
                </div>
                <p class="section-title" :class="{'fixed': fixMenu}">
                    我的简介
                    <transition
                        name="title"
                        enter-class="enter"
                        enter-active-class="animated"
                        leave-active-class="animated"
                        leave-to-class="enter"
                    >
                        <div class="section-title-after" v-if="showAbout"></div>
                    </transition>
                </p>
                <transition name="fade">
                    <div v-if="showAbout">
                        <div class="avatar-box">
                            <img src="../../assets/img/avatar.jpg" alt="">
                        </div>
                        <div class="text-box">
                            <div class="text">
                                我叫林泊伦，坐标广州，是一名Web前端工程师。2017年毕业于南方医科大学的电子信息工程专业。比较爱钻牛角尖，对一个像素的差别都要计较，目前在前端的行业上努力中。
                            </div>
                            <br>
                            <div class="text">
                                技术掌握：HTML、CSS、js、jQ、<span class="bold">Vue.js</span>、<span class="bold">Typescript</span>、Mysql
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="section prod">
            <div class="prod-content">
                <p class="section-title">
                    个人作品
                    <transition
                        name="title"
                        enter-class="enter"
                        enter-active-class="animated"
                        leave-active-class="animated"
                        leave-to-class="enter"
                    >
                        <div class="section-title-after" v-if="showProd"></div>
                    </transition>
                </p>
                <transition name="fade">
                    <div v-if="showProd" class="prod-box">
                        <div class="prod-item" @click="goPushBox">
                            <div class="text-box">
                                <p class="title">推箱子</p>
                                <p class="des">使用 JS + Canvas 实现的网页游戏</p>
                            </div>
                            <div class="logo-box">
                                <img class="logo" src="../../assets/img/prod-logo1.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="section exp">
            <div class="exp-content">
                <p class="section-title">
                    个人经历
                    <transition
                        name="title"
                        enter-class="enter"
                        enter-active-class="animated"
                        leave-active-class="animated"
                        leave-to-class="enter"
                    >
                        <div class="section-title-after" v-if="showExp"></div>
                    </transition>
                </p>
                <transition name="fade">
                    <div v-if="showExp" class="exp-box">
                        <div class="exp-item">
                            <div class="exp-date">
                                <p>2016-11</p>
                                <p>|</p>
                                <p>至今</p>
                            </div>
                            <div class="exp-content">
                                <strong>广州奔步电脑有限公司</strong>
                                <p class="sub-title">中国事业部 / Web前端工程师</p>
                                <p>①. 按照设计稿，完成页面布局、交互效果和页面功能</p>
                                <p>②. 修复页面BUG和优化代码结构和网页性能</p>
                            </div>
                        </div>
                        <div class="exp-item">
                            <div class="exp-date">
                                <p>2013-09</p>
                                <p>|</p>
                                <p>2017-07</p>
                            </div>
                            <div class="exp-content">
                                <strong>南方医科大学</strong>
                                <p class="sub-title">本科 / 电子信息工程</p>
                                <p>获得 大学英语四级 证书</p>
                                <p>获得 校编程比赛 第一名</p>
                                <p>担任 学生会 文娱部部长</p>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="section contact">
            <div class="contact-content">
                <p class="section-title">
                    联系我
                    <transition
                        name="title"
                        enter-class="enter"
                        enter-active-class="animated"
                        leave-active-class="animated"
                        leave-to-class="enter"
                    >
                        <div class="section-title-after" v-if="showContact"></div>
                    </transition>
                </p>
                <transition name="fade">
                    <div v-if="showContact" class="contact-box">
                        <div class="contact-item">
                            <div class="img-box">
                                <img src="../../assets/img/iphone.png" alt="">
                            </div>
                            <div class="text-box">
                                <a href="tel:15626430400"><p>156 2643 0400</p></a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="img-box">
                                <img src="../../assets/img/email (Filled).png" alt="">
                            </div>
                            <div class="text-box">
                                <p @click="copyNum('124061002@qq.com')">124061002@qq.com</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="img-box">
                                <img src="../../assets/img/qq.png" alt="">
                            </div>
                            <div class="text-box">
                                <p @click="copyNum('124061002')">124061002</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="img-box">
                                <img src="../../assets/img/wechat.png" alt="">
                            </div>
                            <div class="text-box">
                                <p @click="copyNum('qq124061002')">qq124061002</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="img-box">
                                <img src="../../assets/img/github.png" alt="">
                            </div>
                            <div class="text-box">
                                <a href="https://github.com/qq124061002"><p>https://github.com/qq124061002</p></a>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import indexLogo from '../common/logo.vue';

export default {
    name: 'index',
    components: {
        indexLogo
    },
    data(){
        return {
            showSummary: false,
            showAbout: false,
            showProd: false,
            showExp: false,
            showContact: false,
            showTop: false,
            fixMenu: false,
            showMenu: false,
            activeSection: ''
        }
    },
    mounted() {
        let _this = this;

        window.onscroll = function(e) {
            _this.srcollListener(e);
        };

        setTimeout(() => {
            _this.showSummary = true;
            _this.activeSection = 'summary';
        }, 100)
    },
    methods: {
        srcollListener(event){
            let item = event.srcElement.scrollingElement;

            //触发动画并记录当前所在界面
            if(item.scrollTop < 0.5*item.clientHeight) {
                this.activeSection = 'summary';
            } else if (item.scrollTop >= 0.5*item.clientHeight && item.scrollTop < (1.5*item.clientHeight)) {
                this.showAbout = true;
                this.activeSection = 'about';
            } else if (item.scrollTop >= (1.5*item.clientHeight) && item.scrollTop <= (2.5*item.clientHeight)) {
                this.showProd = true;
                this.activeSection = 'prod';
            } else if (item.scrollTop >= (2.5*item.clientHeight) && item.scrollTop <= (3.5*item.clientHeight)) {
                this.showExp = true;
                this.activeSection = 'exp';
            } else if (item.scrollTop >= (3.5*item.clientHeight)){
                this.showContact = true;
                this.activeSection = 'contact';
            }

            //显示导航栏
            if(item.scrollTop >= item.clientHeight) {
                this.showTop = true;
                this.fixMenu = true;
            } else {
                this.showTop = false;
                this.fixMenu = false;
            }
        },
        goAbout() {
            let item = document.documentElement;
            this.scrollTop(item.clientHeight);
            this.showMenu = false;
        },
        goProd() {
            let item = document.documentElement;
            this.scrollTop(2*item.clientHeight);
            this.showMenu = false;
        },
        goExp() {
            let item = document.documentElement;
            this.scrollTop(3*item.clientHeight);
            this.showMenu = false;
        },
        goContact() {
            let item = document.documentElement;
            this.scrollTop(4*item.clientHeight);
            this.showMenu = false;
        },
        goTop() {
            setTimeout(() => {
                this.scrollTop(0);
            }, 500)
        },
        scrollTop(destination) {
            let scrollItem = document.documentElement;
            let distance = destination - scrollItem.scrollTop;
            let preDistance = distance / 100;
            let SumDistance = scrollItem.scrollTop;
            let i = 0;

            let Action = setInterval(() => {
                if(i < 100) {
                    i++;
                    SumDistance += preDistance;
                    scrollItem.scrollTop = Math.ceil(SumDistance);
                } else {
                    clearInterval(Action)
                }
            }, 5)
        },
        goPushBox() {
            this.$router.push('/pushBox')
        },
        copyNum(Num) {
            let url = Num;
            let oInput = document.createElement('input');
            oInput.value = url;
            document.body.appendChild(oInput);
            oInput.select();
            document.execCommand("Copy");
            oInput.remove()
            alert("复制号码成功！");
        }
    }
}
</script>

<style lang='scss'>
.section-container{
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    background-image: url(../../assets/img/bg2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    .section{
        width: 100%;
        height: 100vh;
        min-height: 568px;
        position: relative;
        padding-bottom: 20px;
        &.summary{
            color: #2c3e50;
            position: relative;
            background-image: url(../../assets/img/bg1.jpg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            overflow: hidden;
            .summary-content {
                padding: 50vh 0 0;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                text-align: center;
                letter-spacing: 2px;
                transition: all 0.35s;
                background: rgba(256,256,256,0.5);
                .text{
                    color: #fff;
                    font-weight: bold;
                    .title{
                        font-size: 1.4rem;
                    }
                    .descript{
                        font-size: 1rem;
                    }
                }
                .btn-box{
                    margin: 1rem auto;
                    width: 80vw;
                    max-width: 600px;
                    .btn{
                        width: calc(100% - 20px);
                        margin: 10px;
                        padding: 5px 0;
                        font-size: 0.8rem;
                        border-radius: 6px;
                    }
                    .about{
                        border: 1px solid #AF392A;
                        background: #AF392A;
                        color: #fff;
                    }
                    .pd{
                        border: 1px solid #fff;
                        background: #fff;
                    }
                }
            }
        }
        &.about{
            background: #fff;
            .section-title{
                padding-top: 1rem;
                &.fixed{
                    padding-top: 4rem;
                }
            }
            .about-content{
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                .avatar-box{
                    position: relative;
                    width: 9rem;
                    left: calc(50% - 4.5rem);
                    border-radius: 50%;
                    overflow: hidden;
                    margin-top: 20px;
                    img{
                        width: 100%;
                    }
                }
                .text-box{
                    flex: 1;
                    padding: 1.5rem;
                    font-size: 0.7rem;
                    color: #999;
                }
            }
        }
        &.prod{
            background-color: rgba(256,256,256,0.7);
            .prod-box{
                height: calc(100% - 3.5rem);
                padding: 1.5rem;
                .prod-item{
                    width: 100%;
                    height: 30%;
                    display: flex;
                    border: 1px solid #999;
                    background-color: rgba(0,0,0,0.5);
                    .text-box{
                        flex: 1;
                        padding: 1rem;
                        color: #fff;
                        p{
                            padding-top: 0.5rem;
                        }
                        .title{
                            font-size: 1rem;
                        }
                        .des{
                            font-size: 0.6rem;
                        }
                    }
                    .logo-box{
                        flex: 0 0 6rem;
                        display: flex;
                        align-items: center;
                        padding-right: 1.5rem;
                        line-height: 100%;
                        vertical-align: middle;
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
        &.exp{
            background-color: #fff;
            .exp-box{
                display: flex;
                flex-direction: column;
                height: calc(100% - 3.5rem);
                padding: 2rem 1rem 0;
                .exp-item{
                    position: relative;
                    &:first-child {
                        flex: 6
                    }
                    &:nth-child(2) {
                        flex: 5;
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        height: 100%;
                        width: 0.1rem;
                        left: 2.4rem;
                        background-color: #adcbf7;
                    }
                    .exp-date{
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        position: absolute;
                        width: 5rem;
                        height: 5rem;
                        background-color: #adcbf7;
                        border-radius: 100%;
                        font-size: 0.75rem;
                        color: #fff;
                        text-align: center;
                        z-index: 10;
                        p{
                            font-weight: 700;
                        }
                    }
                    .exp-content{
                        width: 100%;
                        height: 100%;
                        padding-top: 5.5rem;
                        padding-left: 3rem;
                        .sub-title{
                            font-size: 0.8rem;
                            line-height: 2rem;
                            color: #AF392A;
                        }
                        p{
                            font-size: 0.7rem;
                        }
                    }
                }
            }
        }
        &.contact{
            background-color: rgba(256,256,256,0.7);
            .contact-box{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: calc(85vh - 3.5rem);
                padding: 2rem 1rem 0;
                .contact-item{
                    flex: 0 0 3.2rem;
                    display: flex;
                    flex-direction: column;
                    background-color: rgba(255,255,255,0.8);
                    border-radius: 3.2rem;
                    .img-box{
                        flex: 0 0 1.5rem;
                        padding-left: 1.4rem;
                        img{
                            width: 1.5rem;
                        }
                    }
                    .text-box{
                        flex: 1;
                        p{
                            font-size: 0.8rem;
                            font-weight: 500;
                            padding-left: 1.4rem;
                            color: #007bff;
                        }
                    }
                }
            }
        }
        .section-title{
            position: relative;
            padding-top: 4rem;
            text-align: center;
            font-size: 1.4rem;
            line-height: 2.1rem;
        }
    }
    .go-top{
        position: fixed;
        right: 1rem;
        bottom: 5rem;
        width: 3rem;
        height: 3rem;
        padding-top: 0.25rem;
        background-color: rgba(0,0,0,0.3);
        border-radius: 100%;
        z-index: 10;
        img{
            width: 2.5rem;
            height: 2.5rem;
        }
    }
    .menu-bar{
        position: relative;
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        background-color: #AF392A;
        color: #fff;
        font-size: 0.8rem;
        z-index: 100;
        .menu-icon{
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            right: 1rem;
            bottom: 0.75rem;
            background-image: url(../../assets/img/menu-icon.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        .menu-list{
            position: absolute;
            right: 0.5rem;
            top: 3.2rem;
            width: 6rem;
            height: auto;
            background-color: #333;
            border-radius: 10px;
            z-index: 102;
            &::before{
                content: '';
                position: absolute;
                top: -1rem;
                right: 0.75rem;
                width: 1rem;
                height: 1rem;
                border-bottom: 0.5rem solid #333;
                border-right: 0.5rem solid transparent;
                border-left: 0.5rem solid transparent;
            }
            .menu-item{
                height: 2.5rem;
                line-height: 2.5rem;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                &.active{
                    color: #AF392A;
                }
            }
        }
        .menu-mask{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 101;
        }
        &.fixed {
            position: fixed;
            top: 0;
            z-index: 100;
        }
    }
    .section-title-after{
        content: '';
        width: 4rem;
        height: 5px;
        background: #AF392A;
        position: absolute;
        bottom: -10px;
        left: calc(50% - 2rem);
        &.enter{
            width: 0;
            left: 50%;
        }
        &.animated{
            transition: all 1s;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .fade-leave-to {
        transform: translateY(2em);
        opacity: 0;
    }
    .fadebtn-enter-active, .fadebtn-leave-active {
        transition: all 1s linear 1s;
    }
    .fadebtn-enter, .fadebtn-leave-to {
        transform: translateY(2em);
        opacity: 0;
    }
    .menu-enter, .menu-leave-to {
        transform: translateY(-1em);
        height: 0;
        opacity: 0;
    }
    .menu-enter-active, .menu-leave-active {
        transition: all 0.2s;
    }
}
</style>
