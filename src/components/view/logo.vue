<template>
    <div class="logo-container">
        <div class="ball-white"></div>
        <div class="ball-red"></div>
        <div class="ball-button"></div>
        <div class="pokemon">
            <div class="face">
                <div class="face-red-left"></div>
                <div class="face-red-right"></div>
            </div>
            <div class="eye1"></div>
            <div class="eye1-white"></div>
            <div class="eye2"></div>
            <div class="eye2-white"></div>
            <div class="mouth">
                <div class="mouth-white">
                </div>
            </div>
            <div class="ear-left"></div>
            <div class="ear-left-yellow"></div>
            <div class="ear-left-black"></div>
            <div class="ear-right"></div>
            <div class="ear-right-yellow"></div>
            <div class="ear-right-black"></div>
        </div>
        <div class="heart"></div>
        <p class="info">纯div + css动画，非图片</p>
    </div>
</template>

<script>
export default {
    name: 'logo',
    components: {
    }
}
</script>

<style lang='scss'>
.logo-container{
    position: relative;
    width: 80%;
    height: 50vh;
    margin: -50vh auto 0;
    .ball-white{
        position: absolute;
        top: 10vh;
        left: calc(50% - 15vh + 0.2rem);
        height: 29vh;
        width: 15vh;
        border-radius: 15vh 0 0 15vh;
        background: #fff;
        border: 0.5rem solid;
        /* 动画名称 */
        animation-name: white-move;
        /* 持续时间 */
        animation-duration: 6s;
        /* 动画过度类型 */
        animation-timing-function: linear;
        /* 动画是否反向运动 normal顺时针  reverse逆时针 alternate-reverse（正反循环 */
        animation-direction: alternate-reverse;
        /* 动画循环次数  infinite无限 */
        animation-iteration-count: infinite;
        box-shadow: 0px -20px 10px #ddd inset;
        z-index: 30;
    }
    .ball-red{
        position: absolute;
        top: 10vh;
        right: calc(50% - 15vh + 0.2rem);
        height: 29vh;
        width: 15vh;
        border-radius: 0 15vh 15vh 0;
        background: #ED4A35;
        border: 0.5rem solid;
        /* 动画名称 */
        animation-name: red-move;
        /* 持续时间 */
        animation-duration: 6s;
        /* 动画过度类型 */
        animation-timing-function: linear;
        /* 动画是否反向运动 normal顺时针  reverse逆时针 alternate-reverse（正反循环 */
        animation-direction: alternate-reverse;
        /* 动画循环次数  infinite无限 */
        animation-iteration-count: infinite;
        box-shadow: 0px -20px 10px #af392a inset;
        z-index: 30;
    }
    .ball-button{
        position: absolute;
        top: calc(50% - 3.5vh);
        right: calc(50% - 3vh);
        width: 6vh;
        height: 6vh;
        border-radius: 50%;
        background: #fff;
        border: 10px solid;
        /* 动画名称 */
        animation-name: button-move;
        /* 持续时间 */
        animation-duration: 6s;
        /* 动画过度类型 */
        animation-timing-function: linear;
        /* 动画是否反向运动 normal顺时针  reverse逆时针 alternate-reverse（正反循环 */
        animation-direction: alternate-reverse;
        /* 动画循环次数  infinite无限 */
        animation-iteration-count: infinite;
        z-index: 50;
    }
    .pokemon{
        position: absolute;
        width: 12vh;
        height: 10vh;
        left: calc( 50% - 6vh);
        top: 22vh;
        .face{
            position: absolute;
            width: 12vh;
            height: 10vh;
            left: 0;
            top: 0;
            background: #FDE990;
            border-radius: 50%;
            box-shadow: 0px -5px 10px #dacc8c inset;
            border: 1px solid #000;
            overflow: hidden;
            z-index: 8;
            .face-red-left{
                position: absolute;
                width: 3.5vh;
                height: 3.5vh;
                top: 5vh;
                left: -1.2vh;
                border-radius: 4vh;
                border: 1px solid;
                background: #E0787F;
            }
            .face-red-right{
                position: absolute;
                width: 3.5vh;
                height: 3.5vh;
                top: 5vh;
                right: -1.2vh;
                border-radius: 4vh;
                border: 1px solid;
                background: #E0787F;
            }
        }
        .eye1{
            position: absolute;
            width: 2.5vh;
            height: 2.5vh;
            top: 3vh;
            left: 1.5vh;
            border-radius: 2.5vh;
            background: #000;
            z-index: 10;
        }
        .eye1-white{
            position: absolute;
            width: 1vh;
            height: 1vh;
            top: 3vh;
            left: 2.7vh;
            border-radius: 2.5vh;
            background: #fff;
            z-index: 20;
        }
        .eye2{
            position: absolute;
            width: 2.5vh;
            height: 2.5vh;
            top: 3vh;
            right: 1.5vh;
            border-radius: 2.5vh;
            background: #000;
            z-index: 10;
        }
        .eye2-white{
            position: absolute;
            width: 1vh;
            height: 1vh;
            top: 3vh;
            right: 2.7vh;
            border-radius: 2.5vh;
            background: #fff;
            z-index: 20;
        }
        .mouth{
            position: absolute;
            width: 2.5vh;
            height: 0.7vh;
            top: 6.5vh;
            right: 4.8vh;
            border-radius: 0 0 2.5vh 2.5vh;
            background: #000;
            z-index: 20;
            .mouth-white{
                position: absolute;
                width: 2.4vh;
                height: 0.5vh;
                left: 0.05vh;
                border-radius: 0 0 2.4vh 2.4vh;
                background: #FDE990;
                z-index: 20;
            }
        }
        .ear-left{
            position: absolute;
            width: 7vh;
            height: 6vh;
            left: 9vh;
            top: -4vh;
            background: #000;
            transform: skewX(-32deg) rotate(-7deg);
            z-index: 5;
        }
        .ear-left-yellow{
            position: absolute;
            width: 5.5vh;
            height: 5.2vh;
            right: 8.4vh;
            top: -2.9vh;
            background: #FDE990;
            transform: skewX(32deg) rotate(7deg);
            border: 1px solid;
            z-index: 6;
        }
        .ear-left-black{
            position: absolute;
            width: 2.5vh;
            height: 2.2vh;
            right: 13vh;
            top: -3.9vh;
            background: #000;
            transform: skewX(32deg) rotate(7deg);
            z-index: 7;
        }
        .ear-right{
            position: absolute;
            width: 7vh;
            height: 6vh;
            right: 9vh;
            top: -4vh;
            background: #000;
            transform: skewX(32deg) rotate(7deg);
            z-index: 5;
        }
        .ear-right-yellow{
            position: absolute;
            width: 5.5vh;
            height: 5.2vh;
            left: 8.5vh;
            top: -2.9vh;
            background: #FDE990;
            transform: skewX(-32deg) rotate(-7deg);
            border: 1px solid;
            z-index: 6;
        }
        .ear-right-black{
            position: absolute;
            width: 2.5vh;
            height: 2.2vh;
            left: 13vh;
            top: -3.9vh;
            background: #000;
            transform: skewX(-32deg) rotate(-7deg);
            z-index: 7;
        }
    }
    .heart{
        position: relative;
        left: 37vw;
        top: 13vh;
        &:before,&:after{
            content: "";
            position: absolute;
            width: 3vw;
            height: 4.5vw;
            background: red;
            left: 3vw;
            top: 0;
            border-radius: 2vw 2vw 0 0;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
            animation-name: red-heart;
            /* 持续时间 */
            animation-duration: 6s;
            /* 动画过度类型 */
            animation-timing-function: linear;
            /* 动画是否反向运动 normal顺时针  reverse逆时针 alternate-reverse（正反循环 */
            animation-direction: alternate-reverse;
            /* 动画循环次数  infinite无限 */
            animation-iteration-count: infinite;
        }
        &:after{
            left: 0;
            transform: rotate(45deg);
            transform-origin: 100% 100%;
            animation-name: red-heart, red-heart-after;
            /* 持续时间 */
            animation-duration: 6s;
            /* 动画过度类型 */
            animation-timing-function: linear;
            /* 动画是否反向运动 normal顺时针  reverse逆时针 alternate-reverse（正反循环 */
            animation-direction: alternate-reverse;
            /* 动画循环次数  infinite无限 */
            animation-iteration-count: infinite;
        }
    }
}

@keyframes white-move {
    from {left: calc(50% - 15vh + 0.2rem)}
    20% {left: calc(50% - 15vh + 0.2rem)}
    35% {left: calc(50% - 34vh + 0.2rem)}
    40% {left: calc(50% - 35vh + 0.2rem)}
    60% {left: calc(50% - 35vh + 0.2rem)}
    65% {left: calc(50% - 34vh + 0.2rem)}
    80% {left: calc(50% - 15vh + 0.2rem)}
    to {left: calc(50% - 15vh + 0.2rem)}
}
@keyframes red-move {
    from {right: calc(50% - 15vh + 0.2rem)}
    20% {right: calc(50% - 15vh + 0.2rem)}
    35% {right: calc(50% - 34vh + 0.2rem)}
    40% {right: calc(50% - 35vh + 0.2rem)}
    60% {right: calc(50% - 35vh + 0.2rem)}
    65% {right: calc(50% - 34vh + 0.2rem)}
    80% {right: calc(50% - 15vh + 0.2rem)}
    to {right: calc(50% - 15vh + 0.2rem)}
}
@keyframes button-move {
    from {right: calc(50% - 3vh)}
    20% {right: calc(50% - 3vh)}
    35% {right: calc(50% - 22vh)}
    40% {right: calc(50% - 23vh)}
    60% {right: calc(50% - 23vh)}
    65% {right: calc(50% - 22vh)}
    80% {right: calc(50% - 3vh)}
    to {right: calc(50% - 3vh)}
}
@keyframes red-heart {
    from {  
        width: 3vw;
        height: 4.5vw;
        top: 0;
        background: red;
        border-radius: 2vw 2vw 0 0;
    }
    40% {
        width: 3vw;
        height: 4.5vw;
        top: 0;
        background: red;
        border-radius: 2vw 2vw 0 0;
    }
    50% {
        width: 4vw;
        height: 6vw;
        top: -2vh;
        background: red;
        border-radius: 2.6666vw 2.66666vw 0 0;
    }
    60% {
        width: 3vw;
        height: 4.5vw;
        top: 0;
        background: red;
        border-radius: 2vw 2vw 0 0;
    }
    to {
        width: 3vw;
        height: 4.5vw;
        top: 0;
        background: red;
        border-radius: 2vw 2vw 0 0;
    }
}
@keyframes red-heart-after {
    from {  
        left: 0;
    }
    40% {
        left: 0;
    }
    50% {
        left: -1vw
    }
    60% {
        left: 0;
    }
    to {
        left: 0;
    }
}

</style>
