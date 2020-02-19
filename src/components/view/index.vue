<template>
    <div class="section-container" v-on:scroll.passive="srcollListener" ref="SectionContainer">
        <div class="section summary" :class="{'active': (activeSection == 'summary')}">
            <div class="summary-content">
                <index-logo>
                </index-logo>
                <transition name="fade">
                    <div class="text" v-if="showSummary">
                        <p class="title">你好，我是Bran Lin。</p>
                        <p class="descript">一个钻牛角尖的前端工程师</p>
                    </div>
                </transition>
                <transition name="fadebtn">
                    <div class="btn-box row " v-if="showSummary">
                        <div class="col-sm-6">
                            <div class="btn about" v-on:click="goAbout">我的简介</div>
                        </div>
                        <div class="col-sm-6">
                            <div class="btn pd" v-on:click="goProd">作品展示</div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="section about" :class="{'active': (activeSection == 'about')}">
            <div class="about-content">
                
                <p class="section-title">
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
                                我叫林泊伦，坐标广州，是一名Web前端工程师。2017年毕业，是一名在南方医科大学读信息工程的苦逼工科生（orz）。比较爱钻牛角尖，对一个像素的差别都要计较，目前在前端的行业上努力学习中。
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="section prod" :class="{'active': (activeSection == 'prod')}">
            <p class="section-title">
                个人作品
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
            <div class="about-content">
            </div>
        </div>
        <div class="section job" :class="{'active': (activeSection == 'job')}">
        </div>
    </div>
</template>

<script>
import indexLogo from './logo.vue';

export default {
    name: 'index',
    components: {
        indexLogo
    },
    data(){
        return {
            showSummary: false,
            showAbout: false,
            activeSection: ''
        }
    },
    mounted() {
        setTimeout(() => {
            this.showSummary = true;
            this.activeSection = 'summary';
        }, 100)
    },
    methods: {
        srcollListener(event){
            let item = event.srcElement;
            if(item.scrollTop < item.offsetHeight) {
                this.activeSection = 'summary'
            } else if(item.scrollTop >= item.offsetHeight) {
                this.showAbout = true;
                this.activeSection = 'about'
            }

        },
        goAbout() {
            let item = this.$refs.SectionContainer;
            this.scrollTop(item.offsetHeight);
        },
        goProd() {
            let item = this.$refs.SectionContainer;
            this.scrollTop(2*item.offsetHeight);
        },
        scrollTop(destination) {
            let scrollItem = this.$refs.SectionContainer;
            let distance = destination - scrollItem.scrollTop;
            let preDistance = distance/50;
            let i = 0;

            let Action = setInterval(() => {
                if(i <= 51) {
                    i++;
                    scrollItem.scrollTop += preDistance;
                } else {
                    clearInterval(Action)
                }
            }, 10)
        }
    }
}
</script>

<style lang='scss'>
.section-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: auto;
    background-image: url(../../assets/img/bg2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    .section {
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
            }
        }
        &.about{
            padding-top: 5vh;
            background: #fff;
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
                    padding: 30px;
                    font-size: 0.7rem;
                    color: #999;
                }
                .fade-enter-active, .fade-leave-active {
                    transition: all 1s;
                }
                .fade-enter, .fade-leave-to {
                    transform: translateY(2em);
                    opacity: 0;
                }
            }
        }
        &.prod{
            padding-top: 5vh;
            background-color: rgba(256,256,256,0.7)
        }
        &.job{
            padding-top: 5vh;
            background: #fff;
        }
        .section-title{
            position: relative;
            text-align: center;
            font-size: 1.4rem;
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
}
</style>
