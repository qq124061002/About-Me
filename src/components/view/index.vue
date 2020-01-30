<template>
    <div class="section-container">
        <div class="section summary">
            <div class="summary-content">
                <index-logo>
                </index-logo>
            </div>
        </div>
    </div>
</template>

<script>
import indexLogo from './logo.vue';

export default {
    name: 'index',
    components: {
        indexLogo
    }
}
</script>

<style lang='scss'>
.section-container {
    width: 100%;
    margin: 0 auto;
    .section {
        width: 100%;
        height: 100vh;
        position: relative;
        padding-bottom: 20px;
        &.summary{
            color: #2c3e50;
            position: relative;
            background-image: url(../../assets/img/backgroud1.jpg);
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
            }
        }
    }
}
</style>
