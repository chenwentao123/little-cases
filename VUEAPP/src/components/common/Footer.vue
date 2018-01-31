<template>
  <div class="footer" :style="{backgroundColor:bgColor}">
    <div><router-link to="/" @click.native="$emit('change', 'Movie')">电影</router-link></div>
    <div><router-link to="/music" @click.native="$emit('change', 'Music')">音乐</router-link></div>
    <div><router-link to="/book"  @click.native="$emit('change', 'Book')">书籍</router-link></div>
    <div><router-link to="/photo"  @click.native="$emit('change', 'Photo')">图片</router-link></div>
  </div>
</template>

<script>
export default {
  props: ['bgColor']
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
  outline:none;
}
.footer div a.router-link-exact-active {
  color:#fff;
}
</style>


