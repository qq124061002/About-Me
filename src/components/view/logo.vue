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
        <p class="info">(纯div + css动画，非图片)</p>
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
    width: 300px;
    height: 334px;
    margin: -334px auto 0;
    .ball-white{
        position: absolute;
        top: 67px;
        left: calc(50% - 100px + 3px);
        height: 194px;
        width: 100px;
        border-radius: 98px 0 0 98px;
        background: #fff;
        border: 6px solid #000;
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
        z-index: 30;
    }
    .ball-red{
        position: absolute;
        top: 67px;
        right: calc(50% - 100px + 3px);
        height: 194px;
        width: 100px;
        border-radius: 0 98px 98px 0;
        background: #ED4A35;
        border: 6px solid #000;
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
        z-index: 30;
    }
    .ball-button{
        position: absolute;
        top: calc(50% - 23px);
        right: calc(50% - 20px);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        border: 10px solid #000;
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
        width: 80px;
        height: 67px;
        left: calc( 50% - 40px);
        top: 147px;
        .face{
            position: absolute;
            width: 80px;
            height: 67px;
            left: 0;
            top: 0;
            background: #FDE990;
            border-radius: 50%;
            border: 1px solid #000;
            overflow: hidden;
            z-index: 8;
            .face-red-left{
                position: absolute;
                width: 23px;
                height: 23px;
                top: 33px;
                left: -8px;
                border-radius: 27px;
                border: 1px solid #000;
                background: #E0787F;
            }
            .face-red-right{
                position: absolute;
                width: 23px;
                height: 23px;
                top: 33px;
                right: -8px;
                border-radius: 27px;
                border: 1px solid #000;
                background: #E0787F;
            }
        }
        .eye1{
            position: absolute;
            width: 17px;
            height: 17px;
            top: 20px;
            left: 10px;
            border-radius: 17px;
            background: #000;
            z-index: 10;
        }
        .eye1-white{
            position: absolute;
            width: 7px;
            height: 7px;
            top: 20px;
            left: 18px;
            border-radius: 17px;
            background: #fff;
            z-index: 20;
        }
        .eye2{
            position: absolute;
            width: 17px;
            height: 17px;
            top: 20px;
            right: 10px;
            border-radius: 17px;
            background: #000;
            z-index: 10;
        }
        .eye2-white{
            position: absolute;
            width: 7px;
            height: 7px;
            top: 20px;
            right: 18px;
            border-radius: 17px;
            background: #fff;
            z-index: 20;
        }
        .mouth{
            position: absolute;
            width: 17px;
            height: 5px;
            top: 43px;
            right: 32px;
            border-radius: 0 0 17px 17px;
            background: #000;
            z-index: 20;
            .mouth-white{
                position: absolute;
                width: 16px;
                height: 3px;
                left: 0;
                border-radius: 0 0 16px 16px;
                background: #FDE990;
                z-index: 20;
            }
        }
        .ear-left{
            position: absolute;
            width: 47px;
            height: 40px;
            left: 60px;
            top: -27px;
            background: #000;
            transform: skewX(-32deg) rotate(-7deg);
            z-index: 5;
        }
        .ear-left-yellow{
            position: absolute;
            width: 37px;
            height: 35px;
            right: 56px;
            top: -19px;
            background: #FDE990;
            transform: skewX(32deg) rotate(7deg);
            border: 1px solid #000;
            z-index: 6;
        }
        .ear-left-black{
            position: absolute;
            width: 17px;
            height: 15px;
            right: 87px;
            top: -26px;
            background: #000;
            transform: skewX(32deg) rotate(7deg);
            z-index: 7;
        }
        .ear-right{
            position: absolute;
            width: 47px;
            height: 40px;
            right: 60px;
            top: -27px;
            background: #000;
            transform: skewX(32deg) rotate(7deg);
            z-index: 5;
        }
        .ear-right-yellow{
            position: absolute;
            width: 37px;
            height: 35px;
            left: 57px;
            top: -19px;
            background: #FDE990;
            transform: skewX(-32deg) rotate(-7deg);
            border: 1px solid #000;
            z-index: 6;
        }
        .ear-right-black{
            position: absolute;
            width: 17px;
            height: 15px;
            left: 87px;
            top: -26px;
            background: #000;
            transform: skewX(-32deg) rotate(-7deg);
            z-index: 7;
        }
    }
    .heart{
        position: relative;
        left: 139px;
        top: 87px;
        &:before,&:after{
            content: "";
            position: absolute;
            width: 11px;
            height: 17px;
            background: red;
            left: 11px;
            top: 0;
            border-radius: 8px 8px 0 0;
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
    .info{
        position: absolute;
        top: 267px;
        width: 100%;
        font-size: 16px;
    }
}

@keyframes white-move {
    from {left: calc(50% - 100px + 2px)}
    20% {left: calc(50% - 100px + 2px)}
    35% {left: calc(50% - 227px + 2px)}
    40% {left: calc(50% - 233px + 2px)}
    60% {left: calc(50% - 233px + 2px)}
    65% {left: calc(50% - 227px + 2px)}
    80% {left: calc(50% - 100px + 2px)}
    to {left: calc(50% - 100px + 2px)}
}
@keyframes red-move {
    from {right: calc(50% - 100px + 2px)}
    20% {right: calc(50% - 100px + 2px)}
    35% {right: calc(50% - 227px + 2px)}
    40% {right: calc(50% - 233px + 2px)}
    60% {right: calc(50% - 233px + 2px)}
    65% {right: calc(50% - 227px + 2px)}
    80% {right: calc(50% - 100px + 2px)}
    to {right: calc(50% - 100px + 2px)}
}
@keyframes button-move {
    from {right: calc(50% - 20px)}
    20% {right: calc(50% - 20px)}
    35% {right: calc(50% - 147px)}
    40% {right: calc(50% - 153px)}
    60% {right: calc(50% - 153px)}
    65% {right: calc(50% - 147px)}
    80% {right: calc(50% - 20px)}
    to {right: calc(50% - 20px)}
}
@keyframes red-heart {
    from {  
        width: 11px;
        height: 17px;
        top: 0;
        background: red;
        border-radius: 8px 8px 0 0;
    }
    40% {
        width: 11px;
        height: 17px;
        top: 0;
        background: red;
        border-radius: 8px 8px 0 0;
    }
    50% {
        width: 15px;
        height: 23px;
        top: -13px;
        background: red;
        border-radius: 10px 10px 0 0;
    }
    60% {
        width: 11px;
        height: 17px;
        top: 0;
        background: red;
        border-radius: 8px 8px 0 0;
    }
    to {
        width: 11px;
        height: 17px;
        top: 0;
        background: red;
        border-radius: 8px 8px 0 0;
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
        left: -4px;
    }
    60% {
        left: 0;
    }
    to {
        left: 0;
    }
}

</style>
