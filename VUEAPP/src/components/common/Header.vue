<template>
    <div class="header" :style="{backgroundColor:bgColor}">
        <span @click="$emit('home')">首页</span>
        <h2 class="title">
            <slot name="title">默认值</slot>
        </h2>
    </div>
</template>

<script>
export default {
   props: ['bgColor']
}
</script>

<style scoped>
.header{
    width:100%;
    height:1rem;
    position: fixed;
    top:0;
    line-height: 1rem;
    color:#fff;
    z-index:999;
}
.header span{
    margin-left:0.1rem;
}
.title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

