<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goForword">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/test">测试</router-link>
      <router-link :to="{name:'test1', params: {username: 'chenwentao', age: 23}}">子路由1</router-link>
      <router-link to="/test/test2">子路由2</router-link>
      <router-link to="/testUrl/5/zhangsan">TestUrl传参</router-link>
      <router-link to="/home/8/lisi">重定位</router-link>
      <router-link to="/abc">alias</router-link>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goForword () {
      this.$router.go(1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: all 2s;
}

/* .fade-leave{
  opacity: 1;
} */
</style>
