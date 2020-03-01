<template>
    <div id="bran-app" class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    }
}
</script>

<style lang='scss'>
@import  './assets/css/bootstrap.css';
@import  './assets/css/base.scss';

#bran-app{
    overflow: auto;
}
</style>
