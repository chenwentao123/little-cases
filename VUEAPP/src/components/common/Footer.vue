<template>
  <div class="footer" :style="{backgroundColor:isColor}">
    <div><router-link to="/">电影</router-link></div>
    <div><router-link to="/music">音乐</router-link></div>
    <div><router-link to="/book">书籍</router-link></div>
    <div><router-link to="/photo">图片</router-link></div>
  </div>
</template>

<script>
export default {
  props: ['isColor']
}
</script>

<style scoped>
.footer{
    width:100%;
    height:1rem;
    position: fixed;
    bottom:0;
    color:#ccc;
    display:flex;
}
.footer div{
    flex-grow: 1;
    line-height: 1rem;
    text-align: center;
}
.footer div a{
  color:#ccc;
}
.footer div a.router-link-exact-active {
  color:#fff;
}
</style>


