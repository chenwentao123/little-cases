<template>
  <div>
    <h1>计数器：{{$store.state.count}}</h1>
    <button @click="$store.commit('add')">加1</button>
    <button @click="$store.commit('sub')">减1</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  data () {
    return {}
  },
  store
}
</script>

<style>

</style>
