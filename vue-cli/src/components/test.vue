<template>
    <div>
        <h1 class="hw">Hello World</h1>
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是测试组件'
    }
  }
}
</script>

<style scoped>
.hw{
    background: #ff0000;
}
</style>
