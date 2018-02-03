<template>
  <div id="app">
    <common-header :bgColor="isColor" @home="home">
      <span slot="title">{{title}}</span>
    </common-header>
    <router-view/>
    <common-footer :bgColor="isColor" @change="switchTab"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonFooter
  },
  data () {
    return {
      isColor:'rgb(150, 0, 0)',
      title: 'Movie'
    }
  },
  methods:{
    home () {
      this.switchTab('Movie'),
      this.$router.push("/");
    },
    switchTab (tabName) {
      this.title = tabName;
      switch (tabName) {
        case 'Movie' :
          this.isColor = 'rgb(150, 0, 0)';
          break;
        case 'Music' :
          this.isColor = 'rgb(0, 0, 0)';
          break;  
        case 'Book' :
          this.isColor = 'rgb(121, 85, 72)';
          break;
        case 'Photo' :
          this.isColor = 'rgb(63, 81, 181)';
          break;
        default:        
          this.isColor = 'rgb(33, 150, 243)' ;     
      }
    }
  }
}
</script>

<style>

</style>
