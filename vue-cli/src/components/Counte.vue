<template>
  <div>
    <h1>计数器：{{$store.state.count}}</h1>
    <!-- <h1>{{count}}</h1> -->
    <button @click="$store.commit('add', 10)">加1</button>
    <button @click="$store.commit('sub', 10)">减1</button>
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
//   data () {
//     return {}
//   },
  store,
  //   computed: {
  //     count () {
  //       return this.$store.state.count
  //     }
  //   }
  //   computed: mapState ({
  //       count: state => state.count
  //   }),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'sub']),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>

<style>

</style>
